# Workflow: Add Custom Code

## Objective
Add custom JavaScript or embed code to the Webflow site.

## When to Use
User asks to add analytics, tracking scripts, custom interactions, third-party widgets, or inline JavaScript.

## Required Inputs
- `script_content`: The JavaScript or HTML embed code
- `placement`: Head or body (ask if not clear)
- `site_id`: The Webflow site ID

## Steps
1. **Review the code** — Read the script content. Check for obvious issues (syntax errors, suspicious URLs, etc.). If the code looks dangerous or unclear, flag it to the user.
2. **Check existing scripts** — Use `data_scripts_tool > list_registered_scripts` and `data_scripts_tool > list_applied_scripts` to see what's already on the site. Avoid duplicates.
3. **Add the script** — Use `data_scripts_tool > add_inline_site_script` with the script content and site_id.
4. **Verify** — Confirm the script was added. If the site needs to be published for the script to take effect, tell the user.

## Expected Output
Custom code added to the site, with a note about whether publishing is required.

## Edge Cases
- IMPORTANT: Always review custom code before adding it. Never add scripts blindly.
- If the user wants to remove all scripts, use `data_scripts_tool > delete_all_site_scripts` — but ALWAYS confirm first.
- If the script is a third-party analytics tag (Google Analytics, Meta Pixel, etc.), verify the tracking ID with the user.

## Webflow MCP Tools Used
- `data_scripts_tool` > `list_registered_scripts`, `list_applied_scripts`, `add_inline_site_script`
