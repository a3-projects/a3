import { OrbitingCircles } from "@/domains/home/OrbitingCircle";
import type { ComponentProps } from "react";
import { Astro } from "@/domains/home/tool-logos/Astro";
import { Github } from "@/domains/home/tool-logos/Github";
import { Next } from "@/domains/home/tool-logos/Next";
import { Nuxt } from "@/domains/home/tool-logos/Nuxt";
import { React } from "@/domains/home/tool-logos/React";
import { Tailwind } from "@/domains/home/tool-logos/Tailwind";
import { TypeScript } from "@/domains/home/tool-logos/TypeScript";
import { Vue } from "@/domains/home/tool-logos/Vue";
import { Aws } from "@/domains/home/tool-logos/Aws";
import { Gitlab } from "@/domains/home/tool-logos/Gitlab";
import { Kubernetes } from "@/domains/home/tool-logos/Kubernetes";
import { Go } from "@/domains/home/tool-logos/Go";
import { Docker } from "@/domains/home/tool-logos/Docker";
import { Playwright } from "@/domains/home/tool-logos/Playwright";
import { Vite } from "@/domains/home/tool-logos/Vite";
import { Postgres } from "@/domains/home/tool-logos/Postgres";
import { Storybook } from "@/domains/home/tool-logos/Storybook";
import { Rust } from "@/domains/home/tool-logos/Rust";

interface OrbitingToolsProps {}

export const OrbitingTools = ({ ...props }: OrbitingToolsProps & ComponentProps<typeof OrbitingCircles>) => {
  const innerCircleIcons: TechIcon[] = [
    {
      component: Aws,
      alt: "aws logo",
      title: "AWS",
      href: "https://aws.amazon.com/",
    },
    {
      component: Github,
      alt: "github logo",
      title: "Github",
      href: "https://github.com/",
    },
    {
      component: Docker,
      alt: "docker logo",
      title: "Docker",
      href: "https://www.docker.com/",
    },
    {
      component: Postgres,
      alt: "postgres logo",
      title: "Postgres",
      href: "https://www.postgresql.org/",
    },
    {
      component: Rust,
      alt: "rust logo",
      title: "Rust",
      href: "https://www.rust-lang.org/",
    },
    {
      component: Gitlab,
      alt: "gitlab logo",
      title: "Gitlab",
      href: "https://gitlab.com/",
    },
    {
      component: Kubernetes,
      alt: "kubernetes logo",
      title: "Kubernetes",
      href: "https://kubernetes.io/",
    },
    {
      component: Go,
      alt: "go logo",
      title: "Go",
      href: "https://go.dev/",
    },
  ];

  const outerCircleIcons: TechIcon[] = [
    {
      component: Next,
      alt: "next logo",
      title: "Next",
      href: "https://nextjs.org/",
    },
    {
      component: TypeScript,
      alt: "typescript logo",
      title: "TypeScript",
      href: "https://www.typescriptlang.org/",
    },
    {
      component: Nuxt,
      alt: "nuxt logo",
      title: "Nuxt",
      href: "https://nuxt.com/",
    },
    {
      component: TypeScript,
      alt: "typescript logo",
      title: "TypeScript",
      href: "https://www.typescriptlang.org/",
    },
    {
      component: React,
      alt: "react logo",
      title: "React",
      href: "https://reactjs.org/",
    },
    {
      component: Vue,
      alt: "vue logo",
      title: "Vue",
      href: "https://vuejs.org/",
    },
    {
      component: Playwright,
      alt: "playwright logo",
      title: "Playwright",
      href: "https://playwright.dev/",
    },
    {
      component: Tailwind,
      alt: "tailwind logo",
      title: "Tailwind",
      href: "https://tailwindcss.com/",
    },
    {
      component: Astro,
      alt: "astro logo",
      title: "Astro",
      href: "https://astro.build/",
    },
    {
      component: Storybook,
      alt: "storybook logo",
      title: "Storybook",
      href: "https://storybook.js.org/",
    },
    {
      component: Vite,
      alt: "vite logo",
      title: "Vite",
      href: "https://vitejs.dev/",
    },
  ];
  interface TechIcon {
    component: any;
    alt: string;
    title: string;
    href: string;
  }
  return (
    <>
      <OrbitingCircles iconSize={40} radius={250} speed={0.5} {...props}>
        {outerCircleIcons.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <a
              key={index}
              href={icon.href}
              aria-label={icon.alt}
              target="_blank"
              rel="noopener noreferrer"
              title={icon.title}
            >
              <IconComponent alt={icon.alt} />
            </a>
          );
        })}
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={150} reverse speed={0.7} {...props}>
        {innerCircleIcons.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <a
              key={index}
              href={icon.href}
              aria-label={icon.alt}
              target="_blank"
              rel="noopener noreferrer"
              title={icon.title}
            >
              <IconComponent alt={icon.alt} />
            </a>
          );
        })}
      </OrbitingCircles>
    </>
  );
};
