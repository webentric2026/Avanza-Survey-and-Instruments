// src/components/hero/useHeroSlider.js
import { useState, useEffect, useRef, useCallback } from "react";

const AUTOPLAY_MS = 6500;

export default function useHeroSlider(totalSlides) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;
    const onChange = (e) => (prefersReducedMotion.current = e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const goTo = useCallback(
    (nextIndex, dir = 1) => {
      setDirection(dir);
      setIndex(((nextIndex % totalSlides) + totalSlides) % totalSlides);
      setProgressKey((k) => k + 1);
    },
    [totalSlides]
  );

  const next = useCallback(() => goTo(index + 1, 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1, -1), [index, goTo]);
  const goToIndex = useCallback(
    (i) => goTo(i, i > index ? 1 : -1),
    [index, goTo]
  );

  useEffect(() => {
    if (isPaused || prefersReducedMotion.current) return;
    timerRef.current = setTimeout(() => {
      goTo(index + 1, 1);
    }, AUTOPLAY_MS);
    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isPaused, progressKey]);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  return {
    index,
    direction,
    isPaused,
    progressKey,
    autoplayMs: AUTOPLAY_MS,
    prefersReducedMotion: prefersReducedMotion.current,
    next,
    prev,
    goToIndex,
    pause,
    resume,
  };
}
