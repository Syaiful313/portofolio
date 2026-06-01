"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Viewport } from "./useViewport";

export type FloatingParticle = {
  left: number;
  top: number;
  xTo: number;
  yTo: number;
  scale: number;
  duration: number;
};

type ParticleOptions = {
  mobileCount?: number;
  tabletCount?: number;
  desktopCount?: number;
  mobileBaseDuration?: number;
  tabletBaseDuration?: number;
  desktopBaseDuration?: number;
  mobileDurationRange?: number;
  tabletDurationRange?: number;
  desktopDurationRange?: number;
};

const getViewportValue = (
  viewport: Viewport,
  values: Record<Viewport, number>,
) => values[viewport];

export const useFloatingParticles = (
  viewport: Viewport,
  options: ParticleOptions = {},
) => {
  const shouldReduceMotion = useReducedMotion();
  const [particles, setParticles] = useState<FloatingParticle[]>([]);
  const {
    mobileCount = 8,
    tabletCount = 14,
    desktopCount = 20,
    mobileBaseDuration = 3,
    tabletBaseDuration = 4,
    desktopBaseDuration = 6,
    mobileDurationRange = 2,
    tabletDurationRange = 3,
    desktopDurationRange = 4,
  } = options;

  useEffect(() => {
    if (shouldReduceMotion) {
      setParticles([]);
      return;
    }

    const particleCount = getViewportValue(viewport, {
      mobile: mobileCount,
      tablet: tabletCount,
      desktop: desktopCount,
    });
    const baseDuration = getViewportValue(viewport, {
      mobile: mobileBaseDuration,
      tablet: tabletBaseDuration,
      desktop: desktopBaseDuration,
    });
    const durationRange = getViewportValue(viewport, {
      mobile: mobileDurationRange,
      tablet: tabletDurationRange,
      desktop: desktopDurationRange,
    });

    setParticles(
      Array.from({ length: particleCount }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        xTo: Math.random() * 60 + 20,
        yTo: Math.random() * 60 + 20,
        scale: Math.random() * 0.6 + 0.7,
        duration: Math.random() * durationRange + baseDuration,
      })),
    );
  }, [
    desktopBaseDuration,
    desktopCount,
    desktopDurationRange,
    mobileBaseDuration,
    mobileCount,
    mobileDurationRange,
    shouldReduceMotion,
    tabletBaseDuration,
    tabletCount,
    tabletDurationRange,
    viewport,
  ]);

  return { particles, shouldReduceMotion };
};
