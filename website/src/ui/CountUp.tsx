"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, motion } from "motion/react";

interface CountUpProps {
  target: number;
  stiffness?: number;
  damping?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const CountUp = ({
  target,
  stiffness = 30,
  damping = 20,
  suffix = "",
  prefix = "",
  className,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness, damping });
  const rounded = useTransform(spring, (v) => Math.round(v));
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    count.set(target);
  }, [isInView, target, count]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};
