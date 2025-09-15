import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const button = tv({
  base: "relative cursor-pointer inline-flex items-center justify-center  transition-all text-sm  font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default:
        "bg-primary-back text-primary-front hover:bg-front hover:text-back hover:shadow-md hover:shadow-primary-back/50",
      destructive: "bg-destructive-back text-destructive-front hover:bg-destructive-back/90",
      outline: "border border-border  text-front hover:bg-front/10",
      ghost: " text-front/50 hover:bg-front/10 hover:text-front",
      secondary: "bg-secondary-back text-secondary-front hover:bg-front hover:text-back",
      neutral: "bg-neutral-back text-neutral-front hover:bg-front hover:text-back hover:shadow-md",
      link: "text-front underline-offset-4 underline hover:underline",
    },
    increaseHitbox: {
      true: "before:absolute before:h-[calc(100%+1rem)] relative before:w-[calc(100%+1rem)]",
    },
    color: {},
    size: {
      default: "h-10 px-4 py-2 rounded-lg",
      sm: "h-8  px-2 rounded-lg",
      lg: "h-10 px-6 py-2 rounded-xl",
      xl: "h-16 px-10 rounded-xl",
      icon: "h-8 w-8 rounded-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    animated: false,
    increaseHitbox: false,
  },
});

export interface ButtonProps extends VariantProps<typeof button> {}

const Button = (props: ButtonProps & ComponentProps<"button">) => {
  const { children, className, variant, size, increaseHitbox, ref, ...rest } = props;

  return (
    <button ref={ref} className={button({ className, variant, size, increaseHitbox })} {...rest}>
      {children}
    </button>
  );
};

export { Button };
