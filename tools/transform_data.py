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
