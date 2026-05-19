'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProjectImage } from './ProjectGallery';

interface FullscreenModalProps {
  image: ProjectImage;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  showControls: boolean;
}

export default function FullscreenModal({ image, onClose, onNext, onPrev, showControls }: FullscreenModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (showControls) {
        if (e.key === 'ArrowRight') onNext();
        if (e.key === 'ArrowLeft') onPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Lock body scroll efficiently
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalStyle;
    };
  }, [onClose, onNext, onPrev, showControls]);

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-zinc-800/80 hover:bg-zinc-700 text-white rounded-full transition-colors z-[110]"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close modal"
      >
        <X size={24} />
      </button>

      {showControls && (
        <>
          <button
            className="absolute left-2 md:left-6 p-2 bg-zinc-800/80 hover:bg-zinc-700 text-white rounded-full transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous Image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            className="absolute right-2 md:right-6 p-2 bg-zinc-800/80 hover:bg-zinc-700 text-white rounded-full transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next Image"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      {/* onClick.stopPropagation prevents closing the modal when clicking the image itself */}
      <div 
        className="relative w-full h-full max-w-6xl max-h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.imageUrl}
          alt={image.altText}
          fill
          sizes="100vw"
          className="object-contain cursor-zoom-out"
          quality={100}
          priority 
        />
      </div>
    </div>
  );

  // Mount the modal directly into the body tag
  return createPortal(modalContent, document.body);
}