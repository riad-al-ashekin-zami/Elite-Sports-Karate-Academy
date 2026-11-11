import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ALL_SITE_PHOTOS, GalleryPhoto } from '../types.ts';

interface LightboxContextType {
  openPhoto: (idOrSrc: string) => void;
  closeLightbox: () => void;
  activePhoto: GalleryPhoto | null;
  currentIndex: number;
  totalPhotos: number;
  nextPhoto: () => void;
  prevPhoto: () => void;
  isOpen: boolean;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const openPhoto = useCallback((idOrSrc: string) => {
    const found = ALL_SITE_PHOTOS.find(
      (p) => p.id === idOrSrc || p.src === idOrSrc || p.src.includes(idOrSrc) || idOrSrc.includes(p.src)
    );
    if (found) {
      setActivePhoto(found);
    } else {
      // Create a fallback entry if a raw src was passed
      setActivePhoto({
        id: 'custom',
        src: idOrSrc,
        alt: 'Elite Sports Karate Academy Photo',
        caption: 'Elite Sports Karate Academy',
        category: 'Dojo',
      });
    }
  }, []);

  const closeLightbox = useCallback(() => {
    setActivePhoto(null);
  }, []);

  const currentIndex = activePhoto
    ? ALL_SITE_PHOTOS.findIndex((p) => p.id === activePhoto.id || p.src === activePhoto.src)
    : -1;

  const nextPhoto = useCallback(() => {
    if (currentIndex === -1) return;
    const nextIdx = (currentIndex + 1) % ALL_SITE_PHOTOS.length;
    setActivePhoto(ALL_SITE_PHOTOS[nextIdx]);
  }, [currentIndex]);

  const prevPhoto = useCallback(() => {
    if (currentIndex === -1) return;
    const prevIdx = (currentIndex - 1 + ALL_SITE_PHOTOS.length) % ALL_SITE_PHOTOS.length;
    setActivePhoto(ALL_SITE_PHOTOS[prevIdx]);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!activePhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto, closeLightbox, nextPhoto, prevPhoto]);

  return (
    <LightboxContext.Provider
      value={{
        openPhoto,
        closeLightbox,
        activePhoto,
        currentIndex: currentIndex >= 0 ? currentIndex : 0,
        totalPhotos: ALL_SITE_PHOTOS.length,
        nextPhoto,
        prevPhoto,
        isOpen: activePhoto !== null,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};
