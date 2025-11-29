import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target); // 一度出たら監視終了
          }
        });
      },
      { threshold: 0.2 } // 20%見えたら発火
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`reveal ${inView ? "in" : ""}`}
    >
      {children}
    </div>
  );
}