# Workflow: Style Elements

## Objective
Create, update, or apply styles to elements on the current page.

## When to Use
User asks to change colors, fonts, spacing, layout, or any visual property. Also when setting up responsive styles for different breakpoints.

## Required Inputs
- `target`: Which element(s) to style (by name, description, or element ID)
- `style_changes`: What to change (colors, spacing, fonts, layout, etc.)
- `site_id`: The Webflow site ID

## Steps
1. **Identify the target element** — Use `element_tool > get_all_elements` (with include_style_properties: false for speed) to find the element. Or use `element_tool > get_selected_element` if the user is pointing at something.
2. **Check existing styles** — Use `style_tool > get_styles` to see what styles already exist. Reuse existing styles when possible.
3. **Create or update the style** — To create a new style: `style_tool > create_style`. To modify an existing one: `style_tool > update_style`. CRITICAL: Always use longhand CSS property names. Never use shorthand.
4. **Apply the style** — Use `element_tool > set_style` on the target element(s). For combo classes, pass multiple style names as an array.
5. **Handle breakpoints** — If the user wants responsive styles, call `style_tool > update_style` with the appropriate breakpoint parameter:
   - `main` — All devices (default)
   - `xxl` — ≥1920px
   - `xl` — ≥1440px
   - `large` — ≥1280px
   - `medium` — ≤991px (tablet)
   - `small` — ≤767px (mobile landscape)
   - `tiny` — ≤478px (mobile portrait)
6. **Handle pseudo-states** — For hover/focus/active states, pass the `pseudo` parameter when updating styles (e.g., "hover", "focus", "active"). Default is "noPseudo".
7. **Snapshot** — Use `element_snapshot_tool` to verify the visual result.

## Expected Output
Elements with updated styles, visually confirmed via snapshot.

## Edge Cases
- If the user says "make it responsive", create styles for main, medium, small, and tiny breakpoints at minimum.
- If a style name conflicts with an existing one, ask whether to update the existing style or create a combo class.
- NEVER use CSS shorthand. `margin: 10px` is WRONG. Use `margin-top: 10px`, `margin-right: 10px`, `margin-bottom: 10px`, `margin-left: 10px` separately.

## Webflow MCP Tools Used
- `element_tool` > `get_all_elements`, `get_selected_element`, `set_style`
- `style_tool` > `get_styles`, `create_style`, `update_style`
- `element_snapshot_tool`
