import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";

export interface ReactProps {
  size?: number;
}

const React = forwardRef<ElementRef<"svg">, ReactProps & ComponentPropsWithoutRef<"svg">>((props, ref) => {
  const { children, className, size = 24, ...rest } = props;

  return (
    <svg
      viewBox="0 0 25 25"
      dangerouslySetInnerHTML={{
        __html:
          '<path fill="none" d="M.626.5h24v24h-24z"/><g><circle cx="12.631" cy="12.477" r="2.055"/><path d="M12.631 17.185c-2.887 0-5.409-.339-7.296-.986-1.224-.418-2.264-.975-3.005-1.609-.786-.672-1.204-1.405-1.204-2.113 0-1.359 1.491-2.69 3.992-3.557 2.047-.713 4.716-1.11 7.508-1.11 2.743 0 5.376.385 7.411 1.089 1.191.409 2.194.942 2.906 1.531.774.647 1.183 1.355 1.183 2.047 0 1.413-1.666 2.841-4.351 3.73-1.9.63-4.438.978-7.144.978zm0-8.392c-2.649 0-5.269.384-7.185 1.052-2.301.802-3.333 1.899-3.333 2.632 0 .762 1.11 1.961 3.541 2.792 1.785.61 4.201.934 6.977.934 2.603 0 5.031-.328 6.837-.93 2.526-.839 3.68-2.038 3.68-2.796 0-.389-.295-.847-.831-1.293-.618-.516-1.519-.987-2.596-1.36-1.936-.663-4.454-1.031-7.09-1.031z" fill-rule="nonzero"/><path d="M7.968 22.72c-.418 0-.787-.09-1.098-.27-1.175-.679-1.584-2.636-1.089-5.236.406-2.133 1.396-4.639 2.792-7.058 1.372-2.375 3.018-4.463 4.643-5.875.95-.827 1.912-1.433 2.78-1.752.946-.348 1.764-.348 2.362-.004 1.224.704 1.629 2.866 1.056 5.633-.405 1.965-1.371 4.336-2.722 6.681-1.441 2.498-2.997 4.512-4.499 5.826-.975.852-1.978 1.474-2.895 1.797a3.987 3.987 0 01-1.33.258zm1.027-12.318l.426.245C8.099 12.94 7.12 15.4 6.743 17.398c-.454 2.395-.016 3.836.615 4.201.155.09.36.139.61.139.814 0 2.096-.516 3.578-1.81 1.42-1.24 2.906-3.173 4.294-5.576 1.302-2.256 2.227-4.524 2.612-6.386.537-2.608.074-4.205-.585-4.586-.336-.192-.88-.167-1.535.074-.758.278-1.613.823-2.473 1.572-1.544 1.343-3.12 3.341-4.438 5.625l-.426-.249z" fill-rule="nonzero"/><path d="M17.294 22.733c-1.114 0-2.526-.672-4-1.941-1.646-1.416-3.32-3.525-4.721-5.944-1.375-2.375-2.358-4.844-2.771-6.96-.242-1.237-.287-2.371-.131-3.284.172-.994.577-1.703 1.179-2.051 1.22-.708 3.296.021 5.408 1.9 1.498 1.331 3.071 3.353 4.426 5.695 1.445 2.497 2.415 4.851 2.8 6.808.25 1.269.291 2.448.115 3.406-.189 1.02-.615 1.744-1.229 2.1a2.093 2.093 0 01-1.076.271zm-7.869-8.377c1.326 2.293 2.972 4.369 4.512 5.691 1.846 1.588 3.312 1.932 3.946 1.564.659-.381 1.142-1.941.643-4.463-.369-1.85-1.298-4.102-2.69-6.505-1.306-2.256-2.808-4.192-4.229-5.453-1.99-1.769-3.603-2.166-4.262-1.785-.335.192-.585.68-.704 1.367-.135.795-.094 1.81.127 2.928.393 2.01 1.335 4.372 2.657 6.656z" fill-rule="nonzero"/></g>',
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

React.displayName = "React";

export { React };
