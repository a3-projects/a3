#!/usr/bin/env node
// Convert 6-digit hex colors in a CSS file to oklch(...) notation (CommonJS version)
// Usage: node convert-hex-to-oklch.cjs path/to/file.css

const fs = require("fs");
const path = require("path");

function hexToRgb(hex) {
  const int = parseInt(hex, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255].map((v) => v / 255);
}

function srgbToLinear(c) {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function linearRgbToOklab(r, g, b) {
  // From Oklab specification
  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;
  return [L, a, b_];
}

function oklabToOklch(L, a, b) {
  const C = Math.sqrt(a * a + b * b);
  let h = Math.atan2(b, a) * (180 / Math.PI);
  if (h < 0) h += 360;
  return [L, C, h];
}

function hexToOklch(hex) {
  const [r, g, b] = hexToRgb(hex);
  const lr = srgbToLinear(r);
  const lg = srgbToLinear(g);
  const lb = srgbToLinear(b);
  const [L, a, bb] = linearRgbToOklab(lr, lg, lb);
  const [Lok, C, h] = oklabToOklch(L, a, bb);
  const Lpct = (Lok * 100).toFixed(4).replace(/\.?(0+)$/, "");
  const Cfmt = C.toFixed(4).replace(/\.?(0+)$/, "");
  const hfmt = h.toFixed(2).replace(/\.?(0+)$/, "");
  return `oklch(${Lpct}% ${Cfmt} ${hfmt}deg)`;
}

function convertFile(filePath) {
  const abs = path.resolve(process.cwd(), filePath);
  if (!fs.existsSync(abs)) {
    console.error("File not found:", abs);
    process.exit(1);
  }
  const text = fs.readFileSync(abs, "utf8");
  const hexRegex = /#([A-Fa-f0-9]{6})\b/g;
  let match;
  const replacements = [];
  const out = text.replace(hexRegex, (m, p1) => {
    const oklch = hexToOklch(p1);
    replacements.push({ hex: `#${p1}`, oklch });
    return oklch;
  });
  fs.writeFileSync(abs + ".bak", text, "utf8");
  fs.writeFileSync(abs, out, "utf8");
  return replacements;
}

if (require.main === module) {
  const file = process.argv[2];
  if (!file) {
    console.error("Usage: node convert-hex-to-oklch.cjs path/to/file.css");
    process.exit(1);
  }
  const replaced = convertFile(file);
  console.log("Replaced", replaced.length, "hex colors. Backup at " + file + ".bak");
  for (let i = 0; i < Math.min(replaced.length, 200); i++) {
    console.log(replaced[i].hex, "→", replaced[i].oklch);
  }
}
