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

    offset: ["start 0.5", "end end"],
  });

  // Split by | for line breaks, then by spaces for words
  const lines = text.split("|").map((line) => line.trim().split(" "));
  const totalWords = lines.flat().length;
  let wordIndex = 0;

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      {children}
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        {/* The animating content; ref stays only on the outer container to avoid recalculations */}
        <span className={"flex flex-wrap justify-center"}>
          {lines.map((lineWords, lineIndex) => {
            const lineStartIndex = wordIndex;
            return (
              <span key={`line-${lineIndex}`} className="contents text-center">
                {lineWords.map((word) => {
                  const start = wordIndex / totalWords;
                  const end = start + 1 / totalWords;
                  const currentIndex = wordIndex;
                  wordIndex++;
                  return (
                    <Word key={currentIndex} progress={scrollYProgress} range={[start, end]}>
                      {word}
                    </Word>
                  );
                })}
                {lineIndex < lines.length - 1 && <span className="basis-full" />}
              </span>
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
          "text-front": children === "A3" || children === "Team.",
        })}
      >
        {children}
      </motion.span>
    </span>
  );
};
