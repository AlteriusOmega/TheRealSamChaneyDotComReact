import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface GradientContextType {
  gradientStart: string;
  gradientEnd: string;
}

const GradientContext = createContext<GradientContextType | null>(null);

export const useGradient = () => {
  const context = useContext(GradientContext);
  if (!context) {
    throw new Error('useGradient must be used within a GradientProvider');
  }
  return context;
};

interface LayoutProps {
  children?: React.ReactNode;
}

export const GradientProvider: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [gradientStart, setGradientStart] = useState<string>('blue');
  const [gradientEnd, setGradientEnd] = useState<string>('purple');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setGradientStart('red');
        setGradientEnd('orange');
        break;
      case '/contact':
        setGradientStart('blue');
        setGradientEnd('green');
        break;
      case '/projects':
        setGradientStart('purple');
        setGradientEnd('pink');
        break;
      default:
        setGradientStart('blue');
        setGradientEnd('purple');
    }
  }, [location.pathname]);

  useEffect(() => {
    // Set CSS variables
    document.documentElement.style.setProperty('--gradient-start', gradientStart);
    document.documentElement.style.setProperty('--gradient-end', gradientEnd);
  }, [gradientStart, gradientEnd]);

  return (
    <GradientContext.Provider value={{ gradientStart, gradientEnd }}>
      {children}
    </GradientContext.Provider>
  );
};
