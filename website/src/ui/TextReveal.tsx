"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { type ComponentPropsWithoutRef, type FC, type ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  text: string;
  children?: ReactNode;
}

export const TextReveal: FC<TextRevealProps> = ({ text, children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      {children}
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <span ref={targetRef} className={"flex flex-wrap"}>
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

  return (
    <span className="xl:lg-3 relative mx-1 overflow-hidden text-center lg:mx-1.5">
      <motion.span
        style={{ opacity, filter }}
        className={cn("text-muted-front inline-block font-thin", {
          "text-front": children === "A3" || children === "Team",
        })}
      >
        {children}
      </motion.span>
    </span>
  );
};
