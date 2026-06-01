"use client";

import { useEffect, useState } from "react";

export type Viewport = "mobile" | "tablet" | "desktop";

const resolveViewport = (width: number): Viewport => {
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

export const useViewport = () => {
  const [viewport, setViewport] = useState<Viewport>("desktop");

  useEffect(() => {
    const updateViewport = () => {
      setViewport(resolveViewport(window.innerWidth));
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  return viewport;
};
