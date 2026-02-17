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
