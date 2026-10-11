"""RSS aggregator - free, no key. English-language feeds only.

Feed URLs are either confirmed from a publisher's own feed (SpaceNews returned
live items during verification), or listed in a feed directory (FeedSpot)
pending the connector's own live check. Each feed reports its own status and
fails independently. World-wide feeds keep only region-relevant headlines.
"""
from __future__ import annotations
import re
from .base import Item, ConnectorResult
from ..classify import classify

NAME = "rss"

FEEDS = [
    {"url": "https://news.usni.org/feed", "source": "USNI News (naval, fleet tracking)"},
    {"url": "https://blog.usni.org/feed", "source": "USNI Blog (naval analysis)"},
    {"url": "https://breakingdefense.com/feed", "source": "Breaking Defense"},
    {"url": "https://spacenews.com/feed/", "source": "SpaceNews"},
    {"url": "https://www.space.com/feeds.xml", "source": "Space.com"},
    {"url": "https://therecord.media/feed", "source": "The Record (cyber)"},
    {"url": "https://www.aljazeera.com/xml/rss/all.xml", "source": "Al Jazeera"},
    {"url": "https://news.google.com/rss/search?q=Maldives+China&hl=en-US&gl=US&ceid=US:en", "source": "Google News: Chinese projects"},
    {"url": "https://news.google.com/rss/search?q=Male+Maldives+defence&hl=en-US&gl=US&ceid=US:en", "source": "Google News: MNDF"},
    {"url": "https://news.google.com/rss/search?q=Maldives+Coast+Guard&hl=en-US&gl=US&ceid=US:en", "source": "Google News: Coast Guard"},
    {"url": "https://news.google.com/rss/search?q=Maldives+airport&hl=en-US&gl=US&ceid=US:en", "source": "Google News: airports and the Air Corps"},
    {"url": "https://news.google.com/rss/search?q=Maldives+port&hl=en-US&gl=US&ceid=US:en", "source": "Google News: ports"},
    {"url": "https://news.google.com/rss/search?q=Maldives+cable&hl=en-US&gl=US&ceid=US:en", "source": "Google News: subsea cable"},
    {"url": "https://news.google.com/rss/search?q=Maldives+cyber&hl=en-US&gl=US&ceid=US:en", "source": "Google News: cyber"},
    {"url": "https://news.google.com/rss/search?q=Maldives+debt+China&hl=en-US&gl=US&ceid=US:en", "source": "Google News: debt and Chinese loans"},
    {"url": "https://news.google.com/rss/search?q=Maldives+drones&hl=en-US&gl=US&ceid=US:en", "source": "Google News: drones"},
    {"url": "https://news.google.com/rss/search?q=Maldives+research+ship&hl=en-US&gl=US&ceid=US:en", "source": "Google News: research vessels"},
    {"url": "https://news.google.com/rss/search?q=Maldives+energy&hl=en-US&gl=US&ceid=US:en", "source": "Google News: energy"},
    {"url": "https://news.google.com/rss/search?q=Maldives+EEZ&hl=en-US&gl=US&ceid=US:en", "source": "Google News: maritime zone"},
]

WORLD_WIDE_SOURCES = ('USNI News (naval, fleet tracking)', 'USNI Blog (naval analysis)', 'Breaking Defense', 'SpaceNews', 'Space.com', 'The Record (cyber)', 'Al Jazeera')
REGION_TERMS = ["maldives", "maldivian", "malé", "male'", "hulhumalé", "hulhumale", "addu", "maafaru", "thilafushi", "velana", "hulhule", "hulhulé", "funadhoo", "makunudhoo", "kulhudhuffushi", "fuvahmulah", "kadhdhoo", "eydhafushi", "dhiraagu", "mndf", "coast guard", "ncsa", "maldives ports", "muizzu", "sinamalé", "sinamale", "xiang yang hong", "exclusive economic zone", "mwsc", "gan international", "tb2"]


def configured() -> bool:
    return True


def _looks_english(text: str) -> bool:
    if not text:
        return False
    latin = sum(1 for c in text if c.isascii() and c.isalpha())
    letters = sum(1 for c in text if c.isalpha())
    if letters == 0:
        return True
    return (latin / letters) > 0.6


def _relevant(title: str, source: str) -> bool:
    if not source.startswith(WORLD_WIDE_SOURCES):
        return True
    t = title.lower()
    return any(re.search(r'\b' + re.escape(term) + r'\b', t) for term in REGION_TERMS)


def fetch(per_feed_limit: int = 15) -> ConnectorResult:
    from .. import safe_http
    import feedparser
    all_items, errors, ok_feeds = [], [], 0
    for feed in FEEDS:
        try:
            r = safe_http.safe_get(feed["url"])
            if r.status_code != 200:
                errors.append(f"{feed['source']}: HTTP {r.status_code}")
                continue
            parsed = feedparser.parse(r.content)
            if parsed.bozo and not parsed.entries:
                errors.append(f"{feed['source']}: not a readable feed")
                continue
            ok_feeds += 1
            count = 0
            for entry in parsed.entries:
                title = getattr(entry, "title", "").strip()
                if not title or not _looks_english(title) or not _relevant(title, feed["source"]):
                    continue
                all_items.append(Item(
                    category=classify(title), label=title[:90] if len(title) > 90 else title,
                    text=title, source=feed["source"],
                    date=getattr(entry, "published", "") or getattr(entry, "updated", ""),
                    url=getattr(entry, "link", None), connector=NAME,
                ).to_dict())
                count += 1
                if count >= per_feed_limit:
                    break
        except safe_http.FetchError as e:
            errors.append(f"{feed['source']}: blocked ({e})")
        except Exception as e:
            errors.append(f"{feed['source']}: {type(e).__name__}")
    if not all_items and errors:
        return ConnectorResult(NAME, True, False, "; ".join(errors)[:300])
    msg = f"{len(all_items)} items from {ok_feeds} of {len(FEEDS)} feeds"
    if errors:
        msg += f" ({len(errors)} failed: {'; '.join(errors)[:200]})"
    return ConnectorResult(NAME, True, True, msg, all_items)
