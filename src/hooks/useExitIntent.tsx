
import { useState, useEffect, useCallback } from 'react';

export const useExitIntent = () => {
  const [isTriggered, setIsTriggered] = useState(false);
  const [hasTriggeredThisSession, setHasTriggeredThisSession] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger if mouse leaves from the top and hasn't been triggered this session
    if (e.clientY <= 0 && !hasTriggeredThisSession) {
      setIsTriggered(true);
      setHasTriggeredThisSession(true);
      // Store in sessionStorage to persist across page navigations within the session
      sessionStorage.setItem('exitIntentTriggered', 'true');
    }
  }, [hasTriggeredThisSession]);

  useEffect(() => {
    // Check if already triggered this session
    const alreadyTriggered = sessionStorage.getItem('exitIntentTriggered');
    if (alreadyTriggered) {
      setHasTriggeredThisSession(true);
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const resetTrigger = () => {
    setIsTriggered(false);
  };

  return { isTriggered, resetTrigger };
};
