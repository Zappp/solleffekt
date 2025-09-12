# Typography System

This project uses **Nata Sans** as the primary font family with a comprehensive typography system built on Tailwind CSS v4.

## Font Configuration

- **Primary Font**: Nata Sans (loaded from Google Fonts)
- **Fallback Fonts**: ui-sans-serif, system-ui, sans-serif
- **Weights Available**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Styles Available**: Regular and Italic

## Typography Classes

### Headings

- `.typography-h1` - Main page titles (responsive: 36px → 48px → 72px)
- `.typography-h2` - Section headings (responsive: 30px → 36px)
- `.typography-h3` - Subsection headings (24px)
- `.typography-h4` - Card titles (20px)
- `.typography-h5` - Product titles (18px)
- `.typography-h6` - Small headings (16px)

### Body Text

- `.typography-lead` - Large intro text (20px, relaxed line height)
- `.typography-body-large` - Large body text (18px, relaxed line height)
- `.typography-body` - Standard body text (16px)
- `.typography-body-small` - Small body text (14px)

### Specialized

- `.typography-caption` - Image captions, fine print (12px)
- `.typography-overline` - Uppercase labels, categories (12px, bold, letter-spaced)
- `.typography-button` - Button text (14px, medium weight)
- `.typography-button-large` - Large button text (16px, medium weight)

### Color Variants

- `.typography-muted` - Subtle text (neutral-500)
- `.typography-subtle` - Secondary text (neutral-600)
- `.typography-emphasis` - Important text (neutral-800)

## Usage Examples

```jsx
// Page title
<h1 className="typography-h1">Welcome to Solleffekt</h1>

// Section heading
<h2 className="typography-h2">Our Products</h2>

// Lead paragraph
<p className="typography-lead typography-subtle">
  High-quality solar solutions for your home and business.
</p>

// Body text
<p className="typography-body">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>

// Button
<button className="typography-button bg-yellow-400">
  Get Started
</button>

// Caption
<figcaption className="typography-caption typography-muted">
  Solar panel installation
</figcaption>

// Category label
<div className="typography-overline text-indigo-600">
  Featured Products
</div>
```
