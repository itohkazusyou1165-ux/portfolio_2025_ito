import { useEffect, useRef } from "react";

export default function GlobalScrollObserver({
  targetClass = "watch",
  addClass = "in-view",
  threshold = 0.1, // 0.2だとスマホで反応しにくいことがあるので0.1推奨
  once = true,
}) {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(addClass);
            if (once) observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(`.${targetClass}`);
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, [targetClass, addClass, threshold, once]);

  return null;
}