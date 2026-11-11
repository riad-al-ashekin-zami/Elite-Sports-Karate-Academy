import React, { useState } from 'react';
import { Shield, Award, Users, Flame, Sparkles, Maximize2 } from 'lucide-react';
import { useLightbox } from '../context/LightboxContext.tsx';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | 'auto';
  className?: string;
  imgClassName?: string;
  badge?: string;
  focalPoint?: 'top' | 'center' | 'bottom';
  allowFullscreen?: boolean;
  photoId?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  caption,
  aspectRatio = 'auto',
  className = '',
  imgClassName = '',
  badge,
  focalPoint = 'center',
  allowFullscreen = true,
  photoId,
  onClick,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { openPhoto } = useLightbox();

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(e as unknown as React.MouseEvent<HTMLImageElement>);
    } else if (allowFullscreen && !hasError) {
      openPhoto(photoId || src);
    }
  };

  // Pick an icon based on keywords in alt/src
  const getIcon = () => {
    const text = (alt + ' ' + src).toLowerCase();
    if (text.includes('medal') || text.includes('plaque') || text.includes('championship')) {
      return <Award className="w-8 h-8 text-[#E11D2E]" />;
    }
    if (text.includes('dojo') || text.includes('student') || text.includes('group')) {
      return <Users className="w-8 h-8 text-[#E11D2E]" />;
    }
    if (text.includes('punch') || text.includes('kata') || text.includes('training')) {
      return <Flame className="w-8 h-8 text-[#E11D2E]" />;
    }
    return <Shield className="w-8 h-8 text-[#E11D2E]" />;
  };

  const aspectClass = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/4': 'aspect-[3/4]',
    'auto': '',
  }[aspectRatio];

  if (hasError) {
    return (
      <div
        className={`relative overflow-hidden bg-neutral-900 border border-neutral-800 rounded-lg flex flex-col items-center justify-center p-6 text-center group ${aspectClass} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 bg-radial from-[#E11D2E]/10 via-transparent to-transparent pointer-events-none" />
        
        {/* Karate Gi / Belt inspired graphic background */}
        <div className="absolute top-2 right-2 text-xs font-mono uppercase tracking-widest text-neutral-600 bg-neutral-950/80 px-2 py-0.5 rounded border border-neutral-800">
          Photo Slot
        </div>

        <div className="mb-3 p-3 rounded-full bg-neutral-800/80 border border-neutral-700/60 shadow-inner">
          {getIcon()}
        </div>

        <h4 className="text-sm font-semibold text-neutral-200 line-clamp-2 max-w-xs mb-1">
          {caption || alt}
        </h4>
        <p className="text-xs text-neutral-500 font-mono tracking-tight">
          Elite Sports Karate Academy
        </p>

        {badge && (
          <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            <Sparkles className="w-3 h-3" />
            {badge}
          </span>
        )}
      </div>
    );
  }

  const focalClass = {
    top: 'object-top',
    center: 'object-center',
    bottom: 'object-bottom',
  }[focalPoint];

  return (
    <div
      onClick={handleImageClick}
      className={`relative overflow-hidden bg-neutral-900 ${
        allowFullscreen ? 'cursor-pointer group' : ''
      } ${aspectClass} ${className}`}
      role={allowFullscreen ? 'button' : undefined}
      tabIndex={allowFullscreen ? 0 : undefined}
      onKeyDown={(e) => {
        if (allowFullscreen && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleImageClick(e as unknown as React.MouseEvent<HTMLDivElement>);
        }
      }}
      aria-label={allowFullscreen ? `View full image: ${alt}` : alt}
    >
      {/* Skeleton / Ambient backdrop before image loads */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-800 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#E11D2E] border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${focalClass} ${imgClassName} transition-all duration-300 ${
          allowFullscreen ? 'group-hover:scale-[1.02]' : ''
        } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />

      {/* Subtle hover overlay with expand icon for all site images */}
      {allowFullscreen && isLoaded && (
        <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-3 pointer-events-none z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/90 text-white text-xs font-medium border border-neutral-700/80 shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform">
            <Maximize2 className="w-3.5 h-3.5 text-[#E11D2E]" />
            <span>View Full Image</span>
          </div>
        </div>
      )}
    </div>
  );
};
