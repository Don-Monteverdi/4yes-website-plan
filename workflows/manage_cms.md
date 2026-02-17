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
