import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "@/lib/utils";

export const textHighlight = tv({
  base: "relative inline text-front before:h-1/2  before:-bottom-[0px] before:absolute before:bg-primary-600/0  before:-z-10 before:w-[calc(100%+6px)] before:-left-[3px]  z-10 before:-z-1",
});

export interface TextHighlightProps extends VariantProps<typeof textHighlight> {}

const TextHighlight = (props: TextHighlightProps & ComponentProps<"span">) => {
  const { children, className, ref, ...rest } = props;
  return (
    <span ref={ref} className={textHighlight({ className })} {...rest}>
      {children}
    </span>
  );
};

export { TextHighlight };
