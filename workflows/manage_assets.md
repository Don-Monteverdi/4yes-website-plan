# Workflow: Manage Assets

## Objective
Upload, organize, and apply image and file assets to the Webflow site.

## When to Use
User asks to add images, organize media, update image alt text, or manage files.

## Required Inputs
- `action`: What to do (list, organize, update, apply)
- `site_id`: The Webflow site ID

## Steps
1. **List current assets** — Use `asset_tool > get_all_assets_and_folders` with query "all" to see what exists. Use search query if looking for something specific.
2. **Organize** — If needed, create folders with `asset_tool > create_folder`. Move assets into folders with `asset_tool > update_asset` and pass the parent_folder_id.
3. **Update metadata** — Use `asset_tool > update_asset` to set alt text, rename, or reorganize assets.
4. **Apply to elements** — Use `element_tool > set_image_asset` on Image elements, passing a valid asset_id.
5. **Preview** — Use `get_image_preview` to verify image URLs before applying. Only supports JPG, PNG, GIF, WEBP, and AVIF.

## Expected Output
Organized assets with proper alt text, applied to the correct elements.

## Edge Cases
- If an image URL is provided but not yet an asset, the user needs to upload it via the Webflow Dashboard — inform them.
- Always set alt text on images for accessibility and SEO.
- If listing all assets returns too much data, use filter_assets_by_ids or search query to narrow results.

## Webflow MCP Tools Used
- `asset_tool` > `get_all_assets_and_folders`, `create_folder`, `update_asset`
- `element_tool` > `set_image_asset`
- `get_image_preview`
