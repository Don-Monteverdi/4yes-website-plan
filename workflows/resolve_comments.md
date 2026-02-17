# Workflow: Resolve Comments

## Objective
Review and address user feedback comments left on elements or pages in the Webflow Designer.

## When to Use
User asks to check feedback, fix comments, review notes, or address design feedback.

## Required Inputs
- `site_id`: The Webflow site ID
- `scope`: All comments or a specific page (ask if unclear)

## Steps
1. **Fetch comments** — Use `data_comments_tool` to retrieve comments for the site. Filter for unresolved comments.
2. **Summarize** — Present each open comment to the user: the comment text, which page/element it's attached to, who left it, and when.
3. **Prioritize** — Group by page and severity. Ask the user which comments to address first.
4. **Address each comment** — For each comment the user wants to fix:
   a. Navigate to the correct page using `de_page_tool > switch_page`
   b. Find and select the element using `element_tool > get_all_elements` and `element_tool > select_element`
   c. Make the requested change (follow `workflows/style_elements.md` or `workflows/build_section.md` as needed)
   d. Take a snapshot with `element_snapshot_tool` to verify the fix
5. **Report** — Tell the user which comments were addressed and what was changed.

## Expected Output
Resolved feedback comments with visual snapshots confirming the fixes.

## Edge Cases
- If a comment references an element that no longer exists, report it as stale and skip.
- If a comment requires a design decision, ask the user rather than guessing.
- If there are no open comments, tell the user everything is clear.

## Webflow MCP Tools Used
- `data_comments_tool`
- `de_page_tool` > `switch_page`
- `element_tool` > `get_all_elements`, `select_element`, `set_style`
- `style_tool` > `create_style`, `update_style`
- `element_snapshot_tool`
