# Workflow: Setup Design Tokens

## Objective
Create a variable collection with color, size, and typography tokens for consistent design across the site.

## When to Use
User asks to set up a design system, create design tokens, define brand colors, or establish typography scales.

## Required Inputs
- `brand_colors`: Primary, secondary, accent, and neutral color values
- `typography`: Font families, size scale, and line heights
- `spacing`: Spacing scale (if applicable)
- `site_id`: The Webflow site ID

## Steps
1. **Check existing variables** — Use `variable_tool > get_variable_collections` to see what already exists.
2. **Create the collection** — Use `variable_tool > create_variable_collection` with a name like "Design Tokens" or "Brand".
3. **Create color variables** — For each brand color, use `variable_tool > create_color_variable` with the collection ID. Include: primary, secondary, accent, background, surface, text-primary, text-secondary, border, error, success, warning.
4. **Create size variables** — Use `variable_tool > create_size_variable` for spacing and sizing tokens: xs, sm, md, lg, xl, 2xl, 3xl.
5. **Create font variables** — Use `variable_tool > create_font_family_variable` for heading and body font families.
6. **Create base styles** — Use `style_tool > create_style` to build foundational styles that reference these variables (e.g., "heading-1", "body-text", "container", "section-padding").
7. **Report** — List all tokens created with their values.

## Expected Output
A complete variable collection with color, size, and typography tokens, plus base styles that reference them.

## Edge Cases
- If a variable collection already exists, ask whether to update it or create a new one.
- If the user doesn't have brand colors yet, suggest a professional default palette and let them adjust.
- Variables in Webflow work like CSS custom properties — they can be bound to styles later.

## Webflow MCP Tools Used
- `variable_tool` > `get_variable_collections`, `create_variable_collection`, `create_color_variable`, `create_size_variable`, `create_font_family_variable`
- `style_tool` > `create_style`
