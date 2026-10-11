# MALDIVES DASHBOARD - v1

Covers the Maldives archipelago and the seas within 100 km of it (about 71.8 to 74.7 degrees east and 1.6 degrees south to 8.0 degrees north).
It uses the China Dashboard v6 architecture: Flask with waitress, a supervisor with automatic restart, AES-256-GCM key storage, the same 15
headings, layer toggles, live connectors and automated tests.

**The India rule.** Nothing about India is plotted or described. The frame does not reach Indian territory, so no Indian outline is drawn.
Every news item that names India, Indian forces or an Indian-funded project is dropped at the collection point before it is shown
(`app/scheduler.py` with `app/classify.py`). Stories about the Indian Ocean stay, because it is a sea name.

## Start

Windows: double-click `start.bat`. The dashboard runs at **http://127.0.0.1:8840/**. The first pass of the news connectors takes a few minutes,
because GDELT is paced at six seconds per query.

## What is plotted

26 fixed points and 17 civil airfields, with 9 town labels and 2 sea labels. Each tooltip gives its source and
whether it is verified in this build; 19 points are marked approximate, unverified or planned.

- **Capitals and island towns (7):** Malé, Hulhumalé, Hithadhoo (Addu City), Eydhafushi (Baa), Kulhudhuffushi (Haa Dhaalu), Fuvahmulah and Kadhdhoo (Laamu).
- **MNDF headquarters (3):** the Defence Force headquarters at Bandaarakoshi, Malé; the regional headquarters at Gan (S. Gan, Addu) and Kadhdhoo (L. Kadhdhoo, Laamu).
- **Coast Guard (1):** the strategic reserve at Malé. The Maldives has no navy; the Coast Guard is the armed maritime force, with four squadrons whose positions are not published.
- **Air Corps and air stations (3):** Gan (former RAF Gan, handed over in 1976; helicopter base); Maafaru (Bayraktar TB2 drone base and command centre, launched 15 March 2024); and a planned air base and hangar at Funadhoo, Shaviyani (2024 announcement; not verified).
- **Chinese-linked facilities and visits (4):** the Velana airport expansion by a Chinese contractor (a 3,400 m runway opened in 2018, with a fuel farm and cargo terminal); the Sinamalé Bridge (opened 2018 at about US$210m, funded by a Chinese grant and loan); the research vessel Xiang Yang Hong 03 at Thilafushi (February 2024; the government said it would do no research in Maldivian waters); and the 2017 Makunudhoo ocean-observation plan (reported scrapped; not verified).
- **Energy, fuel, water and cables (4):** the SEA-ME-WE 6 landing at Hulhumalé Phase II (Dhiraagu; 1 August 2024); the Malé-region water system (desalination and storage); the K. Funadhoo fuel storage, whose relocation was announced in 2023 and is not verified; and the Thilafushi waste-to-energy plant (13 MW, planned).
- **Ports (2):** Malé Commercial Harbour, run by Maldives Ports Limited, and the Thilafushi commercial port that is taking over its operations.
- **Cyber (1):** the National Cyber Security Agency, which runs the national CSIRT (CERT). Its office position is approximate.
- **Chokepoints (1):** the Eight Degree Channel, a sea passage at the northern edge of the archipelago (general navigation; not verified).
- **Civil airfields (17):** the large and medium airports and the domestic airfields from the OurAirports dataset, including Velana (VRMM), Gan (VRMG), Maafaru (VRDA), Kadhdhoo (VRMK) and Kulhudhuffushi (VRBK). Seaplane bases are excluded as non-strategic, and one civil airfield is excluded under the India rule.

**Not plotted, and why.** The sources reviewed show no nuclear power plant, no nuclear storage site, no nuclear plan, no missile base, no
space-launch site and no submarine base. The only Chinese naval-related visits found were the 2024 research-vessel port calls. No radar installation
position was verified for the Maldives, so none is plotted. The Velana air-traffic radar, the MNDF's coastal surveillance and the Coast Guard's
squadron positions are gaps.

## The 15 headings

