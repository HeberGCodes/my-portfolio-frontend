// src/components/FadeInSection.jsx
import { useRef, useState, useEffect } from "react";

export default function FadeInSection({ children }) {
  const domRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`
        opacity-0 translate-y-5
        transition-all duration-1000 
        ${isVisible ? "opacity-100 translate-y-0" : ""}`}
    >
      {children}
    </div>
  );
}
