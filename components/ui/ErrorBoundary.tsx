'use client'
import React from 'react';
import Link from 'next/link';

interface ErrorStateProps {
  title?: string;
  message?: string;
  showRetry?: boolean;
  onRetry?: () => void;
  showHome?: boolean;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Algo salió mal",
  message = "Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.",
  showRetry = true,
  onRetry,
  showHome = true
}) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-8">
      <div className="text-center max-w-md mx-auto space-y-6">
        {/* Error Icon */}
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
          <svg 
            className="w-10 h-10 text-red-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z" 
            />
          </svg>
        </div>
        
        {/* Error Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-dark-800">{title}</h3>
          <p className="text-neutral-600">{message}</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {showRetry && onRetry && (
            <button 
              onClick={onRetry}
              className="btn-primary"
            >
              Intentar de Nuevo
            </button>
          )}
          {showHome && (
            <Link href="/" className="btn-outline">
              Ir al Inicio
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

// Not Found Component
export const NotFoundState: React.FC<{ 
  title?: string; 
  message?: string; 
  backUrl?: string; 
  backText?: string; 
}> = ({
  title = "Página no encontrada",
  message = "La página que buscas no existe o ha sido movida.",
  backUrl = "/",
  backText = "Volver al Inicio"
}) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-8">
      <div className="text-center max-w-md mx-auto space-y-6">
        {/* 404 Icon */}
        <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
          <svg 
            className="w-10 h-10 text-accent-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467.881-6.077 2.33l-.853-.853A9.967 9.967 0 0112 13c3.536 0 6.646 1.837 8.4 4.6A10.016 10.016 0 0012 21C5.373 21 0 16.627 0 12S5.373 3 12 3s12 5.373 12 12c0 2.4-.7 4.633-1.9 6.518l-.847-.847A8.967 8.967 0 0021 13c0-4.971-4.029-9-9-9s-9 4.029-9 9 4.029 9 9 9c1.666 0 3.223-.452 4.56-1.24" 
            />
          </svg>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-dark-800">{title}</h3>
          <p className="text-neutral-600">{message}</p>
        </div>
        
        <Link href={backUrl} className="btn-primary inline-block">
          {backText}
        </Link>
      </div>
    </div>
  );
};

// Loading State Component
export const LoadingState: React.FC<{ message?: string }> = ({ 
  message = "Cargando..." 
}) => {
  return (
    <div className="min-h-[200px] flex items-center justify-center p-8">
      <div className="text-center space-y-4">
        <div className="w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-neutral-600">{message}</p>
      </div>
    </div>
  );
};

export default ErrorState;