"use client";
import { useState, createContext, useContext } from "react";
import type { ComponentProps, ComponentPropsWithoutRef, ReactNode } from "react";
import { ChevronDownIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

// Context for managing accordion state
interface AccordionContextType {
  isOpen: boolean;
  toggle: () => void;
  id: string;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
};

// Accordion styles using tailwind-variants
export const accordion = tv({
  base: "border-border bg-muted-back overflow-hidden rounded-xl border backdrop-blur-sm transition-[height] duration-300",
});

export const accordionTrigger = tv({
  base: "hover:bg-focus-back flex w-full items-center justify-between px-6 py-5 text-left transition-[height] duration-200",
});

export const accordionContent = tv({
  base: "overflow-hidden",
});

export const accordionBody = tv({
  base: "px-5 py-4",
});

export interface AccordionProps extends VariantProps<typeof accordion> {
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const _Accordion = ({
  children,
  defaultOpen = false,
  className,
  ...rest
}: AccordionProps & ComponentPropsWithoutRef<"div">) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const id = `accordion-${Math.random().toString(36).substr(2, 9)}`;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <AccordionContext.Provider value={{ isOpen, toggle, id }}>
      <div className={accordion({ className })} {...rest}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export interface AccordionTriggerProps extends VariantProps<typeof accordionTrigger> {
  children: ReactNode;
  className?: string;
}

const AccordionTriggerComponent = ({
  children,
  className,
  ...rest
}: AccordionTriggerProps & ComponentProps<"button">) => {
  const { isOpen, toggle, id } = useAccordion();

  return (
    <button
      onClick={toggle}
      className={accordionTrigger({ className })}
      aria-expanded={isOpen}
      aria-controls={`${id}-content`}
      type="button"
      {...rest}
    >
      <div className="flex-1">{children}</div>
      <motion.div
        animate={{
          rotate: isOpen ? 180 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDownIcon className="text-muted-front flex-shrink-0" size={20} />
      </motion.div>
    </button>
  );
};

export interface AccordionBodyProps extends VariantProps<typeof accordionBody> {
  children: ReactNode;
  className?: string;
}

const AccordionBodyComponent = ({
  children,
  className,
  ...rest
}: AccordionBodyProps & ComponentPropsWithoutRef<"div">) => {
  const { isOpen, id } = useAccordion();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={`${id}-content`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={accordionContent()}
        >
          <div className={accordionBody({ className })} {...rest}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export interface AccordionGroupProps {
  children: ReactNode;
  className?: string;
}

const AccordionGroupComponent = ({
  children,
  className,
  ...rest
}: AccordionGroupProps & ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={`space-y-4 ${className || ""}`} {...rest}>
      {children}
    </div>
  );
};

export const Accordion = Object.assign(_Accordion, {
  Trigger: AccordionTriggerComponent,
  Body: AccordionBodyComponent,
  Group: AccordionGroupComponent,
});

export const AccordionTrigger = AccordionTriggerComponent;
export const AccordionBody = AccordionBodyComponent;
export const AccordionGroup = AccordionGroupComponent;
