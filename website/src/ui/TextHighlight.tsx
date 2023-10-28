import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

// export const textHighlight = tv({
//   slots: {
//     base: "relative inline-block text-primary-400",
//     highlight:
//       "-z-10 absolute -left-[4px] top-[4px]  heropattern-diagonallines-primary-500 bg-primary-800/80 select-none",
//   },
// });

// export interface TextHighlightProps extends VariantProps<typeof textHighlight> {
//   text: string;
// }

// const TextHighlight = forwardRef<ElementRef<"span">, TextHighlightProps & ComponentPropsWithoutRef<"span">>(
//   (props, ref) => {
//     const { children, className, text, ...rest } = props;
//     const { highlight, base } = textHighlight();
//     return (
//       <span ref={ref} className={base({ className })} {...rest}>
//         <span
//           style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
//           className={highlight()}
//           aria-hidden="true"
//         >
//           {text}
//         </span>
//         <span>{text}</span> {children}
//       </span>
//     );
//   }
// );

// export { TextHighlight };

export const textHighlight = tv({
  base: "relative   inline-block before:h-[calc(100%+10px)] before:-top-[5px] before:absolute before:bg-primary-700/30  before:-z-10 before:w-[calc(100%+30px)] before:-left-[15px] before:heropattern-diagonallines-primary-900",
});

export interface TextHighlightProps extends VariantProps<typeof textHighlight> {}

const TextHighlight = forwardRef<ElementRef<"span">, TextHighlightProps & ComponentPropsWithoutRef<"span">>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    return (
      <span ref={ref} className={textHighlight({ className })} {...rest}>
        {children}
      </span>
    );
  }
);

export { TextHighlight };
