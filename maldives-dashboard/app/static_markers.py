"""
Fixed reference points for the MALDIVES dashboard: the archipelago and the seas within 100 km of it.
Only the Maldives is shaded; no neighbouring state is plotted, and nothing about any neighbouring state's deployment is described.

Each point carries its status, date and source in `note` and `source`. Points marked "not verified in this build" come from public
knowledge or announcements that this build's searches did not confirm; they are shown, but treat them as unconfirmed. Positions are
from airport records or the Natural Earth place record where stated; all others are approximate. Reported events are claims; the
notes say so. The Maldives has no nuclear power plant, no nuclear storage site, no missile base, no space-launch site and no
submarine base in the sources reviewed; none is plotted. Nothing here is a targeting product.
"""


def M(id, name, lat, lon, cat, note, source, aliases=()):
    al = list(aliases) or [name.split(":")[0].split(" (")[0].strip().lower()]
    return {"id": id, "name": name, "lat": lat, "lon": lon, "cat": cat, "note": note, "source": source, "aliases": al}


MARKERS = [
    # ---------- Capitals and principal towns ----------
    M("male", "Malé (capital): MNDF headquarters, Malé Commercial Harbour, Coast Guard strategic reserve", 4.1720, 73.5089, "capital",
      "Capital and seat of government. The MNDF headquarters, the Ministry of Defence and National Service, the Coast Guard's strategic reserve and Malé Commercial Harbour are here (MNDF; Wikipedia, 2026). Position from the Natural Earth place record.",
      "Natural Earth populated places; mndf.gov.mv; Wikipedia (Ministry of Defence and National Service, Apr 2026)",
      aliases=("male", "malé", "male'")),
    M("hulhumale", "Hulhumalé (reclaimed city): SEA-ME-WE 6 cable landing (Phase II)", 4.2110, 73.5385, "capital",
      "Reclaimed city next to Malé. The SEA-ME-WE 6 landing point is at Hulhumalé Phase II (Dhiraagu, 2024). Chinese engagement in the Phase II housing project is reported (NUS ISAS). Position approximate.",
      "Dhiraagu press release (Aug 2024); NUS ISAS (reported)", aliases=("hulhumale", "hulhumalé")),
    M("addu", "Hithadhoo (Addu City administrative centre), Addu Atoll", -0.6000, 73.0833, "capital",
      "Administrative centre of Addu City in the south. Gan, the southern air station, is on the same atoll. Position approximate.",
      "Public reference; position approximate", aliases=("addu", "hithadhoo", "addu city")),
    M("eydhafushi", "Eydhafushi (Baa Atoll administrative centre)", 5.1044, 73.0764, "capital",
      "Administrative centre of Baa Atoll (public reference). Position approximate.", "Public reference; position approximate",
      aliases=("eydhafushi", "baa atoll")),
    M("kulhudhuffushi", "Kulhudhuffushi (Haa Dhaalu administrative centre; small domestic airport VRBK)", 6.6308, 73.0678, "capital",
      "Administrative centre of Haa Dhaalu Atoll. Its airport (VRBK) is a small domestic airfield (OurAirports). Position from the airport record.",
      "OurAirports (CC0); public reference", aliases=("kulhudhuffushi", "haa dhaalu")),
    M("fuvahmulah", "Fuvahmulah (Gnaviyani Atoll island; airport VRMF)", -0.3097, 73.4350, "capital",
      "Island of Gnaviyani Atoll in the south. Its airport (VRMF) is a small domestic airfield. Position from the airport record.",
      "OurAirports (CC0); public reference", aliases=("fuvahmulah", "gnaviyani")),
    M("kadhdhoo", "Kadhdhoo (Laamu Atoll; airport VRMK; MNDF regional headquarters)", 1.8592, 73.5219, "capital",
      "Laamu Atoll centre. The MNDF regional headquarters for Laamu (L. Kadhdhoo) is here (Wikipedia, 2026). Position from the airport record.",
      "OurAirports (CC0); Wikipedia (Ahmed Mohamed (general), 2026)", aliases=("kadhdhoo", "kahdoo", "laamu")),

    # ---------- MNDF headquarters, regional commands and Coast Guard ----------
    M("mndf_hq", "MNDF Headquarters (Bandaarakoshi, Ameer Ahmed Magu, Malé): Defence Force headquarters", 4.1745, 73.5065, "cantonment",
      "The Maldives National Defence Force's headquarters, with the Joint Operations Centre under the Integrated Headquarters. The Ministry of Defence and National Service shares the complex (mndf.gov.mv; Wikipedia, 2026). Position approximate.",
      "mndf.gov.mv; Wikipedia (Ministry of Defence and National Service, Apr 2026)",
      aliases=("mndf headquarters", "bandaarakoshi", "bandaaraa koshi", "mndf hq", "defence force headquarters")),
    M("gan_rhq", "MNDF Regional Headquarters S. Gan (Addu Atoll, at Gan)", -0.6945, 73.1490, "cantonment",
      "Regional headquarters for the south, at Gan in Addu Atoll (Wikipedia, Ahmed Mohamed (general), 2026). Coast Guard patrol boats are stationed at regional headquarters. Position approximate.",
      "Wikipedia (Ahmed Mohamed (general), 2026); military-history list (Regional Headquarters)", aliases=("s. gan", "gan regional headquarters", "regional headquarters gan")),
    M("kadhdhoo_rhq", "MNDF Regional Headquarters L. Kadhdhoo (Laamu Atoll)", 1.8560, 73.5180, "cantonment",
      "Regional headquarters for Laamu Atoll (Wikipedia, Ahmed Mohamed (general), 2026; military-history list 'Regional Headquarters, Kahdoo, Laamu Atoll'). Position approximate.",
      "Wikipedia (Ahmed Mohamed (general), 2026); military-history list", aliases=("l. kadhdhoo", "kahdoo regional")),
    M("cg_reserve", "MNDF Coast Guard strategic reserve (Malé)", 4.1765, 73.5150, "navy_base",
      "The Coast Guard is the armed maritime force (the Maldives has no navy). Four squadrons cover the southern, central and northern regions; their positions are not published in the sources reviewed, so they are not plotted. The strategic reserve is at Malé (Wikipedia, MNDF Coast Guard, 2026). Position approximate.",
      "Wikipedia (MNDF Coast Guard, 2026)", aliases=("coast guard", "strategic reserve", "mndf coast guard")),

    # ---------- MNDF Air Corps and air stations ----------
    M("gan_air", "Gan International Airport (former RAF Gan, Addu Atoll): MNDF Air Corps helicopter base", -0.692975, 73.152627, "air_base",
      "Built by the Royal Navy and used as RAF Gan. The RAF left in 1976 and the government took over the site. The MNDF Air Corps' first helicopter was based here in 2010 (migflug, 2026). Position from the airport record (VRMG).",
      "migflug (2026); Wikipedia (Gan International Airport)", aliases=("gan", "gan international airport", "vrmg", "rafgan", "raf gan")),
    M("maafaru_air", "Maafaru (Noonu Atoll): MNDF Air Corps drone base, Bayraktar TB2 hangar and command centre", 5.817407, 73.468404, "air_base",
      "The Air Corps was launched here on 15 March 2024. Bayraktar TB2 drones from Turkey operate from the MNDF hangar; the command centre is here (Atoll Times, Mar 2024; migflug, 2026). The airport opened on 1 December 2019. Drone counts differ between sources: three were displayed in 2024, and Wikipedia lists six (not corroborated). Position from the airport record (VRDA).",
      "Atoll Times (16 Mar 2024); The Maldives Finest (2024); migflug (2026)", aliases=("maafaru", "noonu", "tb2", "drone base", "maafaru airport")),
    M("funadhoo_air", "PLANNED MNDF air base and hangar: Funadhoo (Shaviyani Atoll), not verified", 6.1624, 73.2875, "air_base",
      "The government announced in 2024 that hangars would be built at Gan and at Funadhoo (Shaviyani), funded from the defence budget (Edition.mv, 2024). Not verified as built in this build. Position from the airport record (FND), which is the island's airfield.",
      "Edition.mv (2024); not verified in this build", aliases=("funadhoo airport", "shaviyani", "funadhoo (shaviyani)")),

    # ---------- Chinese-linked facilities and visits ----------
    M("velana_cn", "Velana International Airport (Hulhulé): expansion by a Chinese contractor; new runway opened 2018", 4.19183, 73.529099, "foreign_base",
      "The main international airport, on Hulhulé next to Malé. Beijing Urban Construction Group signed the 2014 expansion; a 3,400 m runway opened in 2018, with a new fuel farm and cargo terminal (CSIS AMTI, 2018). The airport itself is civil. Position from the airport record (VRMM).",
      "CSIS AMTI (2018): Chinese Investment in the Maldives", aliases=("velana", "hulhule", "hulhulé", "ibrahim nasir", "male airport", "malé airport")),
    M("sinamale_bridge", "Sinamalé (China–Maldives Friendship) Bridge, Malé to Hulhulé: Chinese-financed, opened 2018", 4.1837, 73.5193, "foreign_base",
      "A 2 km cross-sea bridge opened in 2018 at about US$210m, financed by a Chinese government grant and an Exim Bank concessional loan, and built by a Chinese state contractor (sources name the subsidiary differently). The loan was restructured under the G20 debt-service suspension in 2020 (AidData; Wikipedia, May 2026). Position approximate (midpoint).",
      "AidData (China's financing record); Wikipedia (Sinamalé Bridge, May 2026)", aliases=("sinamale", "sinamalé", "friendship bridge", "china-maldives friendship bridge")),
    M("xyh3_thilafushi", "Chinese research vessel Xiang Yang Hong 03: port call at Thilafushi (23 February 2024)", 4.1700, 73.4410, "foreign_base",
      "Permitted in January 2024 for a port call for personnel rotation and replenishment. The ship docked at Malé and at Thilafushi on 23 February 2024. The government said it would do no research in Maldivian waters (Reuters via Malay Mail, 22 Feb 2024; SCMP, 2024). Position approximate.",
      "Reuters via Malay Mail (22 Feb 2024); SCMP (2024)", aliases=("xiang yang hong", "xiang yang hong 03", "xiang yang hong 3")),
    M("makunudhoo", "Makunudhoo (Haa Dhaalu): planned Chinese–Maldivian Joint Ocean Observation Station (2017; reported scrapped; not verified)", 6.4500, 72.7000, "foreign_base",
      "A 2017 protocol between China's State Oceanic Administration and the Maldives' environment ministry planned a joint ocean observation station on Makunudhoo, the westernmost inhabited island. Reports say it was scrapped (Wikipedia gives 2019). Not verified as built or dropped in this build. Position approximate.",
      "Wikipedia (Joint Ocean Observation Station; Makunudhoo); not verified in this build", aliases=("makunudhoo", "joint ocean observation station", "ocean observation station")),

    # ---------- Energy, fuel, water and cables ----------
    M("sea_me_we6", "SEA-ME-WE 6 cable landing at Hulhumalé Phase II (Dhiraagu; inaugurated 1 August 2024)", 4.2140, 73.5420, "pipeline",
      "The cable is 19,200 km long with at least 100 Tbps capacity; Dhiraagu is the first Maldivian co-owner of a global consortium of 16 partners. Full service was expected in early 2026; the go-live is not verified in this build (Dhiraagu, Aug 2024; Submarine Networks, Aug 2024). Position approximate.",
      "Dhiraagu press release (Aug 2024); Submarine Networks (Aug 2024)", aliases=("sea-me-we 6", "seamewe 6", "smw6", "dhiraagu cable")),
    M("mwsc_water", "Greater Malé water supply: desalination and storage (MWSC)", 4.1790, 73.5110, "pipeline",
      "Greater Malé produces about 49,900 tonnes of water a day and holds about 50,445 tonnes in storage; a 10,000-tonne tank was added at Hulhumalé (The Standard Maldives, 2026). Position approximate.",
      "The Standard Maldives (2026)", aliases=("mwsc", "water supply", "desalination", "malé water", "male water")),
    M("funadhoo_fuel", "K. Funadhoo (Kaafu Atoll) fuel storage: relocation to Maagiri Falhu planned (2023; status not verified)", 4.2650, 73.5110, "pipeline",
      "The government announced in 2023 that the fuel storage at K. Funadhoo (Kaafu) would move to Maagiri Falhu, near Thilafushi (Edition.mv, 2023). The 2026 status is not verified in this build. Position approximate; the island's exact coordinates were not in the sources reviewed.",
      "Edition.mv (2023); not verified in this build", aliases=("k. funadhoo", "kaafu funadhoo", "funadhoo fuel", "fuel storage funadhoo", "maagiri falhu")),
    M("thilafushi_wte", "Thilafushi waste-to-energy: 13 MW biopower (planned; permitting stage)", 4.1720, 73.4440, "pipeline",
      "A 13 MW waste-to-energy plant on the Thilafushi landfill and industrial island was at the permitting stage; construction was expected in 2026 and operation in 2027 (GlobalData profile, via power-technology). Not verified as built. Position approximate.",
      "power-technology (GlobalData profile)", aliases=("waste-to-energy", "thilafushi power", "thilafushi waste")),

    # ---------- Ports ----------
    M("male_port", "Malé Commercial Harbour (Maldives Ports Limited): the sole port authority", 4.1760, 73.5135, "seaport",
      "Maldives Ports Limited is the state port authority and runs Malé Commercial Harbour (Wikipedia). Its commercial operations are being relocated to Thilafushi (below). Position approximate.",
      "Wikipedia (Maldives Ports Limited)", aliases=("malé commercial harbour", "male commercial harbour", "malé port", "male port", "maldives ports")),
    M("thilafushi_port", "Thilafushi commercial port (relocation of Malé port operations; about 60 ha; under construction)", 4.1690, 73.4400, "seaport",
      "Maldives Ports Limited is relocating Malé's commercial port operations to Thilafushi, on about 60 ha; the quay-wall work was targeted for July 2026 (Ministry of Economic Development, Transport and Trade, Aug 2026). Debt-financed; the source does not name the lender. Position approximate.",
      "Ministry of Economic Development, Transport and Trade (Aug 2026); Maldives Business Review (phase 1)",
      aliases=("thilafushi port", "thilafushi commercial port", "international logistics terminal")),

    # ---------- Cyber ----------
    M("ncsa", "National Cyber Security Agency (NCSA): national CSIRT and CERT", 4.1765, 73.5100, "cyber_hub",
      "Operates the national CSIRT (CERT) and coordinates incident response; CEO Dr Ahmed Naufal Abdul Hady (World Bank mission, Sep 2024). The office address is not published in the sources reviewed; the position is approximate (Malé). The 2025 NCSI scores incident-response capacity 0 of 14.",
      "NCSA (hub.ncsa.gov.mv); World Bank DMADD mission (Sep 2024); eGA NCSI (2025)", aliases=("ncsa", "national cyber security agency", "csirt maldives")),

    # ---------- Chokepoints and sea lanes ----------
    M("eight_degree", "Eight Degree Channel: sea passage at the northern edge of the archipelago (general navigation; not verified)", 7.9000, 73.2500, "chokepoint",
      "A sea passage named for its latitude at the northern edge of the Maldives. General navigation reference; not verified in this build. Position approximate.",
      "Public information (not verified in this build)", aliases=("eight degree channel", "8 degree channel")),
]
