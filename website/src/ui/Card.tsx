import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const card = tv({
  base: "",
  variants: {
    color: {
      default: "",
      transparent: "bg-transparent",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export interface CardProps extends VariantProps<typeof card> {}

const _Card = (props: CardProps & ComponentProps<"div">) => {
  const { children, className, color, ref, ...rest } = props;

  return (
    <div ref={ref} className={card({ className, color })} {...rest}>
      {children}
    </div>
  );
};

export const cardHeader = tv({
  base: "px-4 pt-8 pb-4",
});

export interface CardHeaderProps extends VariantProps<typeof cardHeader> {}

const CardHeader = (props: CardHeaderProps & ComponentProps<"div">) => {
  const { children, className, ref, ...rest } = props;

  return (
    <div ref={ref} className={cardHeader({ className })} {...rest}>
      {children}
    </div>
  );
};

export const cardBody = tv({
  base: "px-4 py-4",
});

export interface CardBodyProps extends VariantProps<typeof cardBody> {}

const CardBody = (props: CardBodyProps & ComponentProps<"div">) => {
  const { children, className, ref, ...rest } = props;

  return (
    <div ref={ref} className={cardBody({ className })} {...rest}>
      {children}
    </div>
  );
};

export const cardFooter = tv({
  base: "px-4  py-4",
});

export interface CardFooterProps extends VariantProps<typeof cardFooter> {}

const CardFooter = (props: CardFooterProps & ComponentProps<"div">) => {
  const { children, className, ref, ...rest } = props;

  return (
    <div ref={ref} className={cardFooter({ className })} {...rest}>
      {children}
    </div>
  );
};

export const Card = Object.assign(_Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
