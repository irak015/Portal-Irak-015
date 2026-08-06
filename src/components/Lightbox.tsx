import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  imageSrc: string | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ imageSrc, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (imageSrc) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [imageSrc, onClose]);

  if (!imageSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-[110] p-2 cursor-pointer"
        onClick={onClose}
      >
        <X size={32} />
      </button>
      <img 
        src={imageSrc} 
        alt="Full size view" 
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()} 
      />
    </div>
  );
};
