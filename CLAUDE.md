# Agent Instructions — [PROJECT NAME]

You're working inside the **WAT framework** (Workflows, Agents, Tools). This architecture separates concerns so that probabilistic AI handles reasoning while deterministic code handles execution. That separation is what makes this system reliable.

## The WAT Architecture

**Layer 1: Workflows (The Instructions)**
- Markdown SOPs stored in `workflows/`
- Each workflow defines the objective, required inputs, which Webflow MCP tools to call, expected outputs, and how to handle edge cases
- Written in plain language, the same way you'd brief someone on your team

**Layer 2: Agents (The Decision-Maker)**
- This is your role. You're responsible for intelligent coordination.
- Read the relevant workflow, call Webflow MCP tools in the correct sequence, handle failures gracefully, and ask clarifying questions when needed
- You connect intent to execution without trying to do everything yourself
- Example: If you need to build a hero section, don't wing it. Read `workflows/build_section.md`, plan the element tree, create styles first, then build the elements layer by layer.

**Layer 3: Tools (The Execution)**
- **Webflow MCP tools** are your primary execution layer — they create pages, build elements, apply styles, manage CMS, publish sites, and more
- Each tool maps to a specific Webflow Designer or Data API action
- Tools are stateless — they take inputs and return outputs, nothing more
- Local scripts in `tools/` handle anything outside Webflow (data transforms, scraping, reports)

---

## Setup Guide

If the `workflows/` directory doesn't exist yet, the user hasn't bootstrapped the WAT structure. When the user says **"set up WAT"**, **"initialize the project"**, or anything similar, run the following setup procedure:

### Step 1: Create the directory structure

```bash
mkdir -p workflows tools data/raw data/processed
```

### Step 2: Create the starter workflow files

Create each file below inside `workflows/`. Every workflow follows the same template format so you can author new ones later by copying the pattern.

---

**`workflows/_TEMPLATE.md`** — The blank template for creating new workflows:

```markdown
# Workflow: [NAME]

## Objective
[One sentence: what does this workflow accomplish?]

## When to Use
[Describe the trigger — what does the user say or what situation calls for this?]

## Required Inputs
- `input_1`: [description]
- `input_2`: [description]

## Steps
1. [First step — be specific about which MCP tool to call and with what parameters]
2. [Second step]
3. [Third step]

## Expected Output
[What does success look like? A published page? A new section? A visual snapshot?]

## Edge Cases
- If [situation], then [how to handle it]
- If [tool fails], then [fallback behavior]

## Webflow MCP Tools Used
- `tool_name` > `action_name`
```

---

**`workflows/create_page.md`**:

```markdown
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
```

---

**`workflows/build_section.md`**:

```markdown
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
```

---

**`workflows/style_elements.md`**:

```markdown
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
```

---

**`workflows/manage_cms.md`**:

```markdown
# Workflow: Manage CMS

## Objective
Create or modify CMS collections, fields, and items in the Webflow site.

## When to Use
User asks to set up a blog, product catalog, team directory, portfolio, FAQ, or any dynamic content that should be managed through Webflow's CMS.

## Required Inputs
- `collection_type`: What kind of content (blog posts, products, team members, etc.)
- `fields`: What data fields each item needs (ask if not provided)
- `sample_data`: Optional sample items to populate
- `site_id`: The Webflow site ID

## Steps
1. **Check existing collections** — Use `data_cms_tool > get_collection_list` with site_id. Don't create duplicates.
2. **Create the collection** — Use `data_cms_tool > create_collection` with the name and site_id.
3. **Add fields** — For each field, use the appropriate action:
   - Static fields (text, number, date, image, etc.): `data_cms_tool > create_collection_static_field`
   - Option fields (dropdowns): `data_cms_tool > create_collection_option_field`
   - Reference fields (links to other collections): `data_cms_tool > create_collection_reference_field`
4. **Add sample items** — If the user provided data, use `data_cms_tool > create_collection_items_live` to add items.
5. **Publish items** — Use `data_cms_tool > publish_collection_items` to make items live.
6. **Report** — Tell the user what was created: collection name, field count, item count.

## Expected Output
A CMS collection with defined fields and optional sample data, published and ready to bind to page elements.

## Edge Cases
- If the collection already exists, ask whether to update it or create a new one.
- If the user wants to connect CMS data to page elements, that must be done manually in the Webflow Designer — inform the user.
- If creating many items, batch them into a single `create_collection_items_live` call for efficiency.
- To delete items: use `data_cms_tool > delete_collection_items`. IMPORTANT: Always confirm with the user before deleting.

## Webflow MCP Tools Used
- `data_cms_tool` > `get_collection_list`, `create_collection`, `create_collection_static_field`, `create_collection_option_field`, `create_collection_reference_field`, `create_collection_items_live`, `publish_collection_items`
```

