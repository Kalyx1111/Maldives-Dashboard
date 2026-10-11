"""GDELT DOC 2.0 API - free, no key. English-source filter enforced upstream
(sourcelang:eng). Requests are PACED (GDELT asks clients not to flood it) and
a 429 is retried once after a pause; every failure reports its real HTTP
status or response type so the status panel tells you what happened."""
from __future__ import annotations
import json
import time
from .base import Item, ConnectorResult
from ..classify import classify

NAME = "gdelt"
ENDPOINT = "https://api.gdeltproject.org/api/v2/doc/doc"
PACE_SECONDS = 6.0          # spacing between queries
BACKOFF_SECONDS = 20.0      # pause before the single retry on HTTP 429

QUERIES = [
    "Maldives China sourcelang:eng",
    "Male Maldives defence sourcelang:eng",
    "Maldives Coast Guard sourcelang:eng",
    "Maldives Air Corps drones sourcelang:eng",
    "Maafaru airport sourcelang:eng",
    "Velana airport expansion sourcelang:eng",
    "Thilafushi port sourcelang:eng",
    "Maldives fuel storage sourcelang:eng",
    "Maldives undersea cable sourcelang:eng",
    "Maldives cyber attack sourcelang:eng",
    "Maldives debt China sourcelang:eng",
    "Maldives free trade agreement China sourcelang:eng",
    "Maldives research vessel sourcelang:eng",
    "Maldives Turkey drones sourcelang:eng",
    "Maldives EEZ surveillance sourcelang:eng",
    "Maldives piracy Coast Guard sourcelang:eng",
    "Hulhumale news sourcelang:eng",
    "Maldives water desalination sourcelang:eng",
    "Maldives energy diesel solar sourcelang:eng",
    "Gan airport Maldives sourcelang:eng",
    "Muizzu China visit sourcelang:eng",
    "Maldives Ports Limited sourcelang:eng",
    "Maldives MNDF sourcelang:eng",
    "Maldives National Cyber Security Agency sourcelang:eng",
    "Maldives Chinese investment sourcelang:eng",
    "Maldives military base sourcelang:eng",
    "Maldives maritime security sourcelang:eng",
    "Dhiraagu cable sourcelang:eng",
    "Maldives airport Chinese sourcelang:eng",
    "Maldives sea lanes sourcelang:eng",
]


def configured() -> bool:
    return True


def _get(safe_http, q):
    params = {"query": q, "mode": "ArtList", "format": "json", "timespan": "3d",
              "maxrecords": "40", "sort": "DateDesc"}
    r = safe_http.safe_get(ENDPOINT, params=params)
    if r.status_code == 429:
        time.sleep(BACKOFF_SECONDS)
        r = safe_http.safe_get(ENDPOINT, params=params)
    return r


def fetch() -> ConnectorResult:
    from .. import safe_http
    items, errors = [], []
    for i, q in enumerate(QUERIES):
        if i:
            time.sleep(PACE_SECONDS)
        try:
            r = _get(safe_http, q)
            if r.status_code != 200:
                errors.append(f"'{q.split(' sourcelang')[0]}': HTTP {r.status_code}")
                continue
            try:
                data = json.loads(r.content)
            except ValueError:
                errors.append(f"'{q.split(' sourcelang')[0]}': non-JSON response (service busy or changed)")
                continue
            for a in data.get("articles", []):
                title = (a.get("title") or "").strip()
                if not title:
                    continue
                items.append(Item(
                    category=classify(title), label=title[:90], text=title,
                    source=a.get("domain", "GDELT"), date=a.get("seendate", ""),
                    url=a.get("url"), connector=NAME,
                ).to_dict())
        except safe_http.FetchError as e:
            errors.append(f"'{q.split(' sourcelang')[0]}': blocked ({e})")
        except Exception as e:
            errors.append(f"'{q.split(' sourcelang')[0]}': {type(e).__name__}")
    if not items and errors:
        return ConnectorResult(NAME, True, False, "; ".join(errors)[:300])
    msg = f"{len(items)} items across {len(QUERIES)} topic queries"
    if errors:
        msg += f" ({len(errors)} failed: {'; '.join(errors)[:200]})"
    return ConnectorResult(NAME, True, True, msg, items)
