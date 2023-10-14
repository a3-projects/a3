const utils = require(__dirname + "/../utils");
const camelcase = require("camelcase");

const generateReact = (map, outputFolder) => {
  const output = outputFolder + "/react/";
  map.forEach(async (value, key) => {
    const filename = camelcase(key, {
      pascalCase: true,
    });
    const savePath = output + `${filename}.tsx`;

    let content = `
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";
    
export interface ${filename}Props {
  size?: number;
};
    
const ${filename} = forwardRef<ElementRef<"svg">, ${filename}Props & ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    const { children, className, size = 24, ...rest } = props;
  
    return (
      <svg
        viewBox="${value.viewBox}"
        dangerouslySetInnerHTML={{
          __html: 
            '${value.paths}'
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
  }
);

${filename}.displayName = "${filename}";

export { ${filename} };
  `;
    utils.writeFileAsync(savePath, content.trim());
  });
};
module.exports = {
  generateReact,
};