---

**`workflows/publish_site.md`**:

```markdown
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
```

---

**`workflows/resolve_comments.md`**:

```markdown
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
```

---

**`workflows/setup_design_tokens.md`**:

```markdown
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
```

---

**`workflows/add_custom_code.md`**:

```markdown
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
```

---

**`workflows/manage_assets.md`**:

```markdown
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
```

---

### Step 3: Create the local tool scripts (for non-Webflow tasks)

Create each file below inside `tools/`. These handle tasks that fall outside Webflow's MCP.

---

**`tools/run_tests.sh`**:

```bash
#!/usr/bin/env bash
set -euo pipefail
# WAT Framework — Test Runner (placeholder)
# Add your project's test commands here.
echo "[WAT] No test framework configured. Add your test command to this file."
exit 0
```

---

**`tools/lint.sh`**:

```bash
#!/usr/bin/env bash
set -euo pipefail
# WAT Framework — Linter (placeholder for custom code)
# Runs linting on any local scripts or custom code files.
echo "[WAT] No linter configured. Add your lint command to this file."
exit 0
```

---

**`tools/scrape_single_site.py`**:

```python
#!/usr/bin/env python3
"""WAT Framework — Single Site Scraper
Fetches a URL and saves the parsed content as JSON.
Usage: python tools/scrape_single_site.py --url https://example.com --output data/raw/result.json
"""
import argparse, json, sys
from urllib.request import urlopen, Request
from urllib.error import URLError
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts, self._skip = [], False
    def handle_starttag(self, tag, attrs):
        if tag in ("script","style","noscript"): self._skip = True
    def handle_endtag(self, tag):
        if tag in ("script","style","noscript"): self._skip = False
    def handle_data(self, data):
        s = data.strip()
        if not self._skip and s: self.parts.append(s)

def scrape(url, output):
    try:
        req = Request(url, headers={"User-Agent": "WAT-Scraper/1.0"})
        with urlopen(req, timeout=30) as resp:
            html = resp.read().decode("utf-8", errors="replace")
    except URLError as e:
        print(f"[WAT] Error: {e}", file=sys.stderr); sys.exit(1)
    p = TextExtractor(); p.feed(html)
    with open(output, "w") as f:
        json.dump({"url": url, "text": "\n".join(p.parts), "blocks": len(p.parts)}, f, indent=2)
    print(f"[WAT] Scraped {url} → {output} ({len(p.parts)} blocks)")

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--url", required=True); ap.add_argument("--output", required=True)
    a = ap.parse_args(); scrape(a.url, a.output)
```

---

**`tools/transform_data.py`**:

```python
#!/usr/bin/env python3
"""WAT Framework — Data Transformer
Reads JSON/CSV, applies transforms, writes result.
Usage: python tools/transform_data.py --input data/raw/in.json --output data/processed/out.json
"""
import argparse, json, csv, sys
from pathlib import Path

def load(path):
    p = Path(path)
    if p.suffix == ".json":
        with open(p) as f: return json.load(f)
    elif p.suffix == ".csv":
        with open(p, newline="") as f: return list(csv.DictReader(f))
    else:
        print(f"[WAT] Unsupported: {p.suffix}", file=sys.stderr); sys.exit(1)

def save(data, path):
    p = Path(path); p.parent.mkdir(parents=True, exist_ok=True)
    with open(p, "w") as f: json.dump(data, f, indent=2)
    print(f"[WAT] Saved → {path}")

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", required=True); ap.add_argument("--output", required=True)
    a = ap.parse_args(); save(load(a.input), a.output)
```

