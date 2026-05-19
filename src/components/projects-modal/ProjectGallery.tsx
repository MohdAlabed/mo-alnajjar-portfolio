'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

export type ProjectImage = {
  imageUrl: string;
  altText: string;
};
 
interface ProjectGalleryProps {
  images: ProjectImage[];
  autoPlayInterval?: number;
}

const FullscreenModal = dynamic(() => import('./FullscreenModal'), { 
  ssr: false 
});

export default function ProjectGallery({ images, autoPlayInterval = 3500 }: ProjectGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isOpen, images.length, autoPlayInterval]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  if (!images?.length) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative aspect-video w-full overflow-hidden bg-zinc-800/50 rounded-xl border border-zinc-700 group cursor-zoom-in transition-all"
        aria-label="View fullscreen gallery"
      >
        {images.map((img, idx) => {
          const isActive = idx === currentIndex;
          // Only mount the active image, or the adjacent images for preloading
          const shouldRender = idx === currentIndex || idx === (currentIndex + 1) % images.length;
          if (!shouldRender) return null;
          return (
            <Image
              key={img.imageUrl}
              src={img.imageUrl}
              alt={img.altText}
              sizes="(max-width: 1024px) 100vw, 33vw"
              fill
              priority={idx === 0}
              aria-hidden={!isActive} 
              className={`object-contain transition-opacity duration-700 ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          );
        })}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-20" />
      </button>

      {isOpen && (
        <FullscreenModal
          image={images[currentIndex]}
          onClose={() => setIsOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
          showControls={images.length > 1}
        />
      )}
    </>
  );
}