"use client"

import HeroImageSection from "@/components/hero-image-section"
import WhatIsItSection from "@/components/what-is-it-section"
import GreatThingsSection from "@/components/great-things-section"
import IDecidedSection from "@/components/i-decided-section"
import FAQLinkSection from "@/components/faq-link-section"
import RegistrationForm from "@/components/registration-form"
import TimeZoneSection from "@/components/timezone"


export default function SonhandoAltoLanding() {
  return (
    <div className="min-h-screen bg-white">
      <HeroImageSection />
      <WhatIsItSection />
      <GreatThingsSection />
      <TimeZoneSection/>
      <IDecidedSection />
      <FAQLinkSection />
      <RegistrationForm variant="page" />
    </div>
  )
}
