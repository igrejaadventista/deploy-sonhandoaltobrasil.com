"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Copy,
  Check,
  ExternalLink,
  PlayCircle,
  MapPin
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { brazilStatesPaths } from "@/utils/brazilStatesPaths";
import Image from "next/image";

type UnionCode =
  | "UCB"
  | "ULB"
  | "UNEB"
  | "UNB"
  | "UNoB"
  | "UCoB"
  | "USB"
  | "USeB";

const unionName: Record<UnionCode, string> = {
  UCB: "União Central Brasileira",
  ULB: "União Leste Brasileira",
  UNEB: "União Nordeste Brasileira",
  UNB: "União Norte Brasileira",
  UNoB: "União Noroeste Brasileira",
  UCoB: "União Centro-Oeste Brasileira",
  USB: "União Sul Brasileira",
  USeB: "União Sudeste Brasileira"
};

const unionOfState: Record<string, UnionCode> = {
  SP: "UCB",
  BA: "ULB",
  SE: "ULB",
  AL: "UNEB",
  CE: "UNEB",
  PB: "UNEB",
  PE: "UNEB",
  PI: "UNEB",
  RN: "UNEB",
  AP: "UNB",
  MA: "UNB",
  PA: "UNB",
  AC: "UNoB",
  AM: "UNoB",
  RO: "UNoB",
  RR: "UNoB",
  DF: "UCoB",
  GO: "UCoB",
  MT: "UCoB",
  MS: "UCoB",
  TO: "UCoB",
  PR: "USB",
  SC: "USB",
  RS: "USB",
  ES: "USeB",
  MG: "USeB",
  RJ: "USeB"
};

const pastorsByUnion: Partial<
  Record<
    UnionCode,
    {
      name: string;
      phone?: string;
      whatsapp?: string;
      videoUrl?: string;
      photo?: string;
    }
  >
> = {
  UCB: {
    name: "Pr. Marco Aurélio",
    phone: "(19) 99998-8554",
    whatsapp: "5519999988554",
    photo: "/images/Pr_Marco_Aurelio_Pinho.webp"
  },
  ULB: {
    name: "Pr. Gilberto Oliveira Basilio",
    phone: "(71) 9100-0462",
    whatsapp: "557191000462",
    photo: "/images/Pr_Gilberto_Oliveira_Basilio.webp"
  },
  UNB: {
    name: "Pr. Ivan Paiva Nascimento ",
    phone: "(91) 9239-5059",
    whatsapp: "559192395059",
    photo: "/images/Pr_Ivan_Paiva_Nascimento.webp"
  },
  UNoB: {
    name: "Pr. Fabiano Denardi",
    phone: "(92) 8117-7072",
    whatsapp: "559281177072",
    photo: "/images/Pr_Fabiano_Denardi.webp"
  },
  UNEB: {
    name: "Pr. Alan Araújo",
    phone: "(81) 8771-7972",
    whatsapp: "558187717972",
    photo: "/images/Pr_Alan_Araujo.webp"
  },
  USeB: {
    name: "Pr. Fabiano Paulo de Andrade",
    phone: "(24) 98103-2596",
    whatsapp: "5524981032596",
    photo: "/images/Pr_Fabiano_Paulo_Andrade.webp"
  },
  USB: {
    name: "Pr. Fábio Motta",
    phone: "(41) 9643-8918",
    whatsapp: "554196438918",
    photo: "/images/pr_fabio_motta.webp"
  },
  UCoB: {
    name: "Pr. Marcos Souza",
    phone: "(61) 8126-8818",
    whatsapp: "556181268818",
    photo: "/images/Pr_Marcos_Souza.webp"
  }
};

const enabledByState: Partial<Record<string, boolean>> = {};

