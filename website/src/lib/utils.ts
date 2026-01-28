import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge, type ConfigExtension } from "tailwind-merge";
import { createTV } from "tailwind-variants";

const twMergeConfig: ConfigExtension<any, any> = {
  extend: {
    classGroups: {
      typography: [{ ty: [(value: string) => Boolean(value)] }],
    },
  },
};

const twMerge = extendTailwindMerge(twMergeConfig);

export const tv = createTV({
  twMergeConfig,
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
