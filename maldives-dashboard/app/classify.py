"""Routes every headline into one of the China v6 dashboard's 15 headings, applied to the Maldives and the seas around it.
Order matters: the most specific headings come first; geopolitics is the default. Short words match whole words only.

India filter: any story that names India, Indian forces or the Indian-funded projects is dropped before it is shown
(is_excluded). The Indian Ocean stays in: it is a sea name, not a deployment."""
import re

HEADINGS = ["geo", "milops", "arms", "naval", "scs", "air", "space", "tech", "cyber", "darkweb",
            "econ", "mss", "social", "wellbeing", "hazard"]

RULES = [
    ("darkweb", ["dark web", "darknet", "onion", "ransomware", "leak site", "infostealer", "stealer", "data breach",
                 "data leak", "threat intel", "threat intelligence", "initial access broker"]),
    ("cyber", ["cyber", "hacker", "hacked", "hacking", "malware", "vulnerabilit", "intrusion", "phishing", "ddos", "zero-day",
               "cyberattack", "cert", "csirt", "ncsa", "signals corps", "wiper"]),
    ("hazard", ["earthquake", "tremor", "flood", "floods", "cyclone", "tsunami", "landslide", "drought", "heatwave", "heat wave",
                "monsoon", "storm", "tropical storm", "wildfire", "lightning", "sea level", "sea-level", "erosion", "king tide"]),
    ("mss", ["espionage", "spy", "spying", "arrested", "crackdown", "smuggling", "drug trafficking", "organised crime",
             "money laundering", "police raid", "sabotage", "gang"]),
    ("geo", ["courtesy call", "attaché", "attache", "defence diplomacy", "state visit", "official visit"]),
    ("milops", ["army", "troops", "soldiers", "soldier", "garrison", "division", "security forces", "military operation", "clashes",
                "insurgent", "shelling", "deploy", "deployment"]),
    ("naval", ["navy", "naval", "submarine", "submarines", "warship", "frigate", "corvette", "fleet", "dockyard", "coast guard",
               "patrol boat", "pirate", "pirates", "piracy", "naval base", "sea trial"]),
    ("scs", ["research vessel", "research ship", "tracking ship", "port call", "moratorium", "strait", "straits", "shipping", "tanker",
             "vessel", "undersea cable", "subsea cable", "cable cut", "cable fault", "sea-me-we", "berth", "berthed", "container terminal",
             "seaport", "harbour", "harbor", "port authority", "sea lane", "sea lanes", "exclusive economic zone", "eez", "channel",
             "congestion", "blockade", "chokepoint"]),
    ("air", ["air force", "air corps", "airbase", "air base", "air-defence", "air defence", "air defense", "fighter", "helicopter",
             "airport", "aircraft", "airspace", "air surveillance", "drone", "drones", "uav", "tb2", "bayraktar", "gan", "maafaru",
             "velana", "hulhule", "hulhulé", "hangar"]),
    ("arms", ["nuclear", "reactor", "uranium", "radioactive", "missile", "ballistic", "weapon", "weapons", "ammunition", "arms deal",
              "arms sale", "warhead", "munitions"]),
    ("space", ["satellite", "space", "rocket", "launch", "orbit", "spacecraft"]),
    ("tech", [" ai ", "artificial intelligence", "semiconductor", "quantum", "digital", "technology", "export control"]),
    ("social", ["protest", "protests", "protesters", "strike", "strikes", "union", "unions", "human rights", "refugee", "refugees",
                "displaced", "civilians", "casualties", "students", "migrants", "opposition"]),
    ("econ", ["lease", "investment", "invest", "loan", "loans", "debt", "fuel", "oil", "refinery", "lng", "pipeline", "energy",
              "electricity", "power station", "power plant", "exports", "imports", "economy", "economic", "budget", "inflation", "imf",
              "tariff", "tender", "container", "tourism", "water", "desalination", "waste-to-energy", "free trade", "trade agreement", "fta"]),
    ("geo", ["agreement", "treaty", "pact", "talks", "summit", "diplomat", "diplomacy", "visit", "ceasefire", "bilateral",
             "cooperation", "partnership", "sovereignty", "policy", "aid"]),
    ("wellbeing", ["happiness", "wellbeing", "well-being", "life expectancy", "human development index"]),
]

_SHORT = {"army", "navy", "cert", "csirt", "ncsa", "oil", "lng", "imf", "fuel", "ai", "spy", "uav", "tb2", "strike", "strikes", "lease",
          "debt", "tender", "union", "unions", "visit", "launch", "orbit", "policy", "container", "gan", "gang", "aid", "fta", "eez"}

_EXCLUDE = re.compile(r"\bindia\b|\bindian\b(?!\s+ocean)|\bnew delhi\b|\bdelhi\b|\blakshadweep\b|\bminicoy\b|\bhanimaadhoo\b|"
                      r"\butf\b|\bgreater male connectivity\b|\bthilam[eé]\b", re.I)


def is_excluded(text: str) -> bool:
    """True when a story names India, Indian forces or an Indian-funded project. Such stories are not shown."""
    return bool(_EXCLUDE.search(text or ""))


def _has(text: str, word: str) -> bool:
    if " " in word or "-" in word or "'" in word or "." in word or "/" in word or "é" in word:
        return word in text
    if word in _SHORT or (len(word) <= 4 and word.isalpha()):
        return re.search(r"\b" + re.escape(word) + r"\b", text) is not None
    return word in text


def classify(text: str) -> str:
    t = " " + (text or "").lower() + " "
    for heading, words in RULES:
        if any(_has(t, w) for w in words):
            return heading
    return "geo"
