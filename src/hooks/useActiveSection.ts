'use client';
import { useEffect, useRef } from 'react';
import { useScroll } from '../context/scroll-context';

export const useActiveSection = (sectionIds: string[]) => {
  const { setActiveSection } = useScroll();
  const sectionIdsRef = useRef(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      const triggerLine = window.scrollY + window.innerHeight * 0.3;

      let currentActive = sectionIdsRef.current[0];

      // Loop through sections to find the one closest to the top of the page 
      for (const id of sectionIdsRef.current) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;

          if (offsetTop <= triggerLine) {
            currentActive = id;
          }
        }
      }

      // Edge case: If user scrolls to the absolute bottom of the document force the last section  to be active.
      const isBottom = 
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      
      if (isBottom) {
        currentActive = sectionIdsRef.current[sectionIdsRef.current.length - 1];
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);
};