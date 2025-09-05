import { OrbitingCircles } from "@/domains/home/OrbitingCircle";
import type { GetImageResult } from "astro";
import type { ComponentProps } from "react";

interface OrbitingToolsProps {
  tools: TechIcon[];
}

interface TechIcon {
  src: string;
  alt: string;
  title: string;
  href: string;
}

export const OrbitingTools = ({
  tools,
  ...props
}: OrbitingToolsProps & ComponentProps<typeof OrbitingCircles>) => {
  return (
    <OrbitingCircles {...props}>
      {tools.map((tool, index) => (
        <img key={index} src={tool.src} alt={tool.alt} title={tool.title} loading="lazy" />
      ))}
    </OrbitingCircles>
  );
};
