// hooks/useInView.js
import { useState, useEffect } from 'react';

const useInView = (threshold = 0.1) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold
      }
    );

    const element = document.querySelector('#animated-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return inView;
};

export default useInView;