---

### Step 4: Make scripts executable

```bash
chmod +x tools/run_tests.sh tools/lint.sh
```

### Step 5: Create the .env template

**`.env.example`**:

```
# WAT Framework — Environment Variables
# Copy this to .env and fill in your values.
# IMPORTANT: Never commit .env to git.

# Webflow
WEBFLOW_SITE_ID=your-site-id-here

# Database (if using tools/query_db.py)
# DATABASE_URL=postgresql://user:password@localhost:5432/mydb

# Add your API keys below:
# OPENAI_API_KEY=
# ANTHROPIC_API_KEY=
```

### Step 6: Update .gitignore

Append these lines to `.gitignore` (create it if it doesn't exist):

```
.env
data/raw/*
data/processed/*
!data/raw/.gitkeep
!data/processed/.gitkeep
```

Then create the gitkeep files:

```bash
touch data/raw/.gitkeep data/processed/.gitkeep
```

### Step 7: Confirm setup

After running all steps above, list the structure to confirm:

```bash
find workflows tools data .env.example -type f | sort
```

Expected output:
```
.env.example
data/processed/.gitkeep
data/raw/.gitkeep
tools/lint.sh
tools/run_tests.sh
tools/scrape_single_site.py
tools/transform_data.py
workflows/_TEMPLATE.md
workflows/add_custom_code.md
workflows/build_section.md
workflows/create_page.md
workflows/manage_assets.md
workflows/manage_cms.md
workflows/publish_site.md
workflows/resolve_comments.md
workflows/setup_design_tokens.md
workflows/style_elements.md
```

If everything is present, tell the user: **"WAT framework initialized. You have 8 Webflow workflows and 4 local tools ready to go."**

---

## How You Should Work

1. **Workflow first.** When you receive a task, check `workflows/` for a matching SOP before doing anything else. If one exists, follow it step by step. If none exists, say so and propose an approach.

2. **Tools second.** Call the Webflow MCP tools specified by the workflow. Pass the exact parameters each tool expects. Validate outputs before moving to the next step.

3. **Judgment always.** You are not a blind executor. If a workflow step doesn't make sense for the current situation, flag it. If a tool returns unexpected output, stop and investigate rather than pushing forward.

4. **Ask, don't guess.** If you're missing a required input (site_id, element ID, content), unsure which workflow applies, or hitting an ambiguous edge case — ask the user. A question costs nothing; a wrong assumption costs a retry.

5. **Always call `webflow_guide_tool` first.** Before your first Webflow action in any session, call `webflow_guide_tool` to refresh the latest rules and limitations.

---

## Creating New Workflows and Tools

When the user asks you to do something that has no matching workflow, and the task is likely to recur:

1. Do the task first (so you understand the steps and which MCP tools are needed).
2. Then create a new workflow in `workflows/` following the `_TEMPLATE.md` format.
3. If the task needed a local script that doesn't exist, create it in `tools/`.
4. Update the Available Workflows and Available Tools tables in this file.
5. Tell the user: "I've added `workflows/[name].md` so this is repeatable next time."

---

## Project Context

- **Site Name**: [Your Webflow site name]
- **Site ID**: [Your Webflow site ID — get from `data_sites_tool > get_sites_list`]
- **Live URL**: [e.g., https://yoursite.webflow.io or custom domain]
- **Purpose**: [e.g., Company marketing site | E-commerce store | Portfolio | Blog]
- **Design System**: [e.g., Custom design tokens defined in variables | Following a Figma mockup | Freestyle]

### Site Structure
```
├── CLAUDE.md              ← You are here
├── workflows/             ← Step-by-step SOPs you follow
│   ├── _TEMPLATE.md
│   ├── create_page.md
│   ├── build_section.md
│   ├── style_elements.md
│   ├── manage_cms.md
│   ├── publish_site.md
│   ├── resolve_comments.md
│   ├── setup_design_tokens.md
│   ├── add_custom_code.md
│   └── manage_assets.md
├── tools/                 ← Local scripts (non-Webflow tasks)
│   ├── run_tests.sh
│   ├── lint.sh
│   ├── scrape_single_site.py
│   └── transform_data.py
├── data/                  ← Input/output files
│   ├── raw/
│   └── processed/
├── .env                   ← Secrets (never commit)
├── .env.example           ← Template for .env
```

---

## Available Workflows

Read these from `workflows/` before starting any matching task:

| Workflow File | When to Use |
|---|---|
| `create_page.md` | User asks to create a new page or landing page |
| `build_section.md` | User asks to add a hero, features, CTA, footer, or any content block |
| `style_elements.md` | User asks to change colors, fonts, spacing, layout, or responsiveness |
| `manage_cms.md` | User asks to set up a blog, products, team directory, or any dynamic content |
| `publish_site.md` | User asks to publish, go live, or push changes |
| `resolve_comments.md` | User asks to check feedback or address design comments |
| `setup_design_tokens.md` | User asks to set up a design system, brand colors, or typography |
| `add_custom_code.md` | User asks to add analytics, tracking, or custom JavaScript |
| `manage_assets.md` | User asks to upload, organize, or apply images |
| `_TEMPLATE.md` | Use as the base when creating any new workflow |

If no workflow matches, tell the user and propose a plan before executing.

---

## Available Webflow MCP Tools

### Site Management
| Tool | Action | What It Does |
|---|---|---|
| `data_sites_tool` | `get_sites_list` | List all sites in the workspace |
| `data_sites_tool` | `get_site_details` | Get site info, locales, domains |
| `data_sites_tool` | `publish_site` | Publish the site to live |

### Page Management
| Tool | Action | What It Does |
|---|---|---|
| `de_page_tool` | `create_page` | Create a new page (auto-switches to it) |
| `de_page_tool` | `create_page_folder` | Create a folder to organize pages |
| `de_page_tool` | `get_current_page` | Get info about the current page |
| `de_page_tool` | `switch_page` | Switch to a different page by ID |
| `data_pages_tool` | `get_pages_list` | List all pages with metadata |
| `data_pages_tool` | `get_page_metadata` | Get SEO settings, OG tags |
| `data_pages_tool` | `update_page_settings` | Update title, description, OG |
| `data_pages_tool` | `get_page_content` | Get page DOM content |
| `data_pages_tool` | `update_page_static_content` | Update text/content on page |

### Element Building & Management
| Tool | Action | What It Does |
|---|---|---|
| `element_builder` | (direct) | Create elements on page (max 3 levels deep per call) |
| `element_tool` | `get_all_elements` | List all elements on current page |
| `element_tool` | `get_selected_element` | Inspect the currently selected element |
| `element_tool` | `select_element` | Select a specific element by ID |
| `element_tool` | `set_style` | Apply one or more styles (classes) to an element |
| `element_tool` | `set_link` | Set a link on Button, TextLink, or LinkBlock |
| `element_tool` | `set_image_asset` | Set an image on an Image element |
| `element_tool` | `set_heading_level` | Change heading level (h1–h6) |
| `element_tool` | `add_or_update_attribute` | Set custom attributes (data-*, aria-*) |
| `element_tool` | `remove_attribute` | Remove an attribute |
| `element_tool` | `update_id_attribute` | Set a custom #id on an element |
| `element_snapshot_tool` | (direct) | Capture a visual PNG of any element |

### Styling
| Tool | Action | What It Does |
|---|---|---|
| `style_tool` | `create_style` | Create a new class (optionally as combo class) |
| `style_tool` | `get_styles` | List existing styles/classes |
| `style_tool` | `update_style` | Update CSS properties on a style (with breakpoint + pseudo support) |

### Variables (Design Tokens)
| Tool | Action | What It Does |
|---|---|---|
| `variable_tool` | `create_variable_collection` | Create a variable group |
| `variable_tool` | `get_variable_collections` | List existing collections |
| `variable_tool` | `get_variables` | List variables |
| `variable_tool` | `create_color_variable` | Create a color token |
| `variable_tool` | `create_size_variable` | Create a size/spacing token |
| `variable_tool` | `create_font_family_variable` | Create a font token |
| `variable_tool` | `create_number_variable` | Create a number token |
| `variable_tool` | `create_percentage_variable` | Create a percentage token |

### CMS
| Tool | Action | What It Does |
|---|---|---|
| `data_cms_tool` | `get_collection_list` | List all CMS collections |
| `data_cms_tool` | `get_collection_details` | Get fields and settings for a collection |
| `data_cms_tool` | `create_collection` | Create a new CMS collection |
| `data_cms_tool` | `create_collection_static_field` | Add a text/number/date/image field |
| `data_cms_tool` | `create_collection_option_field` | Add a dropdown/select field |
| `data_cms_tool` | `create_collection_reference_field` | Add a reference to another collection |
| `data_cms_tool` | `update_collection_field` | Modify a field's settings |
| `data_cms_tool` | `create_collection_items_live` | Add items (published immediately) |
| `data_cms_tool` | `update_collection_items_live` | Update existing items |
| `data_cms_tool` | `publish_collection_items` | Publish draft items |
| `data_cms_tool` | `delete_collection_items` | Delete items (CONFIRM FIRST) |

### Components
| Tool | Action | What It Does |
|---|---|---|
| `de_component_tool` | `get_all_components` | List all reusable components |
| `de_component_tool` | `create_component_instance` | Add a component instance to the page |
| `data_components_tool` | `list_components` | List components via API |
| `data_components_tool` | `get_component_content` | Get a component's inner content |
| `data_components_tool` | `update_component_content` | Update a component's content |

### Assets
| Tool | Action | What It Does |
|---|---|---|
| `asset_tool` | `get_all_assets_and_folders` | List images and files |
| `asset_tool` | `create_folder` | Create an asset folder |
| `asset_tool` | `update_asset` | Rename, move, or set alt text |
| `get_image_preview` | (direct) | Preview an image from URL |

### Scripts
| Tool | Action | What It Does |
|---|---|---|
| `data_scripts_tool` | `list_registered_scripts` | List registered scripts |
| `data_scripts_tool` | `list_applied_scripts` | List scripts active on the site |
| `data_scripts_tool` | `add_inline_site_script` | Add custom JS to the site |
| `data_scripts_tool` | `delete_all_site_scripts` | Remove all scripts (CONFIRM FIRST) |

### Feedback & Comments
| Tool | Action | What It Does |
|---|---|---|
| `data_comments_tool` | (query) | Get user comments/feedback on elements and pages |

### Learning
| Tool | Action | What It Does |
|---|---|---|
| `webflow_guide_tool` | (direct) | Refresh tool usage guidelines (call first each session) |
| `de_learn_more_about_styles` | (direct) | Get full list of supported CSS properties |
| `ask_webflow_ai` | (direct) | Ask Webflow AI about API questions |

### Local Tools (non-Webflow)
| Tool Script | What It Does | Required Inputs |
|---|---|---|
| `tools/scrape_single_site.py` | Fetches and parses a single URL | `--url`, `--output` |
| `tools/transform_data.py` | Cleans and reshapes data files | `--input`, `--output` |

---

## Style Rules (CRITICAL)

Webflow does NOT support CSS shorthand properties. You MUST always use longhand property names.

| WRONG (shorthand) | CORRECT (longhand) |
|---|---|
| `margin: 10px` | `margin-top: 10px`, `margin-right: 10px`, `margin-bottom: 10px`, `margin-left: 10px` |
| `padding: 20px 40px` | `padding-top: 20px`, `padding-right: 40px`, `padding-bottom: 20px`, `padding-left: 40px` |
| `border: 1px solid #ccc` | `border-top-width: 1px`, `border-top-style: solid`, `border-top-color: #ccc` (repeat for each side) |
| `border-radius: 8px` | `border-top-left-radius: 8px`, `border-top-right-radius: 8px`, `border-bottom-right-radius: 8px`, `border-bottom-left-radius: 8px` |
| `gap: 16px` | `grid-row-gap: 16px`, `column-gap: 16px` |
| `background: #fff` | `background-color: #fff` |

### Breakpoint Hierarchy

Styles cascade from `main` to smaller breakpoints:
- `main` — All devices (default, start here)
- `xxl` — ≥1920px (large desktops)
- `xl` — ≥1440px
- `large` — ≥1280px
- `medium` — ≤991px (tablet)
- `small` — ≤767px (mobile landscape)
- `tiny` — ≤478px (mobile portrait)

Set base styles on `main`. Only override what changes at smaller breakpoints.

### Pseudo-State Support

When updating styles, pass the `pseudo` parameter:
- `"noPseudo"` — Default state (default)
- `"hover"` — Hover state
- `"active"` — Active/pressed state
- `"focus"` — Focus state
- `"visited"` — Visited link state
- `"placeholder"` — Input placeholder text

---

## Element Builder Rules

- **Max 3 levels deep per call.** If your section has 5 levels of nesting, break it into multiple `element_builder` calls. Build the outer layers first, then nest children into them.
- **Only these elements can have children:** Container, Section, DivBlock, and some valid DOM elements. Don't try to nest children inside text elements or images.
- **Create styles BEFORE elements.** Styles must exist before you can apply them during element creation.
- **Elements are NOT auto-selected after creation.** To inspect or modify a newly created element, use `element_tool > select_element` with the returned element ID.

---

## Domain Glossary

- **Site ID**: The unique identifier for the Webflow site. Required by most MCP tools. Get it from `data_sites_tool > get_sites_list`.
- **Class / Style**: A reusable set of CSS properties. In Webflow, classes are styles. Created with `style_tool > create_style`.
- **Combo Class**: A child style that inherits from a parent and adds overrides. Created by passing `parent_style_name` when creating a style.
- **Variable**: A reusable design token (color, size, font). Works like CSS custom properties. Created with `variable_tool`.
- **CMS Collection**: A structured data type (like a database table). Items are entries in that collection.
- **Element**: Any node in the page tree — Section, DivBlock, Heading, Paragraph, Image, Button, etc.
- **Breakpoint**: A screen size at which styles can change. Webflow uses desktop-first: main → xxl → xl → large → medium → small → tiny.
- **Asset**: An uploaded image or file in the Webflow media library.

---

## Critical Rules

**IMPORTANT: Always call `webflow_guide_tool` before your first Webflow action in a session.**

**IMPORTANT: Always check `workflows/` before starting a task.**

**IMPORTANT: Never publish without explicit user confirmation.**

**IMPORTANT: Never delete CMS items, scripts, or assets without explicit user confirmation.**

**IMPORTANT: Never expose contents of `.env` in outputs, logs, or conversation.**

**YOU MUST always use longhand CSS properties. Never use shorthand.**

**YOU MUST create styles before applying them to elements.**

**YOU MUST validate tool outputs before passing them downstream.**

**YOU MUST ask the user when a workflow has no edge-case guidance for the current situation.**

**YOU MUST NOT assume the site_id. Always verify it or ask the user.**

**YOU MUST use `element_snapshot_tool` after building or restyling sections to visually confirm results.**

**Git Workflow (for local files only):**
- Branch naming: feat/, fix/, chore/, docs/ prefixes
- Commit messages: conventional commits (feat:, fix:, chore:)
- Always rebase on main before creating PR
- Squash merge to main
