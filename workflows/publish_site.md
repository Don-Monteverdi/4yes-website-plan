# Workflow: Publish Site

## Objective
Publish the Webflow site to make changes live.

## When to Use
User asks to publish, go live, push changes, or make updates visible.

## Required Inputs
- `site_id`: The Webflow site ID
- `scope`: What to publish (entire site or specific domains)

## Steps
1. **Review what's changed** — Summarize the changes you've made in the current session. List pages modified, elements added, styles changed, CMS items published.
2. **Confirm with the user** — IMPORTANT: Always tell the user exactly what will be published and ask for explicit confirmation. Never auto-publish.
3. **Publish** — Use `data_sites_tool > publish_site` with the site_id.
4. **Verify** — Tell the user the publish was successful and provide the live site URL if available.

## Expected Output
A published site with all recent changes live.

## Edge Cases
- IMPORTANT: Never publish without explicit user confirmation.
- If the site has custom domains, confirm which domains to publish to.
- If the publish fails, check for validation errors (missing alt text, broken links, etc.) and report them.
- If there are unpublished CMS items, remind the user and offer to publish them first.

## Webflow MCP Tools Used
- `data_sites_tool` > `publish_site`
