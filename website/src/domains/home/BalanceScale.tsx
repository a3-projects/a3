import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform, useVelocity } from "motion/react";

export const BalanceScale = ({ className }: { className: string }) => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth the raw scroll velocity so direction flips are less noisy
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 30,
    stiffness: 250,
  });

  // Derive a target rotation directly from the smoothed velocity.
  // - If |v| <= threshold -> 0
  // - If |v| >= fullVelocity -> ±15
  // - Else proportional between 0..15
  const threshold = 300;
  const fullVelocity = 1000;

  const targetRotation = useTransform(smoothVelocity, (v) => {
    const abs = Math.abs(v);
    if (abs <= threshold) return 0;
    const sign = Math.sign(v);
    if (abs >= fullVelocity) return sign * 15;
    return sign * (abs / fullVelocity) * 15;
  });

  // Spring the target rotation for smooth animation and natural easing
  const springRotation = useSpring(targetRotation, {
    damping: 16,
    stiffness: 450,
  });

  const rotate = useTransform(springRotation, (v) => `${Math.max(Math.min(v, 15), -15)}deg`);

  return (
    <div className={cn("relative z-10 w-full max-w-[550px]", className)}>
      <motion.div
        style={{ rotate }}
        className="items-between relative flex w-full justify-between rounded-2xl"
      >
        <div className="left-0 rounded-xl p-2 text-xl">TEMPO</div>
        <div className="-top-0 right-0 rounded-xl p-2 text-xl">QUALITÄT</div>
      </motion.div>
      <motion.div style={{ rotate }} className="absolute bottom-0 h-[2px] w-[100%] bg-white"></motion.div>
    </div>
  );
};
