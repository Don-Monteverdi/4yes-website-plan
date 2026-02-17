# Workflow: Create Page

## Objective
Create a new page in the Webflow site with proper settings and initial structure.

## When to Use
User asks to create a new page, landing page, or add a route to the site.

## Required Inputs
- `page_name`: The name/title for the new page
- `page_purpose`: What the page is for (helps decide initial structure)
- `site_id`: The Webflow site ID (ask if unknown)

## Steps
1. **Check existing pages** — Use `data_pages_tool > get_pages_list` with the site_id to see what pages already exist. Avoid duplicates.
2. **Create the page** — Use `de_page_tool > create_page` with the page name and site_id. The Designer will automatically switch to the new page after creation.
3. **Verify creation** — Use `de_page_tool > get_current_page` to confirm you're on the new page and capture the page metadata.
4. **Set page metadata** — Use `data_pages_tool > update_page_settings` to set the SEO title, meta description, and Open Graph settings.
5. **Build initial structure** — If the user specified a purpose, follow `workflows/build_section.md` to add the first section. Otherwise, ask what content the page needs.
6. **Snapshot** — Use `element_snapshot_tool` on the page's root element to visually confirm the result. Show the user.

## Expected Output
A new page visible in the Webflow Designer with correct metadata and optional initial structure.

## Edge Cases
- If the page name already exists, ask the user whether to rename or use the existing page.
- If no site_id is available, use `data_sites_tool > get_sites_list` to find it. If multiple sites exist, ask the user which one.
- If page creation fails, check whether the user's plan supports additional pages.

## Webflow MCP Tools Used
- `data_pages_tool` > `get_pages_list`
- `de_page_tool` > `create_page`
- `de_page_tool` > `get_current_page`
- `data_pages_tool` > `update_page_settings`
- `element_snapshot_tool`
