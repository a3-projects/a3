import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";

export interface AstroProps {
  size?: number;
}

const Astro = forwardRef<ElementRef<"svg">, AstroProps & ComponentPropsWithoutRef<"svg">>((props, ref) => {
  const { children, className, size = 24, ...rest } = props;

  return (
    <svg
      viewBox="0 0 25 25"
      dangerouslySetInnerHTML={{
        __html:
          '<path fill="none" d="M.064.47h24v24h-24z"/><g fill-rule="nonzero"><path d="M8.568 20.164c-1.128-1.018-1.457-3.157-.987-4.706.815.977 1.944 1.286 3.114 1.461 1.806.27 3.58.169 5.258-.646.192-.093.369-.217.579-.343.157.451.198.906.143 1.369-.133 1.128-.702 1.999-1.607 2.66-.361.264-.744.5-1.118.749-1.148.766-1.458 1.663-1.027 2.969l.043.141a3.004 3.004 0 01-1.341-1.131 3.157 3.157 0 01-.517-1.727c-.004-.305-.004-.612-.046-.912-.101-.732-.449-1.06-1.105-1.079-.674-.02-1.206.391-1.348 1.038-.01.05-.026.099-.042.157h.001z"/><path d="M2.893 15.932s3.086-1.499 6.18-1.499l2.333-7.202c.087-.348.342-.585.63-.585s.543.237.63.585l2.333 7.202c3.665 0 6.18 1.499 6.18 1.499l-5.251-14.27c-.151-.421-.405-.692-.747-.692H8.892c-.342 0-.586.271-.747.692l-5.252 14.27z"/></g><defs><linearGradient id="a_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="scale(12.02118) rotate(-25.585 4.67 -.36)"><stop offset="0" stop-color="#d83333"/><stop offset="1" stop-color="#f041ff"/></linearGradient></defs>',
      }}
      ref={ref}
      className={cn("fill-current", className)}
      width={size}
      height={size}
      {...rest}
    >
      {children}
    </svg>
  );
});

Astro.displayName = "Astro";

export { Astro };
