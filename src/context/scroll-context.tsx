'use client';
import { createContext, useContext, useState, ReactNode, useMemo, useEffect } from 'react';

interface ScrollContextType {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const hash = window.location.hash.split('#')[1];

    if (hash) {
      setActiveSection(hash);
    } else if (window.scrollY === 0) {
      setActiveSection('hero');
    }
  }, []);

  // Memoize to prevent unnecessary re-renders
  const value = useMemo(() => ({
    activeSection,
    setActiveSection
  }), [activeSection]);

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) throw new Error('useScroll must be used within ScrollProvider');
  return context;
};