# Color Theme System - Adrian Viewpoint

## 🎨 Brand Colors

Your brand palette consists of 5 distinctive colors:

- **Charcoal** (`#36342E`) - Dark, sophisticated neutral
- **Burgundy** (`#890000`) - Deep red, primary brand color
- **Slate** (`#565264`) - Cool blue-gray, secondary accent
- **Beige** (`#D6CFCB`) - Warm neutral, elegant background
- **Gray** (`#707070`) - Medium gray for text and borders

## 🌓 Light & Dark Mode Strategy

### CSS Variable Approach (Recommended)

We're using Tailwind v4 design tokens with the `@theme` directive. Brand tokens feed semantic tokens to keep things consistent and DRY. This approach provides:

1. **Automatic theme switching** - Variables update based on `.dark` class
2. **Semantic naming** - Use purpose-based names rather than color names
3. **Flexibility** - Easy to adjust colors without changing HTML
4. **Performance** - No JavaScript required for color changes

### Color Mapping

#### Light Mode (semantic → brand mapping)
```css
--color-background: #ffffff (white)
--color-surface: #f9f9f9 (light gray)
--color-primary: var(--color-brand-burgundy) (#890000)
--color-secondary: var(--color-brand-slate) (#565264)
--color-accent: var(--color-brand-charcoal) (#36342E)
--color-text-primary: var(--color-brand-charcoal) (#36342E)
--color-text-secondary: var(--color-brand-gray) (#707070)
```

#### Dark Mode (semantic with contrast-adjusted tints)
```css
--color-background: #111111 (near black)
--color-surface: var(--color-brand-charcoal) (#36342E)
--color-primary: #b30000 (lighter burgundy for improved contrast)
--color-secondary: #7672a0 (lighter slate for improved contrast)
--color-accent: var(--color-brand-beige) (#D6CFCB)
--color-text-primary: #f5f5f5 (near white)
--color-text-secondary: var(--color-brand-beige) (#D6CFCB)
```

## 📖 Usage Guide

### 1. Semantic Colors (Recommended for Most Use Cases)

Use semantic variables that automatically adapt to theme:

```html
<!-- Background -->
<div class="bg-background">...</div>

<!-- Text -->
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>

<!-- Borders -->
<div class="border border-border">...</div>

<!-- Buttons -->
<button class="bg-primary text-white">Click me</button>
```

### 2. Brand Colors (When You Need Consistent Colors)

Use brand colors when you want the same color in both themes:

```html
<!-- Always burgundy -->
<div class="bg-brand-burgundy">...</div>

<!-- Always slate -->
<div class="text-brand-slate">...</div>
```

### 3. Best Practices

#### ✅ Do's

1. **Use semantic colors for UI elements**
   ```html
   <div class="bg-surface text-primary">
     Content that adapts to theme
   </div>
   ```

2. **Use brand colors for brand elements**
   ```html
  <h1 class="text-brand-burgundy">Brand Headline</h1>
   ```

3. **Combine with opacity for variations**
   ```html
  <div class="bg-primary hover:opacity-90">Hover me</div>
   ```

4. **Layer colors thoughtfully**
   - Background → Surface → Content
   - Use borders to separate elements
   - Consider contrast ratios (WCAG AA minimum: 4.5:1)

#### ❌ Don'ts

1. **Don't hardcode colors in HTML**
   ```html
  <!-- Bad -->
  <div class="bg-[#6b1e1e]">...</div>
   
  <!-- Good -->
  <div class="bg-primary">...</div>
   ```

2. **Don't use text colors on similar backgrounds**
   ```html
  <!-- Bad - poor contrast -->
  <div class="bg-brand-burgundy text-brand-slate">
   
  <!-- Good - high contrast -->
  <div class="bg-brand-burgundy text-white">
   ```

## 🎯 Common Patterns

### Hero Section
```html
<section class="bg-background">
  <h1 class="text-primary">Headline</h1>
  <p class="text-secondary">Description</p>
</section>
```

### Card Component
```html
<div class="bg-surface border border-border 
            hover:border-primary transition-colors">
  <h3 class="text-primary">Title</h3>
  <p class="text-secondary">Content</p>
</div>
```

### Navigation
```html
<nav class="bg-background/80 backdrop-blur-sm 
            border-b border-border">
  <a class="text-primary hover:text-primary">Link</a>
</nav>
```

### Buttons
```html
<!-- Primary CTA -->
<button class="bg-primary text-white 
               hover:opacity-90 transition-opacity">
  Action
</button>

<!-- Secondary CTA -->
<button class="border-2 border-primary text-primary
               hover:bg-primary hover:text-white transition-all">
  Secondary
</button>

<!-- Ghost Button -->
<button class="text-primary hover:bg-surface">
  Ghost
</button>
```

## 🔧 Implementation Details

### Theme Toggle
The `ThemeToggle.astro` component handles:
- Reading system preference
- Storing user preference in localStorage
- Toggling the `.dark` class on `<html>`
- Updating icon states

### Preventing Flash of Unstyled Content (FOUC)
The inline script in `Layout.astro` runs before page render to apply the correct theme immediately.

## 🎨 Color Contrast Ratios

Ensure accessibility with proper contrast:

| Combination | Ratio | WCAG Level |
|------------|-------|------------|
| Charcoal on White | 15.7:1 | AAA ✅ |
| Burgundy on White | 8.1:1 | AAA ✅ |
| Slate on White | 6.2:1 | AA ✅ |
| Gray on White | 4.6:1 | AA ✅ |
| Beige on Charcoal | 6.8:1 | AA ✅ |

## 📝 Extending the Theme

To add new semantic colors:

1. Add to `global.css`:
```css
@theme {
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
}

.dark {
  --color-success: #34d399;
  --color-warning: #fbbf24;
  --color-error: #f87171;
}
```

2. Use in your components:
```html
<div class="text-success">Success message</div>
```
