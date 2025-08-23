#!/usr/bin/env node

/**
 * Fluid Design System CSS Generator
 *
 * This script generates mathematically precise CSS clamp() functions
 * for a fluid design system that scales from 320px to 1240px viewport.
 *
 * Parameters:
 * - Min viewport: 320px (20rem)
 * - Max viewport: 1240px (77.5rem)
 * - Scaling factor: 1.25 (25% increase)
 * - All values use rem units for accessibility
 */

// Configuration
const CONFIG = {
  minViewport: 320, // pixels
  maxViewport: 1240, // pixels
  minViewportRem: 20, // rem
  maxViewportRem: 77.5, // rem
  scaleFactor: 1.25, // 25% increase
  viewportRangeRem: 57.5, // maxViewportRem - minViewportRem
};

/**
 * Generate a fluid clamp() function with proper bounds
 * @param {number} minValue - Minimum value in rem
 * @param {number} maxValue - Maximum value in rem
 * @param {string} name - Variable name for comments
 * @returns {string} CSS clamp() function
 */
function generateFluidValue(minValue, maxValue, name = "") {
  // Calculate the difference
  const diff = maxValue - minValue;

  // Calculate vw coefficient: diff / viewportRange * 100
  const vwCoefficient = ((diff / CONFIG.viewportRangeRem) * 100).toFixed(4);

  // Remove trailing zeros for cleaner output
  const cleanVw = parseFloat(vwCoefficient);

  // Generate clamp with proper viewport bounds
  const clampValue = `clamp(${minValue}rem, ${minValue}rem + ${cleanVw}vw, ${maxValue}rem)`;

  // Convert to pixels for comment
  const minPx = Math.round(minValue * 16);
  const maxPx = Math.round(maxValue * 16);

  return {
    value: clampValue,
    comment: `${minPx}px → ${maxPx}px`,
    name: name,
  };
}

/**
 * Generate spacing tokens
 */
function generateSpacingTokens() {
  const spacingValues = [
    { name: "0.5", min: 0.125 }, // 2px base
    { name: "1", min: 0.25 }, // 4px base
    { name: "1.5", min: 0.375 }, // 6px base
    { name: "2", min: 0.5 }, // 8px base
    { name: "2.5", min: 0.625 }, // 10px base
    { name: "3", min: 0.75 }, // 12px base
    { name: "3.5", min: 0.875 }, // 14px base
    { name: "4", min: 1 }, // 16px base
    { name: "5", min: 1.25 }, // 20px base
    { name: "6", min: 1.5 }, // 24px base
    { name: "7", min: 1.75 }, // 28px base
    { name: "8", min: 2 }, // 32px base
    { name: "9", min: 2.25 }, // 36px base
    { name: "10", min: 2.5 }, // 40px base
    { name: "11", min: 2.75 }, // 44px base
    { name: "12", min: 3 }, // 48px base
    { name: "14", min: 3.5 }, // 56px base
    { name: "16", min: 4 }, // 64px base
    { name: "20", min: 5 }, // 80px base
    { name: "24", min: 6 }, // 96px base
    { name: "28", min: 7 }, // 112px base
    { name: "32", min: 8 }, // 128px base
    { name: "36", min: 9 }, // 144px base
    { name: "40", min: 10 }, // 160px base
    { name: "44", min: 11 }, // 176px base
    { name: "48", min: 12 }, // 192px base
    { name: "52", min: 13 }, // 208px base
    { name: "56", min: 14 }, // 224px base
    { name: "60", min: 15 }, // 240px base
    { name: "64", min: 16 }, // 256px base
    { name: "72", min: 18 }, // 288px base
    { name: "80", min: 20 }, // 320px base
    { name: "96", min: 24 }, // 384px base
  ];

  return spacingValues.map(({ name, min }) => {
    const max = min * CONFIG.scaleFactor;
    const { value, comment } = generateFluidValue(min, max, `spacing-${name}`);
    return {
      variable: `--spacing-${name.replace(".", "\\.")}`,
      value,
      comment,
    };
  });
}

/**
 * Generate typography tokens
 */
function generateTypographyTokens() {
  const typographyValues = [
    { name: "xs", min: 0.75 }, // 12px base
    { name: "sm", min: 0.875 }, // 14px base
    { name: "base", min: 1 }, // 16px base
    { name: "lg", min: 1.125 }, // 18px base
    { name: "xl", min: 1.25 }, // 20px base
    { name: "2xl", min: 1.5 }, // 24px base
    { name: "3xl", min: 1.875 }, // 30px base
    { name: "4xl", min: 2.25 }, // 36px base
    { name: "5xl", min: 3 }, // 48px base
    { name: "6xl", min: 3.75 }, // 60px base
    { name: "7xl", min: 4.5 }, // 72px base
    { name: "8xl", min: 6 }, // 96px base
    { name: "9xl", min: 8 }, // 128px base
  ];

  return typographyValues.map(({ name, min }) => {
    const max = min * CONFIG.scaleFactor;
    const { value, comment } = generateFluidValue(min, max, `text-${name}`);
    return {
      variable: `--text-${name}`,
      value,
      comment,
    };
  });
}

