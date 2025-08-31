"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { type ComponentPropsWithoutRef, type FC, type ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  text: string;
}

export const TextReveal: FC<TextRevealProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[300vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[30%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <span ref={targetRef} className={"flex flex-wrap p-5"}>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const filter = useTransform(progress, range, ["blur(10px)", "blur(0px)"]);
  const y = useTransform(progress, range, ["50px", "0px"]);

  return (
    <span className="xl:lg-3 relative mx-1 overflow-hidden lg:mx-1.5">
      {/* <span
        className={cn("absolute opacity-30", {
          "text-9xl font-bold text-white": children === "A3-Team",
        })}
      >
        {children}
      </span> */}
      <motion.span
        style={{ opacity, filter, y }}
        className={cn("inline-block text-white", {
          "text-9xl font-bold text-white": children === "A3-Team",
        })}
      >
        {children}
      </motion.span>
    </span>
  );
};
