import { useEffect } from "react";

interface ToastProps {
  message: string;
  icon?: React.ReactNode;
  onClose: () => void;
  duration?: number; 
}

export default function ToastBar({ message, icon, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fundo escuro com transparência */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Caixa do toast */}
      <div className="relative z-10 flex items-center gap-3 bg-white rounded-xl shadow-xl p-4 max-w-sm w-full animate-fadeIn">
        {icon && <span className="text-xl">{icon}</span>}
        <p className="text-gray-800 font-medium">{message}</p>
      </div>
    </div>
  );
}