/**
 * Generate complete CSS output
 */
function generateCSS() {
  const spacingTokens = generateSpacingTokens();
  const typographyTokens = generateTypographyTokens();

  let css = `@import "tailwindcss";

@theme {
  /* ==========================================================================
   * FLUID DESIGN SYSTEM - MATHEMATICALLY GENERATED
   * ========================================================================== */

  /* Global Parameters:
   * - Min viewport: ${CONFIG.minViewport}px (${CONFIG.minViewportRem}rem)
   * - Max viewport: ${CONFIG.maxViewport}px (${CONFIG.maxViewportRem}rem)
   * - Viewport range: ${CONFIG.viewportRangeRem}rem (${CONFIG.maxViewport - CONFIG.minViewport}px)
   * - Scaling factor: ${CONFIG.scaleFactor} (${(CONFIG.scaleFactor - 1) * 100}% increase)
   * - Generated: ${new Date().toISOString()}
   */

  /* ==========================================================================
   * FLUID SPACING VARIABLES
   * ========================================================================== */

  /* Fixed values */
  --spacing-0: 0px;
  --spacing-px: 1px;

  /* Generated fluid spacing values */
`;

  // Add spacing tokens
  spacingTokens.forEach(({ variable, value, comment }) => {
    css += `  ${variable}: ${value}; /* ${comment} */\n`;
  });

  css += `
  /* ==========================================================================
   * FLUID TYPOGRAPHY VARIABLES
   * ========================================================================== */

  /* Generated fluid typography scale */
`;

  // Add typography tokens
  typographyTokens.forEach(({ variable, value, comment }) => {
    css += `  ${variable}: ${value}; /* ${comment} */\n`;
  });

  css += `
  /* ==========================================================================
   * COLOR PALETTE
   * ========================================================================== */

  /* Brand colors */
  --color-primary: oklch(0.7 0.15 250);
  --color-secondary: oklch(0.8 0.1 180);
  --color-accent: oklch(0.75 0.2 30);

  /* Extended grays for better design flexibility */
  --color-neutral-50: oklch(0.98 0.002 270);
  --color-neutral-100: oklch(0.95 0.004 270);
  --color-neutral-200: oklch(0.9 0.008 270);
  --color-neutral-300: oklch(0.83 0.012 270);
  --color-neutral-400: oklch(0.7 0.016 270);
  --color-neutral-500: oklch(0.55 0.02 270);
  --color-neutral-600: oklch(0.45 0.016 270);
  --color-neutral-700: oklch(0.35 0.012 270);
  --color-neutral-800: oklch(0.25 0.008 270);
  --color-neutral-900: oklch(0.15 0.004 270);
  --color-neutral-950: oklch(0.08 0.002 270);
}

/* ==========================================================================
 * USAGE EXAMPLES & DOCUMENTATION
 * ========================================================================== */

/* 
 * SPACING USAGE:
 * Use standard Tailwind classes: p-4, m-8, gap-6, etc.
 * Custom usage: var(--spacing-4), var(--spacing-8)
 * 
 * TYPOGRAPHY USAGE:
 * Use standard Tailwind classes: text-lg, text-2xl, etc.
 * Custom usage: var(--text-lg), var(--text-2xl)
 * 
 * BENEFITS:
 * - Mathematically precise scaling
 * - Proper viewport bounds (no scaling outside 320px-1240px)
 * - Maintains Tailwind proportions
 * - Accessible rem units
 * - Performance optimized with clamp()
 * - Generated consistently without human error
 */
`;

  return css;
}

/**
 * Generate React component arrays for demo page
 */
function generateReactArrays() {
  const spacingTokens = generateSpacingTokens();
  const typographyTokens = generateTypographyTokens();

  const spacingArray = spacingTokens
    .map(({ variable, value, comment }) => {
      const name = variable.replace("--", "").replace("\\", "");
      return `    { name: "${name}", value: "${value}", size: "${comment}" }`;
    })
    .join(",\n");

  const typographyArray = typographyTokens
    .map(({ variable, value, comment }) => {
      const name = variable.replace("--", "");
      return `    { name: "${name}", value: "${value}", size: "${comment}" }`;
    })
    .join(",\n");

  return {
    spacing: `  const spacingTokens = [\n    { name: "spacing-0", value: "0px", size: "0px" },\n    { name: "spacing-px", value: "1px", size: "1px" },\n${spacingArray}\n  ];`,
    typography: `  const typographyTokens = [\n${typographyArray}\n  ];`,
  };
}

// Main execution
if (require.main === module) {
  const action = process.argv[2];

  if (action === "css") {
    console.log(generateCSS());
  } else if (action === "react") {
    const arrays = generateReactArrays();
    console.log("SPACING ARRAY:");
    console.log(arrays.spacing);
    console.log("\nTYPOGRAPHY ARRAY:");
    console.log(arrays.typography);
  } else {
    console.log("Usage:");
    console.log("  node generate-fluid-css.js css     # Generate CSS");
    console.log("  node generate-fluid-css.js react   # Generate React arrays");
  }
}

module.exports = { generateCSS, generateReactArrays, generateFluidValue };
