// hooks/useInView.js
import { useState, useEffect } from 'react';

const useInView = (elementId, threshold = 0.1) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );

    const element = document.querySelector(`#${elementId}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementId, threshold]);

  return inView;
};

export default useInView;
