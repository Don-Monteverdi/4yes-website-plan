# Workflow: Build Section

## Objective
Build a complete section (hero, features, testimonials, CTA, footer, etc.) on the current page using Webflow elements and styles.

## When to Use
User asks to add a section, build a layout, create a component group, or add content blocks to a page.

## Required Inputs
- `section_type`: What kind of section (hero, features, pricing, CTA, footer, etc.)
- `content`: Text, images, or data to populate the section (ask if not provided)
- `site_id`: The Webflow site ID

## Steps
1. **Plan the element tree** — Before calling any tools, plan the full element hierarchy on paper. The element_builder only supports 3 levels deep per call, so break complex sections into multiple calls. Plan which elements are parents and which are children.
2. **Create styles first** — Use `style_tool > create_style` for every class you'll need BEFORE building elements. Webflow requires styles to exist before they can be applied. Always use longhand CSS properties (margin-top, not margin). See the Style Rules section for details.
3. **Build the outer structure** — Use `element_builder` to create the Section > Container > content wrapper. Max 3 levels deep per call. Capture the returned element IDs.
4. **Build inner content** — Use `element_builder` again to add children inside the elements you just created. Reference parent elements by ID. Repeat until the full tree is built.
5. **Apply styles** — If styles weren't applied during creation, use `element_tool > set_style` on each element. For combo classes, pass multiple style names.
6. **Set content** — For text elements, set the text content during creation. For images, use `element_tool > set_image_asset` with a valid asset_id from `asset_tool > get_all_assets_and_folders`. For links, use `element_tool > set_link`.
7. **Snapshot and verify** — Use `element_snapshot_tool` on the section to visually confirm. Show the user. Fix any issues.

## Expected Output
A fully styled, content-populated section visible on the current page.

## Edge Cases
- If the element tree exceeds 3 levels, split into multiple element_builder calls. Build outer layers first, then nest children into them.
- If a style already exists, reuse it instead of creating a duplicate. Check with `style_tool > get_styles` first.
- If an image asset doesn't exist, ask the user to upload it or provide a URL. Use `get_image_preview` to verify the image before applying.
- After creating elements, they are NOT automatically selected. Use `element_tool > select_element` to inspect or modify them.

## Webflow MCP Tools Used
- `style_tool` > `create_style`, `get_styles`, `update_style`
- `element_builder`
- `element_tool` > `select_element`, `set_style`, `set_image_asset`, `set_link`
- `element_snapshot_tool`
- `asset_tool` > `get_all_assets_and_folders`
