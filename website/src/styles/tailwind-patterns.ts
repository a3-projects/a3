import plugin from "tailwindcss/plugin";

export default plugin(function ({ matchUtilities, theme, ...rest }) {
  const colorsWithCSSVars = Object.fromEntries(
    Object.entries(theme("colors")).map(([key]) => {
      return [key, `var(--color-${key})`];
    })
  );

  // Dots pattern utility
  matchUtilities(
    {
      "bg-dots": (value) => {
        return {
          "background-image": `radial-gradient(circle at 1px 1px, ${value} 1px, transparent 0)`,
          "background-size": "4px 4px",
        };
      },
    },
    {
      values: colorsWithCSSVars,
      type: "color",
    }
  );

  // Diagonal lines pattern utility
  matchUtilities(
    {
      "bg-lines": (value) => ({
        "background-image": `repeating-linear-gradient(-45deg, transparent, transparent 4px, ${value} 4px, ${value} 5px)`,
      }),
    },
    {
      values: colorsWithCSSVars,
      type: "color",
    }
  );

  // Grid pattern - subtle crossing lines
  matchUtilities(
    {
      "bg-grid": (value) => ({
        "background-image": `
          linear-gradient(${value} 1px, transparent 1px),
          linear-gradient(90deg, ${value} 1px, transparent 1px)
        `,
        "background-size": "12px 12px",
      }),
    },
    {
      values: colorsWithCSSVars,
      type: "color",
    }
  );

  // Plus/cross pattern
  matchUtilities(
    {
      "bg-plus": (value) => ({
        "background-image": `
          linear-gradient(${value} 2px, transparent 2px),
          linear-gradient(90deg, ${value} 2px, transparent 2px)
        `,
        "background-size": "12px 12px",
        "background-position": "0 0, 6px 6px",
      }),
    },
    {
      values: colorsWithCSSVars,
      type: "color",
    }
  );

  // Zigzag pattern
  matchUtilities(
    {
      "bg-zigzag": (value) => ({
        "background-image": `linear-gradient(135deg, ${value} 25%, transparent 25%), linear-gradient(225deg, ${value} 25%, transparent 25%), linear-gradient(45deg, ${value} 25%, transparent 25%), linear-gradient(315deg, ${value} 25%, transparent 25%)`,
        "background-size": "8px 8px",
        "background-position": "0 0, 0 4px, 4px -4px, -4px 0px",
      }),
    },
    {
      values: colorsWithCSSVars,
      type: "color",
    }
  );

  // Noise/texture pattern - random dots
  matchUtilities(
    {
      "bg-noise": (value) => ({
        "background-image": `
          radial-gradient(circle at 20% 80%, ${value} 1px, transparent 1px),
          radial-gradient(circle at 80% 20%, ${value} 1px, transparent 1px),
          radial-gradient(circle at 40% 40%, ${value} 1px, transparent 1px),
          radial-gradient(circle at 60% 70%, ${value} 1px, transparent 1px),
          radial-gradient(circle at 10% 30%, ${value} 1px, transparent 1px)
        `,
        "background-size": "8px 8px, 12px 12px, 6px 6px, 10px 10px, 14px 14px",
      }),
    },
    {
      values: colorsWithCSSVars,
      type: "color",
    }
  );

  // Wave pattern
  matchUtilities(
    {
      "bg-waves": (value) => ({
        "background-image": `radial-gradient(ellipse at center, transparent 20%, ${value} 21%, ${value} 25%, transparent 26%, transparent 74%, ${value} 75%, ${value} 79%, transparent 80%)`,
        "background-size": "40px 20px",
      }),
    },
    {
      values: colorsWithCSSVars,
      type: "color",
    }
  );

  // Hexagon pattern
  matchUtilities(
    {
      "bg-hex": (value) => ({
        "background-image": `
          linear-gradient(30deg, transparent 24%, ${value} 25%, ${value} 26%, transparent 27%, transparent 74%, ${value} 75%, ${value} 76%, transparent 77%),
          linear-gradient(-30deg, transparent 24%, ${value} 25%, ${value} 26%, transparent 27%, transparent 74%, ${value} 75%, ${value} 76%, transparent 77%)
        `,
        "background-size": "12px 20px",
      }),
    },
    {
      values: colorsWithCSSVars,
      type: "color",
    }
  );

  // Triangle pattern
  matchUtilities(
    {
      "bg-triangles": (value) => ({
        background: `
          linear-gradient(60deg, ${value} 50%, transparent 50%), 
          linear-gradient(120deg, ${value} 50%, transparent 50%)
        `,
        "background-size": "12px 20px",
        "background-position": "0 0, 6px 0",
      }),
    },
    {
      values: colorsWithCSSVars,
      type: "color",
    }
  );

  // Diagonal stripes pattern
  matchUtilities(
    {
      "bg-stripes": (value) => ({
        background: `repeating-linear-gradient(
          135deg,
          ${value} 0px,
          ${value} 60px,
          transparent 70px,
          transparent 130px
        )`,
      }),
    },
    {
      values: colorsWithCSSVars,
      type: "color",
    }
  );
});