Geopolitical & Diplomatic - Military Operations & Force Posture - Strategic Arms & Nuclear Program - Naval & Maritime Security - Maritime
Chokepoints & Sea Lanes - Air Force & Aviation - Space Tech & Aerospace - Critical Tech & AI Governance - Cyber Espionage & APTs - Darkweb &
Threat Intel - Economic & Trade - Internal Security & Intelligence Operations - Social Pulse & Public Sentiment - Happiness & Wellbeing Indices
- Natural Hazards & Environmental Risks.

Routing is rule-based (`app/classify.py`). A research vessel's visit goes to the maritime heading; a cable landing to maritime; a drone base to the
Air Corps heading; a debt or aid story to the economy; a diplomatic call to geopolitics. Every reference item lands in one of these panels, and a
test enforces it.

## The map

- **Projection:** Lambert azimuthal equal-area, centred on the archipelago (about 73.2 degrees east, 3.2 degrees north). Canvas 1200 by 3954 pixels, so the map is tall: the chain runs north to south. Scroll the map to follow it.
- **Shaded:** the Maldives. Nothing outside the archipelago is drawn.
- **Outlines:** Natural Earth 10 m boundaries, which show the atolls and their islands.

## Reference items (30)

Each item is dated and sourced: the Sinamalé Bridge and the Velana expansion; the free-trade agreement and the Chinese debt; the 2024 visit to China;
the research-vessel calls; the Makunudhoo plan; the MNDF headquarters and its leadership; the Coast Guard and the regional headquarters; the Air Corps and
its drones; the Gan air station and the planned hangars; the economic zone; the port relocation; the Funadhoo fuel storage; the energy mix; the
waste-to-energy plant; the water supply; the cable landing; the national cyber agency and the 2025 index; the absence of nuclear, missile, space and submarine
sites in the sources; the Eight Degree Channel; the wellbeing report; and the ransomware claims.

## News, social and dark-web sources

- **Verified global feeds (7):** USNI News and the USNI Blog, Breaking Defense, SpaceNews, Space.com, The Record and Al Jazeera.
- **Google News search feeds (12):** Chinese projects, the MNDF, the Coast Guard, airports, ports, subsea cables, cyber, debt, drones, research vessels, energy and the maritime zone.
- **GDELT:** 30 English-language queries on the defence forces, the airports, the ports, the cables, the energy, the debt, the drones and the Chinese-linked projects.
- **USGS earthquakes:** events inside the frame.
- **Ransomware.live:** claims filtered to the Maldives' country code. Group claims are labelled unverified.
- **X (Twitter):** official API v2 recent search, 10 queries. Set `X_BEARER_TOKEN`; recent search needs a paid tier.
- **Facebook, Instagram and Telegram:** no default sources. Each list is empty until you add accounts or channels you have verified. Facebook needs your own Page access token.
- **Dark web (Tor):** none configured. Add onion sources only after you verify them on the outlet's own site.

## Tests

39 Python tests (`python -m pytest tests/`), including a test that fails the build if any reference item would be hidden from every panel and a
test for the India filter, and three browser suites (`npm test`), which load the shipped page into a real DOM. The outline and point alignment was
checked by rendering the map.

## Security

- Keys and tokens are encrypted with AES-256-GCM and never appear in error messages.
- The server listens on 127.0.0.1 only.
- Strict Content-Security-Policy: no third-party scripts, fonts or trackers.
- Headlines and labels are escaped before display; only http and https links become clickable.
- A requested proxy (`PROXY_URL`) is honoured, and no traffic is sent through an undeclared route.

A dashboard cannot secure your whole PC or phone, and it cannot hide your IP address from the sites it fetches from unless you route traffic
through a VPN, which can still see your traffic.

## Honest limitations

- **Most positions are approximate.** Bases and facilities sit at their island or area centre; open sources do not publish their perimeters. Each tooltip says so.
- **Some points are not verified in this build,** and they are flagged in their tooltips and listed under the gaps above.
- **Reported events and claims are attributed.** Financing and debt figures come from the sources named in each note and are not re-audited.
- **The India rule is enforced in code,** but it cannot catch a story that never names India. Treat the feeds as you would any open source.
- **Events change daily.** The sources reflect reports up to 10 October 2026. Check them before you rely on any event.
- **No live news was fetched in the build sandbox,** which has no internet access. The status panel on your machine shows the real results.
- **The map is not a targeting product.** It maps publicly reported locations and events for analysis.
- **Single-user and local.** It runs on your machine while it is open.
