"use client";

import { useEffect, useState } from "react";

type UseInViewOptions = {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
  initialInView?: boolean;
};

export const useInView = (
  targetId: string,
  {
    rootMargin = "0px",
    threshold = 0.1,
    once = false,
    initialInView = false,
  }: UseInViewOptions = {},
) => {
  const [isInView, setIsInView] = useState(initialInView);

  useEffect(() => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);

        if (once && entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, rootMargin, targetId, threshold]);

  return isInView;
};
