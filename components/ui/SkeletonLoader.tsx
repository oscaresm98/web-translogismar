import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  className?: string;
  lines?: number; // For text variant
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = 'rectangular',
  width,
  height,
  className = '',
  lines = 1
}) => {
  const baseClasses = 'bg-neutral-200 animate-pulse';
  
  const getVariantClasses = () => {
    switch (variant) {
      case 'text':
        return 'rounded h-4';
      case 'circular':
        return 'rounded-full';
      case 'rectangular':
        return 'rounded';
      case 'card':
        return 'rounded-xl';
      default:
        return 'rounded';
    }
  };

  const getInlineStyles = () => {
    const styles: React.CSSProperties = {};
    if (width) styles.width = typeof width === 'number' ? `${width}px` : width;
    if (height) styles.height = typeof height === 'number' ? `${height}px` : height;
    return styles;
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${getVariantClasses()}`}
            style={getInlineStyles()}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
      style={getInlineStyles()}
    />
  );
};

// Pre-built skeleton components
export const ServiceCardSkeleton: React.FC = () => (
  <div className="card p-6 space-y-4">
    <SkeletonLoader variant="rectangular" height={200} className="w-full" />
    <div className="space-y-3">
      <SkeletonLoader variant="text" height={24} width="60%" />
      <SkeletonLoader variant="text" lines={3} />
      <div className="flex justify-between items-center pt-4">
        <SkeletonLoader variant="text" width={80} height={16} />
        <SkeletonLoader variant="rectangular" width={120} height={36} className="rounded-lg" />
      </div>
    </div>
  </div>
);

export const ServicePageSkeleton: React.FC = () => (
  <div className="col-span-2 space-y-6">
    <SkeletonLoader variant="rectangular" height={400} className="w-full rounded-2xl" />
    <div className="space-y-4">
      <SkeletonLoader variant="text" height={32} width="75%" />
      <SkeletonLoader variant="text" lines={4} />
      <div className="grid grid-cols-2 gap-4">
        <SkeletonLoader variant="rectangular" height={120} className="rounded-xl" />
        <SkeletonLoader variant="rectangular" height={120} className="rounded-xl" />
      </div>
    </div>
  </div>
);

export default SkeletonLoader;