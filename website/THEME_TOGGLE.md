# Theme Toggle Implementation

This implementation provides a robust dark/light theme toggle for the A3 website, following the official Astro theme toggle pattern and Tailwind v4 best practices.

## Features

- 🌓 **Smooth Transitions**: Seamless transitions between light and dark modes
- 🔄 **System Preference Support**: Automatically detects and respects user's system theme preference
- 💾 **Persistent Storage**: Remembers user's theme choice across sessions
- ⚡ **FOUC Prevention**: Prevents Flash of Unstyled Content with immediate theme application
- ♿ **Accessible**: Full keyboard navigation and ARIA attributes
- 🎨 **Tailwind v4 Compatible**: Uses CSS custom properties for theme switching
- 📘 **Official Astro Pattern**: Uses the recommended `is:inline` script approach

## How It Works

### Theme Storage & Initialization

- Uses `localStorage` to persist theme preference ("light" or "dark")
- Falls back to system preference (`prefers-color-scheme`) if no stored preference exists
- Uses `is:inline` script in BaseHead.astro for immediate theme application

### CSS Custom Properties

The theme system leverages Tailwind v4's CSS custom properties and data attributes:

```css
/* Light theme (default) */
:root {
  --color-back: var(--color-white);
  --color-front: var(--color-black);
  /* ... other color variables */
}

/* Dark theme */
.dark {
  --color-back: var(--color-black);
  --color-front: var(--color-white);
  /* ... other color variables */
}

/* Theme transitions with data-theme attribute */
html[data-theme] {
  color-scheme: light dark;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

html[data-theme="light"] {
  color-scheme: light;
}

html[data-theme="dark"] {
  color-scheme: dark;
}
```

### Official Astro Pattern

Following the [Astro documentation](https://docs.astro.build/en/tutorial/6-islands/2/), we use:

```astro
<script is:inline>
  const theme = (() => {
    const localStorageTheme = localStorage?.getItem("theme") ?? "";
    if (["dark", "light"].includes(localStorageTheme)) {
      return localStorageTheme;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  })();

  if (theme === "light") {
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }

  window.localStorage.setItem("theme", theme);

  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    const newTheme = isDark ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    element.setAttribute("data-theme", newTheme);
  };

  document.getElementById("themeToggle")?.addEventListener("click", handleToggleClick);
</script>
```

### Components

#### `useTheme` Hook

```tsx
const { resolvedTheme, setTheme, toggleTheme, isLoaded } = useTheme();
```

- `resolvedTheme`: Current applied theme ("light" | "dark")
- `setTheme`: Function to change theme
- `toggleTheme`: Function to toggle between light and dark
- `isLoaded`: Whether the theme has been initialized

#### `ThemeToggle` Component

```tsx
<ThemeToggle size="sm" className="ml-auto" />
```

Props:

- `size`: "sm" | "default" | "lg"
- `iconSize`: Custom icon size (number)
- `showTooltip`: Whether to show tooltip (boolean)

**Important**: The component uses `id="themeToggle"` to connect with the inline script.

## Implementation Details

### 1. Theme Initialization Script

Located in `BaseHead.astro`, uses `is:inline` for immediate execution:

```astro
<script is:inline>
  // Theme detection and application logic
</script>
```

### 2. Theme Hook (`src/lib/theme.ts`)

- Observes DOM changes using `MutationObserver`
- Tracks both `data-theme` attribute and `dark` class changes
- Provides React state synchronization with the vanilla JS theme logic
- Simplified to work with the official Astro pattern

**Dual Tracking**: The hook monitors both the `data-theme` attribute and the `dark` class to ensure compatibility with different CSS approaches:

```typescript
const getThemeFromDOM = () => {
  const dataTheme = document.documentElement.getAttribute("data-theme");
  if (dataTheme === "dark" || dataTheme === "light") {
    return dataTheme;
  }
  // Fallback to checking dark class
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};
```

### 3. Theme Toggle Component (`src/ui/ThemeToggle.tsx`)

- Uses `id="themeToggle"` for vanilla JS event handling
- Provides React state updates via MutationObserver
- Smooth icon transitions

### 4. Icon Components

- `Sun.tsx`: Light mode icon
- `Moon.tsx`: Dark mode icon

### 5. Global CSS Transitions

Smooth transitions for all theme-related CSS properties while preserving intentional animations.

## Usage

### Basic Implementation

```astro
---
import { ThemeToggle } from "@/ui/ThemeToggle";
---

<ThemeToggle client:load />
```

### In Navigation

```astro
<Navbar.ListItem className="ml-auto">
  <ThemeToggle client:load size="sm" />
</Navbar.ListItem>
```

### Programmatic Control

```tsx
import { useTheme } from "@/lib/theme";

function MyComponent() {
  const { resolvedTheme, setTheme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {resolvedTheme}</p>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

### Including BaseHead in Pages

```astro
---
import Layout from "@/layouts/Layout.astro";
import BaseHead from "@/components/BaseHead.astro";
---

<Layout>
  <BaseHead slot="head" title="Page Title" description="Page description" />
  <!-- Page content -->
</Layout>
```

## Browser Support

- **Modern Browsers**: Full support with smooth transitions
- **Legacy Browsers**: Graceful degradation (theme switching works, transitions may not)
- **No JavaScript**: Falls back to system preference via CSS `prefers-color-scheme`

## Best Practices Followed

1. **Official Astro Pattern**: Uses the recommended `is:inline` script approach
2. **Tailwind v4 CSS Custom Properties**: Uses the new CSS custom property system
3. **FOUC Prevention**: Immediate theme application before hydration
4. **System Preference Respect**: Honors user's system theme preference
5. **Persistent Storage**: Remembers user choice across sessions
6. **Accessibility**: Full keyboard and screen reader support
7. **Performance**: Minimal JavaScript, efficient CSS transitions
8. **Progressive Enhancement**: Works without JavaScript

## Architecture Benefits

### Why This Approach?

1. **Official Support**: Follows Astro's recommended pattern
2. **SSR Friendly**: Works correctly with server-side rendering
3. **Hydration Safe**: No React/JavaScript required for basic functionality
4. **Performance**: Inline script executes immediately, no bundle overhead
5. **Reliability**: Uses vanilla JavaScript for core functionality

### Vanilla JS + React Integration

- **Core Logic**: Vanilla JavaScript in `is:inline` script handles theme switching
- **React Layer**: `useTheme` hook provides reactive state for UI components
- **Event Bridge**: DOM events and MutationObserver sync React state
- **Best of Both**: SSR-safe initialization + React DX for components

## Customization

### Adding New Theme Colors

Update `src/styles/tailwind.css`:

```css
:root {
  /* Light theme colors */
  --color-my-custom: #ffffff;
}

.dark {
  /* Dark theme colors */
  --color-my-custom: #000000;
}
```

### Custom Transition Duration

Modify the global CSS transition in `src/styles/global.css`:

```css
*,
*::before,
*::after {
  transition: background-color 0.5s ease; /* Change duration here */
  /* ... other properties */
}
```

### Custom Icons

Replace the Sun and Moon components with your own icons while maintaining the same API.

### Multiple Theme Toggles

If you need multiple theme toggle buttons, give them different IDs and update the script:

```javascript
document.getElementById("themeToggle1")?.addEventListener("click", handleToggleClick);
document.getElementById("themeToggle2")?.addEventListener("click", handleToggleClick);
```
