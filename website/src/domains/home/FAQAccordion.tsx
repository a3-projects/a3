"use client";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700"
        >
          <button
            onClick={() => toggleItem(index)}
            className="flex w-full items-center justify-between px-6 py-5 text-left transition-all duration-200 hover:bg-neutral-800/30"
            aria-expanded={openItems.includes(index)}
            type="button"
          >
            <h3 className="pr-4 font-bold text-white">{item.question}</h3>
            <motion.div
              animate={{
                rotate: openItems.includes(index) ? 180 : 0,
              }}
            >
              <ChevronDownIcon className="flex-shrink-0 text-neutral-400" size={20} />
            </motion.div>
          </button>
          <AnimatePresence>
            {openItems.includes(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="px-5 py-4">
                  <p className="font-serif text-neutral-400">{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