export default function BrazilMap() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [copied, setCopied] = useState<"phone" | null>(null);
  const { toast } = useToast();

  const handleStateClick = (stateId: string) => {
    const isEnabled = enabledByState[stateId] ?? true;
    if (!isEnabled) return;
    setSelectedState((prev) => (prev === stateId ? null : stateId));
  };

  const handleCopy = async (text: string) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      }
      setCopied("phone");
      toast({ title: "Telefone copiado!", description: text });
      setTimeout(() => setCopied(null), 1800);
    } catch {
      toast({
        title: "Não foi possível copiar",
        description: "Tente manualmente ou verifique permissões do navegador.",
        variant: "destructive" as any
      });
    }
  };

  const handleWhatsAppClick = (phoneNumber: string) => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  const unionCode: UnionCode | null = selectedState
    ? unionOfState[selectedState] ?? null
    : null;
  const unionDisplay = unionCode ? unionName[unionCode] : null;
  const currentPastor = unionCode ? pastorsByUnion[unionCode] : undefined;

  const peersInUnion = useMemo(() => {
    if (!unionCode) return [];
    return Object.entries(unionOfState)
      .filter(([, u]) => u === unionCode)
      .map(([uf]) => uf);
  }, [unionCode]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
      {/* Mapa */}
      <div className="flex-1 bg-white rounded-lg shadow-lg p-4 md:p-4 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 470 470"
          className="w-full h-auto max-w-full"
        >
          {brazilStatesPaths.map((state) => {
            const isEnabled = enabledByState[state.id] ?? true;
            const isSelected = selectedState === state.id;
            const isUnionPeer =
              !!unionCode && unionOfState[state.id] === unionCode;

            const baseFill = !isEnabled
              ? "fill-gray-200"
              : isSelected
              ? "fill-orange-500"
              : isUnionPeer
              ? "fill-orange-300"
              : "fill-gray-300 hover:fill-orange-400";

            return (
              <motion.path
                key={state.id}
                d={state.path}
                className={`${baseFill} stroke-white stroke-[0.5px] ${
                  isEnabled ? "cursor-pointer" : "cursor-not-allowed"
                } transition-colors duration-200`}
                onClick={() => handleStateClick(state.id)}
                initial={{ scale: 1 }}
                whileHover={
                  isEnabled
                    ? { scale: 1.01, originX: "50%", originY: "50%" }
                    : undefined
                }
                transition={{ duration: 0.08 }}
              />
            );
          })}
          {brazilStatesPaths.map((state) => {
            const isEnabled = enabledByState[state.id] ?? true;
            const isSelected = selectedState === state.id;
            return (
              <text
                key={`label-${state.id}`}
                x={state.labelX}
                y={state.labelY}
                fontSize="10"
                fill={!isEnabled ? "#9ca3af" : isSelected ? "white" : "gray"}
                textAnchor="middle"
                pointerEvents="none"
                className="font-semibold select-none"
              >
                {state.id}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Painel */}
      <div className="lg:w-1/3">
        {selectedState ? (
          <Card className="shadow-lg rounded-lg">
            <CardContent className="p-4 md:p-6 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="flex-1 text-md md:text-xl font-bold text-orange-500">
                  {brazilStatesPaths.find((s) => s.id === selectedState)?.name}{" "}
                  ({selectedState})
                </h3>
                {unionDisplay && (
                  <p className="flex-1 flex gap-1 px-3 items-center text-xs  text-gray-900 bg-gray-300 rounded-full  py-1 self-start md:self-auto">
                    <MapPin className="" />
                    {unionDisplay}
                  </p>
                )}
              </div>

              {/* Foto do Pastor */}
              {currentPastor?.photo && (
                <div>
                  <div className="rounded-lg overflow-hidden ">
                    <div className="w-full bg-[#000000] h-64 md:h-80 overflow-hidden rounded-lg">
                      <Image
                        width={500}
                        height={500}
                        quality={100}
                        src={currentPastor.photo}
                        alt={`Foto do Pastor ${currentPastor.name}`}
                        className=" object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Pastor da União */}
              {unionCode && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">
                    Pastor Responsável (União)
                  </h4>
                  {currentPastor?.name ? (
                    <div className="space-y-2 text-gray-700 text-sm md:text-base">
                      <div className="font-medium">{currentPastor.name}</div>
                      {currentPastor.phone && (
                        <div className="flex items-center space-x-2">
                          <Phone className="h-3 w-3 md:h-4 md:w-4 text-blue-500" />
                          <span className="text-xs md:text-sm">
                            {currentPastor.phone}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleCopy(currentPastor.phone!)}
                            aria-label="Copiar telefone"
                            className="ml-auto h-6 w-6 md:h-8 md:w-8"
                          >
                            {copied === "phone" ? (
                              <Check className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                            ) : (
                              <Copy className="h-3 w-3 md:h-4 md:w-4" />
                            )}
                          </Button>
                        </div>
                      )}
                      {currentPastor.whatsapp && (
                        <Button
                          onClick={() =>
                            handleWhatsAppClick(currentPastor.whatsapp!)
                          }
                          className="w-full bg-green-500 hover:bg-green-600 text-white mt-2 text-xs md:text-sm py-1 h-8 md:h-10"
                        >
                          <PlayCircle className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                          Enviar WhatsApp
                        </Button>
                      )}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-xs md:text-sm">
                      Sem dados do pastor para esta união.
                    </p>
                  )}
                </div>
              )}

              {/* Estados da mesma União */}
              {unionCode && peersInUnion.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">
                    Estados nessa União
                  </h4>
                  <div className="border-t border-gray-200 pt-2">
                    <p className="text-gray-700 text-xs md:text-sm">
                      {peersInUnion.sort().join(", ")}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card className="shadow-lg rounded-lg h-full flex items-center justify-center p-4 md:p-6 text-center text-gray-600">
            <CardContent>
              <p className="text-sm md:text-base">
                Clique em um estado no mapa para ver a união, o pastor e
                contatos.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
