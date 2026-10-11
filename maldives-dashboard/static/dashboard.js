
(function(){
  "use strict";

  const PROJ = {"type": "laea", "lam0": 1.2779127035575446, "phi0": 0.056013488729430995, "sinp0": 0.0559842028352932, "cosp0": 0.9984316546629002, "n": 0, "F": 0, "rho0": 0, "scale": 23467.714151038846, "translate": [600.0, 1976.8623014742313], "width": 1200, "height": 3954};
  const HEADING_KEYS = ["geo", "milops", "arms", "naval", "scs", "air", "space", "tech", "cyber", "econ", "mss", "social", "wellbeing", "hazard"];
  const SEED_DATA = {"updated_at": "offline-snapshot", "items_by_category": {"econ": [{"category": "econ", "label": "Sinamalé Bridge: a Chinese-financed cross-sea bridge, opened 2018 at about US$210m", "text": "The China–Maldives Friendship Bridge, now the Sinamalé Bridge, links Malé with Hulhulé, the airport island. It is 2,000 m long and opened in 2018. A Chinese government grant and a China Eximbank concessional loan financed about US$210m of the cost, and a Chinese state contractor built it. The loan was restructured under the G20 debt-service suspension in 2020.", "source": "AidData (China's financing record); Wikipedia (Sinamalé Bridge, May 2026); CSIS AMTI (2018)", "date": "2018", "url": null, "connector": "reference"}, {"category": "econ", "label": "Velana airport expansion: a Chinese contractor; 3,400 m runway, fuel farm and cargo terminal (2018)", "text": "A Beijing-based contractor, Beijing Urban Construction Group, signed the 2014 deal to expand Velana International Airport. A new 3,400 m runway opened in 2018, with a new fuel farm and a cargo terminal. The analysts at CSIS's AMTI count it among China's largest and most visible projects in the Maldives.", "source": "CSIS AMTI (2018): Chinese Investment in the Maldives", "date": "2014-2018", "url": null, "connector": "reference"}, {"category": "econ", "label": "China–Maldives free-trade agreement in force from 1 January 2025 (the Maldives' first FTA)", "text": "The China–Maldives free-trade agreement, the Maldives' first free-trade agreement, took effect on 1 January 2025.", "source": "Wikipedia (China–Maldives relations, 2026)", "date": "Jan 2025", "url": null, "connector": "reference"}, {"category": "econ", "label": "Chinese debt: about US$1.3bn owed to China in 2024; the exact figure is disputed", "text": "As of 2024 the Maldives owed about US$1.3bn to China, the largest share of its external debt. Maldivian officials have said they struggle to establish the exact amount, and they have sought to renegotiate interest rates and repayment plans.", "source": "Wikipedia (China–Maldives relations, 2026); Maldivian officials as reported (2024)", "date": "2024", "url": null, "connector": "reference"}, {"category": "econ", "label": "K. Funadhoo fuel storage: relocation to Maagiri Falhu announced in 2023; status not verified", "text": "The government announced in 2023 that the fuel storage at K. Funadhoo in Kaafu Atoll would be relocated to Maagiri Falhu, near Thilafushi. The move was announced at the Velana expansion inauguration. Its 2026 status is not verified in this build.", "source": "Edition.mv (2023)", "date": "2023", "url": null, "connector": "reference"}, {"category": "econ", "label": "Energy: about 600 MW of capacity, 68.5 MW of it solar; the inhabited islands run mostly on diesel", "text": "In the 2024 energy roadmap, the Maldives had about 600 MW of total generation capacity, of which 68.5 MW was solar PV; solar produced about 6% of electricity. The inhabited islands had about 208 MW at the end of 2023, of which 181 MW was diesel.", "source": "Energy Roadmap 2024–2033, Ministry of Environment (Nov 2024)", "date": "Nov 2024", "url": null, "connector": "reference"}, {"category": "econ", "label": "Thilafushi waste-to-energy: 13 MW planned, at the permitting stage; construction 2026, operation 2027", "text": "A 13 MW waste-to-energy plant planned at Thilafushi was at the permitting stage. Construction was expected in 2026 and commercial operation in 2027. The plant is not verified as built.", "source": "power-technology (GlobalData profile)", "date": "2024", "url": null, "connector": "reference"}, {"category": "econ", "label": "Malé-region water supply: about 49,900 tonnes a day; storage about 50,445 tonnes", "text": "The Malé-region water system produces about 49,900 tonnes of water a day, with storage of about 50,445 tonnes after a new 10,000-tonne tank at Hulhumalé.", "source": "The Standard Maldives (2026)", "date": "2026", "url": null, "connector": "reference"}, {"category": "econ", "label": "Hulhumalé Phase II housing: Chinese engagement reported, not verified in this build", "text": "NUS ISAS reports that China was engaged in the Hulhumalé Phase II housing project, alongside the Velana expansion. The engagement is reported and is not verified in this build.", "source": "NUS ISAS (reported)", "date": "2026", "url": null, "connector": "reference"}], "geo": [{"category": "geo", "label": "President Muizzu's visit to China (January 2024): 20 agreements and about US$130m in aid", "text": "President Mohamed Muizzu visited China in January 2024. The visit produced 20 agreements and about US$130m in aid.", "source": "Vajiram & Ravi (2024)", "date": "Jan 2024", "url": null, "connector": "reference"}, {"category": "geo", "label": "Makunudhoo: a planned Chinese–Maldivian ocean observation station (2017; reported scrapped; not verified)", "text": "A 2017 protocol between China's State Oceanic Administration and the Maldives' environment ministry planned a Joint Ocean Observation Station on Makunudhoo, the westernmost inhabited island. Reports say the plan was scrapped; Wikipedia gives 2019. China's foreign ministry said its marine cooperation with the Maldives had no military purpose. The status is not verified in this build.", "source": "Wikipedia (Joint Ocean Observation Station; Makunudhoo)", "date": "2017-2019", "url": null, "connector": "reference"}], "scs": [{"category": "scs", "label": "Chinese research vessel Xiang Yang Hong 03: port calls at Malé and Thilafushi (February 2024)", "text": "The research vessel Xiang Yang Hong 03, owned by a research institute under China's natural resources ministry, was given permission in January 2024 for a port call for rotation of personnel and replenishment. It docked at Malé and then at Thilafushi on 23 February 2024. The government said the ship would not do research in Maldivian waters. Before arriving, the ship had spent weeks surveying waters just outside the exclusive economic zones of neighbouring states.", "source": "SCMP (2024); Reuters via Malay Mail (22 Feb 2024); Maldivian foreign ministry statement (Jan 2024)", "date": "Jan-Feb 2024", "url": null, "connector": "reference"}, {"category": "scs", "label": "Exclusive economic zone of about 900,000 km², the area the Coast Guard and the Air Corps monitor", "text": "The Maldives' exclusive economic zone covers about 900,000 km², which the Coast Guard and the Air Corps are tasked to monitor.", "source": "The Defense Post (2024)", "date": "2024", "url": null, "connector": "reference"}, {"category": "scs", "label": "Malé Commercial Harbour and its relocation to Thilafushi (quay-wall work targeted July 2026)", "text": "Maldives Ports Limited is the sole port authority and runs Malé Commercial Harbour. Under a government project, commercial port operations are being moved to Thilafushi, on about 60 ha, with the quay-wall work targeted to start in July 2026. The project is debt-financed; the source does not name the lender.", "source": "Ministry of Economic Development, Transport and Trade (Aug 2026); Wikipedia (Maldives Ports Limited)", "date": "Aug 2026", "url": null, "connector": "reference"}, {"category": "scs", "label": "SEA-ME-WE 6 cable landing at Hulhumalé Phase II (Dhiraagu; inaugurated 1 August 2024)", "text": "Dhiraagu inaugurated the SEA-ME-WE 6 cable landing at Hulhumalé Phase II on 1 August 2024. The 19,200 km cable has a minimum capacity of 100 Tbps. Dhiraagu is the first Maldivian co-owner in a consortium of 16 partners. Full service was expected in early 2026; the go-live is not verified in this build.", "source": "Dhiraagu press release (Aug 2024); Submarine Networks (Aug 2024)", "date": "Aug 2024", "url": null, "connector": "reference"}, {"category": "scs", "label": "Eight Degree Channel: sea passage at the northern edge of the archipelago (general navigation; not verified)", "text": "The Eight Degree Channel is a sea passage named for its latitude, at the northern edge of the archipelago. It is a general navigation reference, not verified in this build.", "source": "Public information (not verified in this build)", "date": "2026", "url": null, "connector": "reference"}], "milops": [{"category": "milops", "label": "MNDF headquarters at Bandaarakoshi, Malé; Chief of Defence Force Ibrahim Hilmy; Minister Hassan Rasheed (since 15 April 2026)", "text": "The Maldives National Defence Force has its headquarters at Bandaarakoshi, Ameer Ahmed Magu, Malé. The Chief of Defence Force is Major General Ibrahim Hilmy. The Minister of Defence and National Service, Hassan Rasheed, took office on 15 April 2026.", "source": "mndf.gov.mv; Wikipedia (Ministry of Defence and National Service, Apr 2026)", "date": "Apr 2026", "url": null, "connector": "reference"}, {"category": "milops", "label": "MNDF regional headquarters at Gan (Addu Atoll) and Kadhdhoo (Laamu Atoll)", "text": "MNDF regional headquarters are at Gan (S. Gan, Addu Atoll) and Kadhdhoo (L. Kadhdhoo, Laamu Atoll). Coast Guard patrol boats are stationed at the regional headquarters.", "source": "Wikipedia (Ahmed Mohamed (general), 2026); military-history list (MNDF)", "date": "2026", "url": null, "connector": "reference"}], "naval": [{"category": "naval", "label": "No navy: the MNDF Coast Guard is the armed maritime force; four squadrons and a strategic reserve at Malé", "text": "The Maldives has no navy. The MNDF Coast Guard, a separate wing since 1980, is the armed maritime force. It runs four squadrons in the southern, central and northern regions, with a strategic reserve at Malé. Its tasks include national defence and EEZ protection, and it has taken pirate ships in the EEZ, mostly from Somalia.", "source": "Wikipedia (MNDF Coast Guard, 2026)", "date": "2026", "url": null, "connector": "reference"}, {"category": "naval", "label": "No submarine base in the Maldives; the Chinese naval-related visits found were research-vessel calls (2024)", "text": "No submarine base is listed in the Maldives in the sources reviewed. The only Chinese naval-related visits found were the 2024 research-vessel port calls described above.", "source": "Sources reviewed for this build", "date": "2026", "url": null, "connector": "reference"}], "air": [{"category": "air", "label": "MNDF Air Corps launched 15 March 2024 at Maafaru; Bayraktar TB2 drones from Turkey; counts differ", "text": "President Mohamed Muizzu launched the MNDF Air Corps at Maafaru, Noonu Atoll, on 15 March 2024, with Bayraktar TB2 drones from Turkey for maritime surveillance. Three drones were displayed at the launch; Wikipedia lists six TB2s, which is not corroborated by a second source. The command centre is at Maafaru, whose airport opened on 1 December 2019.", "source": "Atoll Times (16 Mar 2024); The Maldives Finest (2024); migflug (2026)", "date": "Mar 2024", "url": null, "connector": "reference"}, {"category": "air", "label": "Planned hangars for the drones at Gan and Funadhoo (Shaviyani), announced 2024; not verified", "text": "In 2024 the government announced that hangars for the drones would be built at Gan and at Funadhoo in Shaviyani Atoll, funded from the defence budget. The status is not verified in this build.", "source": "Edition.mv (2024)", "date": "2024", "url": null, "connector": "reference"}, {"category": "air", "label": "Gan: former RAF Gan, handed over in 1976; now the Air Corps' helicopter base in the south", "text": "Gan, in Addu Atoll, was built by the Royal Navy and used as RAF Gan. The RAF left in 1976, and the government took the site over. It is now Gan International Airport and the Air Corps' helicopter base in the south.", "source": "migflug (2026); Wikipedia (Gan International Airport)", "date": "1976-2026", "url": null, "connector": "reference"}], "cyber": [{"category": "cyber", "label": "National Cyber Security Agency: the national CSIRT; newly formed in 2024; 0 of 14 on incident response (2025)", "text": "The National Cyber Security Agency operates the national CSIRT (CERT). A World Bank mission in September 2024 found the agency newly formed, with an incident-response centre still planned. The 2025 National Cyber Security Index scores the Maldives 0 of 14 on the national incident-response criteria.", "source": "NCSA (hub.ncsa.gov.mv); World Bank DMADD mission (Sep 2024); eGA NCSI (Sep 2025 version)", "date": "2024-2025", "url": null, "connector": "reference"}, {"category": "cyber", "label": "ITU and a CERT readiness assessment for the NCSA after the May 2025 Global CyberDrill", "text": "After the May 2025 Global CyberDrill in Dubai, the ITU committed to a CERT readiness assessment for the National Cyber Security Agency.", "source": "NCSA (hub.ncsa.gov.mv, engagement page, 2025)", "date": "May 2025", "url": null, "connector": "reference"}], "arms": [{"category": "arms", "label": "No nuclear power plant, nuclear storage site or nuclear plan in the sources reviewed", "text": "The sources reviewed show no nuclear power plant, no nuclear storage site and no nuclear energy plan for the Maldives. The energy plans cover diesel, solar, waste-to-energy and an ocean-thermal study. None is plotted.", "source": "Energy Roadmap 2024–2033 (Nov 2024); ScienceDirect (OTEC study, 2025)", "date": "2025", "url": null, "connector": "reference"}, {"category": "arms", "label": "No missile base is listed in the Maldives in the sources reviewed", "text": "No missile base is listed in the Maldives in the sources reviewed. None is plotted.", "source": "Sources reviewed for this build", "date": "2026", "url": null, "connector": "reference"}], "space": [{"category": "space", "label": "No space-launch site is listed in the Maldives in the sources reviewed", "text": "No space-launch site is listed in the Maldives in the sources reviewed. None is plotted.", "source": "Sources reviewed for this build", "date": "2026", "url": null, "connector": "reference"}], "wellbeing": [{"category": "wellbeing", "label": "World Happiness Report 2026: the Maldives' rank not verified in this build", "text": "The annual report ranks countries for wellbeing. The Maldives' 2026 rank was not verified in this build; check the report directly.", "source": "World Happiness Report (annual); not verified in this build", "date": "Mar 2026", "url": null, "connector": "reference"}], "darkweb": [{"category": "darkweb", "label": "Ransomware claims for the Maldives are group claims, not confirmed victims", "text": "The Ransomware.live feed filtered to the Maldives' country code lists claims made by groups on their own leak sites. Each claim is labelled unverified.", "source": "Ransomware.live (v2 feed)", "date": "live", "url": null, "connector": "reference"}]}, "markers": [{"id": "male", "name": "Malé (capital): MNDF headquarters, Malé Commercial Harbour, Coast Guard strategic reserve", "lat": 4.172, "lon": 73.5089, "cat": "capital", "note": "Capital and seat of government. The MNDF headquarters, the Ministry of Defence and National Service, the Coast Guard's strategic reserve and Malé Commercial Harbour are here (MNDF; Wikipedia, 2026). Position from the Natural Earth place record.", "source": "Natural Earth populated places; mndf.gov.mv; Wikipedia (Ministry of Defence and National Service, Apr 2026)", "date": "", "linked_items": []}, {"id": "hulhumale", "name": "Hulhumalé (reclaimed city): SEA-ME-WE 6 cable landing (Phase II)", "lat": 4.211, "lon": 73.5385, "cat": "capital", "note": "Reclaimed city next to Malé. The SEA-ME-WE 6 landing point is at Hulhumalé Phase II (Dhiraagu, 2024). Chinese engagement in the Phase II housing project is reported (NUS ISAS). Position approximate.", "source": "Dhiraagu press release (Aug 2024); NUS ISAS (reported)", "date": "", "linked_items": []}, {"id": "addu", "name": "Hithadhoo (Addu City administrative centre), Addu Atoll", "lat": -0.6, "lon": 73.0833, "cat": "capital", "note": "Administrative centre of Addu City in the south. Gan, the southern air station, is on the same atoll. Position approximate.", "source": "Public reference; position approximate", "date": "", "linked_items": []}, {"id": "eydhafushi", "name": "Eydhafushi (Baa Atoll administrative centre)", "lat": 5.1044, "lon": 73.0764, "cat": "capital", "note": "Administrative centre of Baa Atoll (public reference). Position approximate.", "source": "Public reference; position approximate", "date": "", "linked_items": []}, {"id": "kulhudhuffushi", "name": "Kulhudhuffushi (Haa Dhaalu administrative centre; small domestic airport VRBK)", "lat": 6.6308, "lon": 73.0678, "cat": "capital", "note": "Administrative centre of Haa Dhaalu Atoll. Its airport (VRBK) is a small domestic airfield (OurAirports). Position from the airport record.", "source": "OurAirports (CC0); public reference", "date": "", "linked_items": []}, {"id": "fuvahmulah", "name": "Fuvahmulah (Gnaviyani Atoll island; airport VRMF)", "lat": -0.3097, "lon": 73.435, "cat": "capital", "note": "Island of Gnaviyani Atoll in the south. Its airport (VRMF) is a small domestic airfield. Position from the airport record.", "source": "OurAirports (CC0); public reference", "date": "", "linked_items": []}, {"id": "kadhdhoo", "name": "Kadhdhoo (Laamu Atoll; airport VRMK; MNDF regional headquarters)", "lat": 1.8592, "lon": 73.5219, "cat": "capital", "note": "Laamu Atoll centre. The MNDF regional headquarters for Laamu (L. Kadhdhoo) is here (Wikipedia, 2026). Position from the airport record.", "source": "OurAirports (CC0); Wikipedia (Ahmed Mohamed (general), 2026)", "date": "", "linked_items": []}, {"id": "mndf_hq", "name": "MNDF Headquarters (Bandaarakoshi, Ameer Ahmed Magu, Malé): Defence Force headquarters", "lat": 4.1745, "lon": 73.5065, "cat": "cantonment", "note": "The Maldives National Defence Force's headquarters, with the Joint Operations Centre under the Integrated Headquarters. The Ministry of Defence and National Service shares the complex (mndf.gov.mv; Wikipedia, 2026). Position approximate.", "source": "mndf.gov.mv; Wikipedia (Ministry of Defence and National Service, Apr 2026)", "date": "", "linked_items": []}, {"id": "gan_rhq", "name": "MNDF Regional Headquarters S. Gan (Addu Atoll, at Gan)", "lat": -0.6945, "lon": 73.149, "cat": "cantonment", "note": "Regional headquarters for the south, at Gan in Addu Atoll (Wikipedia, Ahmed Mohamed (general), 2026). Coast Guard patrol boats are stationed at regional headquarters. Position approximate.", "source": "Wikipedia (Ahmed Mohamed (general), 2026); military-history list (Regional Headquarters)", "date": "", "linked_items": []}, {"id": "kadhdhoo_rhq", "name": "MNDF Regional Headquarters L. Kadhdhoo (Laamu Atoll)", "lat": 1.856, "lon": 73.518, "cat": "cantonment", "note": "Regional headquarters for Laamu Atoll (Wikipedia, Ahmed Mohamed (general), 2026; military-history list 'Regional Headquarters, Kahdoo, Laamu Atoll'). Position approximate.", "source": "Wikipedia (Ahmed Mohamed (general), 2026); military-history list", "date": "", "linked_items": []}, {"id": "cg_reserve", "name": "MNDF Coast Guard strategic reserve (Malé)", "lat": 4.1765, "lon": 73.515, "cat": "navy_base", "note": "The Coast Guard is the armed maritime force (the Maldives has no navy). Four squadrons cover the southern, central and northern regions; their positions are not published in the sources reviewed, so they are not plotted. The strategic reserve is at Malé (Wikipedia, MNDF Coast Guard, 2026). Position approximate.", "source": "Wikipedia (MNDF Coast Guard, 2026)", "date": "", "linked_items": []}, {"id": "gan_air", "name": "Gan International Airport (former RAF Gan, Addu Atoll): MNDF Air Corps helicopter base", "lat": -0.692975, "lon": 73.152627, "cat": "air_base", "note": "Built by the Royal Navy and used as RAF Gan. The RAF left in 1976 and the government took over the site. The MNDF Air Corps' first helicopter was based here in 2010 (migflug, 2026). Position from the airport record (VRMG).", "source": "migflug (2026); Wikipedia (Gan International Airport)", "date": "", "linked_items": []}, {"id": "maafaru_air", "name": "Maafaru (Noonu Atoll): MNDF Air Corps drone base, Bayraktar TB2 hangar and command centre", "lat": 5.817407, "lon": 73.468404, "cat": "air_base", "note": "The Air Corps was launched here on 15 March 2024. Bayraktar TB2 drones from Turkey operate from the MNDF hangar; the command centre is here (Atoll Times, Mar 2024; migflug, 2026). The airport opened on 1 December 2019. Drone counts differ between sources: three were displayed in 2024, and Wikipedia lists six (not corroborated). Position from the airport record (VRDA).", "source": "Atoll Times (16 Mar 2024); The Maldives Finest (2024); migflug (2026)", "date": "", "linked_items": []}, {"id": "funadhoo_air", "name": "PLANNED MNDF air base and hangar: Funadhoo (Shaviyani Atoll), not verified", "lat": 6.1624, "lon": 73.2875, "cat": "air_base", "note": "The government announced in 2024 that hangars would be built at Gan and at Funadhoo (Shaviyani), funded from the defence budget (Edition.mv, 2024). Not verified as built in this build. Position from the airport record (FND), which is the island's airfield.", "source": "Edition.mv (2024); not verified in this build", "date": "", "linked_items": []}, {"id": "velana_cn", "name": "Velana International Airport (Hulhulé): expansion by a Chinese contractor; new runway opened 2018", "lat": 4.19183, "lon": 73.529099, "cat": "foreign_base", "note": "The main international airport, on Hulhulé next to Malé. Beijing Urban Construction Group signed the 2014 expansion; a 3,400 m runway opened in 2018, with a new fuel farm and cargo terminal (CSIS AMTI, 2018). The airport itself is civil. Position from the airport record (VRMM).", "source": "CSIS AMTI (2018): Chinese Investment in the Maldives", "date": "", "linked_items": []}, {"id": "sinamale_bridge", "name": "Sinamalé (China–Maldives Friendship) Bridge, Malé to Hulhulé: Chinese-financed, opened 2018", "lat": 4.1837, "lon": 73.5193, "cat": "foreign_base", "note": "A 2 km cross-sea bridge opened in 2018 at about US$210m, financed by a Chinese government grant and an Exim Bank concessional loan, and built by a Chinese state contractor (sources name the subsidiary differently). The loan was restructured under the G20 debt-service suspension in 2020 (AidData; Wikipedia, May 2026). Position approximate (midpoint).", "source": "AidData (China's financing record); Wikipedia (Sinamalé Bridge, May 2026)", "date": "", "linked_items": []}, {"id": "xyh3_thilafushi", "name": "Chinese research vessel Xiang Yang Hong 03: port call at Thilafushi (23 February 2024)", "lat": 4.17, "lon": 73.441, "cat": "foreign_base", "note": "Permitted in January 2024 for a port call for personnel rotation and replenishment. The ship docked at Malé and at Thilafushi on 23 February 2024. The government said it would do no research in Maldivian waters (Reuters via Malay Mail, 22 Feb 2024; SCMP, 2024). Position approximate.", "source": "Reuters via Malay Mail (22 Feb 2024); SCMP (2024)", "date": "", "linked_items": []}, {"id": "makunudhoo", "name": "Makunudhoo (Haa Dhaalu): planned Chinese–Maldivian Joint Ocean Observation Station (2017; reported scrapped; not verified)", "lat": 6.45, "lon": 72.7, "cat": "foreign_base", "note": "A 2017 protocol between China's State Oceanic Administration and the Maldives' environment ministry planned a joint ocean observation station on Makunudhoo, the westernmost inhabited island. Reports say it was scrapped (Wikipedia gives 2019). Not verified as built or dropped in this build. Position approximate.", "source": "Wikipedia (Joint Ocean Observation Station; Makunudhoo); not verified in this build", "date": "", "linked_items": []}, {"id": "sea_me_we6", "name": "SEA-ME-WE 6 cable landing at Hulhumalé Phase II (Dhiraagu; inaugurated 1 August 2024)", "lat": 4.214, "lon": 73.542, "cat": "pipeline", "note": "The cable is 19,200 km long with at least 100 Tbps capacity; Dhiraagu is the first Maldivian co-owner of a global consortium of 16 partners. Full service was expected in early 2026; the go-live is not verified in this build (Dhiraagu, Aug 2024; Submarine Networks, Aug 2024). Position approximate.", "source": "Dhiraagu press release (Aug 2024); Submarine Networks (Aug 2024)", "date": "", "linked_items": []}, {"id": "mwsc_water", "name": "Greater Malé water supply: desalination and storage (MWSC)", "lat": 4.179, "lon": 73.511, "cat": "pipeline", "note": "Greater Malé produces about 49,900 tonnes of water a day and holds about 50,445 tonnes in storage; a 10,000-tonne tank was added at Hulhumalé (The Standard Maldives, 2026). Position approximate.", "source": "The Standard Maldives (2026)", "date": "", "linked_items": []}, {"id": "funadhoo_fuel", "name": "K. Funadhoo (Kaafu Atoll) fuel storage: relocation to Maagiri Falhu planned (2023; status not verified)", "lat": 4.265, "lon": 73.511, "cat": "pipeline", "note": "The government announced in 2023 that the fuel storage at K. Funadhoo (Kaafu) would move to Maagiri Falhu, near Thilafushi (Edition.mv, 2023). The 2026 status is not verified in this build. Position approximate; the island's exact coordinates were not in the sources reviewed.", "source": "Edition.mv (2023); not verified in this build", "date": "", "linked_items": []}, {"id": "thilafushi_wte", "name": "Thilafushi waste-to-energy: 13 MW biopower (planned; permitting stage)", "lat": 4.172, "lon": 73.444, "cat": "pipeline", "note": "A 13 MW waste-to-energy plant on the Thilafushi landfill and industrial island was at the permitting stage; construction was expected in 2026 and operation in 2027 (GlobalData profile, via power-technology). Not verified as built. Position approximate.", "source": "power-technology (GlobalData profile)", "date": "", "linked_items": []}, {"id": "male_port", "name": "Malé Commercial Harbour (Maldives Ports Limited): the sole port authority", "lat": 4.176, "lon": 73.5135, "cat": "seaport", "note": "Maldives Ports Limited is the state port authority and runs Malé Commercial Harbour (Wikipedia). Its commercial operations are being relocated to Thilafushi (below). Position approximate.", "source": "Wikipedia (Maldives Ports Limited)", "date": "", "linked_items": []}, {"id": "thilafushi_port", "name": "Thilafushi commercial port (relocation of Malé port operations; about 60 ha; under construction)", "lat": 4.169, "lon": 73.44, "cat": "seaport", "note": "Maldives Ports Limited is relocating Malé's commercial port operations to Thilafushi, on about 60 ha; the quay-wall work was targeted for July 2026 (Ministry of Economic Development, Transport and Trade, Aug 2026). Debt-financed; the source does not name the lender. Position approximate.", "source": "Ministry of Economic Development, Transport and Trade (Aug 2026); Maldives Business Review (phase 1)", "date": "", "linked_items": []}, {"id": "ncsa", "name": "National Cyber Security Agency (NCSA): national CSIRT and CERT", "lat": 4.1765, "lon": 73.51, "cat": "cyber_hub", "note": "Operates the national CSIRT (CERT) and coordinates incident response; CEO Dr Ahmed Naufal Abdul Hady (World Bank mission, Sep 2024). The office address is not published in the sources reviewed; the position is approximate (Malé). The 2025 NCSI scores incident-response capacity 0 of 14.", "source": "NCSA (hub.ncsa.gov.mv); World Bank DMADD mission (Sep 2024); eGA NCSI (2025)", "date": "", "linked_items": []}, {"id": "eight_degree", "name": "Eight Degree Channel: sea passage at the northern edge of the archipelago (general navigation; not verified)", "lat": 7.9, "lon": 73.25, "cat": "chokepoint", "note": "A sea passage named for its latitude at the northern edge of the Maldives. General navigation reference; not verified in this build. Position approximate.", "source": "Public information (not verified in this build)", "date": "", "linked_items": []}], "connector_status": [{"name": "offline_seed", "configured": true, "ok": true, "message": "Offline snapshot: reference items and strategic sites only; backend not connected", "item_count": 30}], "total_items": 30};
  const CAT_META = {"military": {"label": "Military & Strategic", "color": "var(--amber)"}, "economic": {"label": "Economic & Trade", "color": "var(--cyan-h)"}, "political": {"label": "Political & Diplomatic", "color": "var(--green)"}, "hazard": {"label": "Natural Hazards", "color": "var(--violet)"}, "aviation": {"label": "Aviation & Maritime Notices", "color": "var(--violet)"}, "strategic": {"label": "Strategic & Arms Monitoring", "color": "var(--magenta)"}, "cyber": {"label": "Cyber & MSS", "color": "var(--red)"}, "space": {"label": "Space Program", "color": "var(--cyan-h)"}, "social_local": {"label": "Social pulse", "color": "var(--gold)"}, "social_global": {"label": "Social pulse (global)", "color": "var(--gold)"}};

  function escapeHtml(s){
    if(s === null || s === undefined) return "";
    return String(s).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function project(lon, lat){
    const phi = lat * Math.PI/180, lam = lon * Math.PI/180;
    const dl = lam - PROJ.lam0;
    const cosc = PROJ.sinp0 * Math.sin(phi) + PROJ.cosp0 * Math.cos(phi) * Math.cos(dl);
    const k = Math.sqrt(2 / (1 + cosc));
    const x = k * Math.cos(phi) * Math.sin(dl);
    const y = k * (PROJ.cosp0 * Math.sin(phi) - PROJ.sinp0 * Math.cos(phi) * Math.cos(dl));
    return [PROJ.translate[0] + x*PROJ.scale, PROJ.translate[1] - y*PROJ.scale];
  }

  const MARKER_COLOR = {"capital": "#c9a35c", "flashpoint": "#ef5354", "chokepoint": "#f59e0b", "hazard": "#58c4ff", "submarine_base": "#fb923c", "navy_base": "#f97316", "carrier_port": "#fdba74", "cantonment": "#c084fc", "nuclear_site": "#facc15", "space_site": "#06b6d4", "satellite_station": "#60a5fa", "defense_industry": "#84cc16", "pipeline": "#4ade80", "nuclear_plant": "#eab308", "air_base": "#a78bfa", "airport": "#38bdf8", "seaport": "#22c55e", "custom": "#ffffff"};

  // ---------------- 72h / All-time window ----------------
  let timeWindow = "72h";   // default per request; stays until the user picks otherwise
  const WINDOW_MS = 72 * 3600 * 1000;

  // Robust across the formats the connectors actually emit: ISO, RFC-822 (RSS
  // "published"), GDELT "YYYYMMDDTHHMMSSZ", and USGS epoch-ms as a string.
  function parseItemDate(s){
    if(!s) return null;
    if(/^\d{13}$/.test(String(s))) return new Date(parseInt(s, 10));
    const g = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/.exec(String(s));
    if(g) return new Date(Date.UTC(+g[1], +g[2]-1, +g[3], +g[4], +g[5], +g[6]));
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d;
  }
  function inWindow(it){
    if(timeWindow === "all") return true;
    const d = parseItemDate(it.date);
    // Strict by design: an item with no verifiable timestamp (background
    // reference entries dated "ongoing"/"background", or a date string that
    // can't be parsed) is NOT shown in the 72h view - claiming it's "last
    // 72 hours" news when nothing proves that would break the one rule this
    // toggle exists to enforce. Switch to All Time to see them.
    if(!d) return false;
    return (Date.now() - d.getTime()) <= WINDOW_MS;
  }
  function windowedCats(cats){
    const out = {};
    Object.keys(cats).forEach(function(k){ out[k] = (cats[k]||[]).filter(inWindow); });
    return out;
  }

  let currentData = null, isLive = false;
  // start activeLayers from whatever the checkboxes actually show as checked
  // in the HTML (event layers on, infrastructure layers off by default),
  // rather than hardcoding it separately and risking the two going out of sync
  let activeLayers = new Set(
    Array.from(document.querySelectorAll(".layer-cb")).filter(cb => cb.checked).map(cb => cb.dataset.layer)
  );
  let refreshTimer = null;
  let customMarkers = [];

  // ---------------- data loading ----------------
  async function loadData(manual){
    const btn = document.getElementById("refreshBtn");
    if(manual && btn){ btn.classList.add("spinning"); btn.disabled = true; }
    try {
      const url = manual ? "/api/refresh" : "/api/snapshot";
      const opts = manual ? {method:"POST"} : {cache:"no-store"};
      const res = await fetch(url, opts);
      if(!res.ok){
        if(res.status === 429){ const j = await res.json().catch(()=>({})); throw new Error(j.error || "rate limited"); }
        // try to surface the server's own error detail (e.g. a specific
        // connector/rendering failure), not just the bare status code
        const body = await res.json().catch(()=>null);
        throw new Error(body && body.error ? ("HTTP " + res.status + ": " + body.error) : ("HTTP " + res.status));
      }
      const data = await res.json();
      currentData = data; isLive = true;
      render(data, true, null);
    } catch(e) {
      currentData = SEED_DATA; isLive = false;
      render(SEED_DATA, false, e.message);
    } finally {
      if(btn){ btn.classList.remove("spinning"); btn.disabled = false; }
    }
  }

  // ---------------- render orchestration ----------------
  function render(data, live, errMsg){
    // apply the 72h / All-time window ONCE, then everything below (panels,
    // KPIs, map dots) reads from the same filtered view - they can't disagree
    const view = Object.assign({}, data, {items_by_category: windowedCats(data.items_by_category || {})});
    view.markers = (data.markers || []).map(function(m){
      return Object.assign({}, m, {linked_items: (m.linked_items || []).filter(inWindow)});
    });
    renderStatusBar(live, view, errMsg);
    renderKPIs(view);
    renderMarkers(view.markers, view.items_by_category);
    renderPanels(view.items_by_category);
    renderTicker(view);
    renderDarkWeb(view);
    renderConnectorStrip(view.connector_status || [], live);
    applyFilter(); // keep an active search query applied across re-renders
  }

  function renderStatusBar(live, data, errMsg){
    const pill = document.getElementById("statusPill");
    const txt = document.getElementById("statusPillText");
    const banner = document.getElementById("offlineBanner");
    const footerNote = document.getElementById("footerNote");
    const snapDate = document.getElementById("snapDate");
    if(live){
      pill.className = "status-pill live"; txt.textContent = "Live backend";
      banner.classList.remove("show");
      const when = data.updated_at ? new Date(data.updated_at*1000).toLocaleTimeString() : "just now";
      snapDate.textContent = "Backend last polled " + when;
      footerNote.innerHTML = "Live backend connected &middot; " + (data.total_items||0) + " items in feed &middot; not investment/operational advice, verify time-critical items against primary sources";
    } else {
      pill.className = "status-pill offline"; txt.textContent = "Offline snapshot";
      banner.classList.add("show");
      banner.innerHTML = "<b>Backend not reachable" + (errMsg ? " (" + escapeHtml(errMsg) + ")" : "") +
        "</b> &mdash; showing the embedded Aug 10, 2026 research snapshot instead of live data. " +
        "Run <code>python run.py</code> and reload this page to connect the real backend.";
      snapDate.textContent = "Offline snapshot - Aug 10, 2026";
      footerNote.textContent = "Offline snapshot mode - start the Python backend for live data.";
    }
  }

  function countItems(cats, dataObj){
    let n = 0;
    cats.forEach(c => n += (dataObj[c]||[]).length);
    return n;
  }

  function renderKPIs(data){
    const cats = data.items_by_category || {};
    document.getElementById("kpi-markers").textContent = (data.markers||[]).length;
    document.getElementById("kpi-military").textContent = (cats.milops||[]).length;
    document.getElementById("kpi-economic").textContent = (cats.econ||[]).length;
    document.getElementById("kpi-political").textContent = (cats.geo||[]).length;
    document.getElementById("kpi-hazard").textContent = (cats.hazard||[]).length;
    document.getElementById("kpi-darkweb").textContent = (cats.darkweb||[]).length;
    document.getElementById("count-markers").textContent = (data.markers||[]).length + " sites";
    const infraNote = document.getElementById("infraNote");
    if(infraNote){
      const info = data.infrastructure || {};
      if(isLive){
        infraNote.textContent = (info.airport_count||0) + " airports live from OurAirports (CC0 dataset) + " +
          "verified seaports/naval bases/defense HQs. Real-time ship/submarine positions aren't shown - " +
          "no open source publishes that for any navy (see README).";
      } else {
        infraNote.textContent = "Offline snapshot: infrastructure markers frozen from build time, not live.";
      }
    }
  }

  // ---------------- map markers ----------------
  function addMarkerEl(layer, m, color, extra){
    const [x,y] = project(m.lon, m.lat);
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "marker");
    g.setAttribute("transform", "translate(" + x.toFixed(1) + "," + y.toFixed(1) + ")");
    g.dataset.name = m.name; g.dataset.note = m.note || "";
    g.dataset.source = m.source || ""; g.dataset.date = m.date || "";
    g.dataset.color = color;
    g.dataset.linked = JSON.stringify(m.linked_items || []);
    const pulse = (m.linked_items && m.linked_items.length) || (extra && extra.pulse);
    g.innerHTML = (pulse ? '<circle class="pulse" r="5" fill="none" stroke="'+color+'" stroke-width="1.6"/>' : '') +
                  '<circle class="core" r="3.4" fill="'+color+'"/>';
    layer.appendChild(g);
  }

  function renderMarkers(markers, cats){
    const layer = document.getElementById("markerLayer");
    if(!layer) return;
    layer.innerHTML = "";
    // 1. named strategic sites (pulse when a windowed headline mentions them)
    (markers || []).forEach(function(m){
      if(!activeLayers.has(m.cat)) return;
      addMarkerEl(layer, m, MARKER_COLOR[m.cat] || "#c9a35c");
    });
    // 2. any windowed item that carries its OWN coordinates (USGS quakes) -
    // a real lat/lon from the source, not a guess
    if(activeLayers.has("hazard")){
      Object.keys(cats || {}).forEach(function(k){
        (cats[k] || []).forEach(function(it){
          if(typeof it.lat === "number" && typeof it.lon === "number"){
            addMarkerEl(layer, {name: it.label, note: it.text, source: it.source, date: it.date,
              lat: it.lat, lon: it.lon, linked_items: []}, MARKER_COLOR.hazard, {pulse: true});
          }
        });
      });
    }
    // 3. the user's own plotted markers
    if(activeLayers.has("custom")){
      customMarkers.forEach(function(cm){
        addMarkerEl(layer, {name: cm.label, note: cm.remark || "(no remark)", source: "You",
          date: cm.added, lat: cm.lat, lon: cm.lon, linked_items: []}, MARKER_COLOR.custom, {pulse: true});
      });
    }
    wireMarkerEvents();
  }

  function wireMarkerEvents(){
    const wrap = document.getElementById("mapWrap");
    const tip = document.getElementById("mapTip");
    if(!wrap || !tip) return;
    function hideTip(){ tip.classList.remove("show"); }
    function positionTip(evt){
      const rect = wrap.getBoundingClientRect();
      let cx, cy;
      if(evt.touches && evt.touches[0]){ cx = evt.touches[0].clientX; cy = evt.touches[0].clientY; }
      else { cx = evt.clientX; cy = evt.clientY; }
      let x = cx - rect.left, y = cy - rect.top;
      const tw = 260, th = 130;
      if(x + tw + 24 > rect.width) x = x - tw - 18; else x = x + 16;
      if(y + th + 20 > rect.height) y = Math.max(4, y - th - 10); else y = y + 14;
      tip.style.left = x+"px"; tip.style.top = y+"px";
    }
    function showTip(m, evt){
      const name = m.dataset.name, note = m.dataset.note, source = m.dataset.source,
            date = m.dataset.date, color = m.dataset.color;
      let linked = [];
      try { linked = JSON.parse(m.dataset.linked || "[]"); } catch(e){ linked = []; }
      let html = '<div class="t-name" style="color:'+color+'">'+escapeHtml(name)+'</div>' +
                 '<div>'+escapeHtml(note)+'</div>' +
                 '<div class="t-meta">'+escapeHtml(source)+(date?(" &middot; "+escapeHtml(date)):"")+'</div>';
      if(linked.length){
        html += '<div class="t-meta" style="margin-top:6px;color:var(--text-dim);">Recent related items:</div>';
        linked.slice(0,3).forEach(function(li){
          html += '<div class="marker-tt-link">&bull; ' + escapeHtml((li.label||"").slice(0,60)) + '</div>';
        });
      }
      tip.innerHTML = html;
      positionTip(evt);
      tip.classList.add("show");
    }
    wrap.querySelectorAll(".marker").forEach(function(m){
      m.addEventListener("mouseenter", function(evt){ showTip(m, evt); });
      m.addEventListener("mousemove", positionTip);
      m.addEventListener("mouseleave", hideTip);
      m.addEventListener("click", function(evt){
        if(tip.classList.contains("show")){ hideTip(); } else { showTip(m, evt); }
      });
    });
    wrap.removeEventListener("mouseleave", hideTip);
    wrap.addEventListener("mouseleave", hideTip);
  }

  // layer toggle checkboxes
  document.querySelectorAll(".layer-cb").forEach(function(cb){
    cb.addEventListener("change", function(){
      const cat = cb.dataset.layer;
      if(cb.checked) activeLayers.add(cat); else activeLayers.delete(cat);
      if(currentData) renderMarkers(currentData.markers || []);
    });
  });

  // ---------------- panels ----------------
  // Only http(s) URLs ever become links. A feed-supplied "javascript:" / "data:" URL
  // would otherwise be a click-to-run XSS even though every text field is escaped.
  function safeUrl(u){
    if(!u) return null;
    try { const x = new URL(String(u)); return (x.protocol === "http:" || x.protocol === "https:") ? x.href : null; }
    catch(e){ return null; }
  }
  function fmtDate(s){
    const d = parseItemDate(s);
    return d ? d.toLocaleString([], {dateStyle:"medium", timeStyle:"short"}) : (s || "");
  }
  function itemHtml(it){
    const href = safeUrl(it.url);
    return '<div class="item" data-search="'+escapeHtml(((it.label||"")+" "+(it.text||"")).toLowerCase())+'">' +
      '<div class="lbl">'+escapeHtml(it.label)+'</div>' +
      (it.text && it.text !== it.label ? '<div class="txt">'+escapeHtml(it.text)+'</div>' : '') +
      '<div class="meta">'+escapeHtml(it.source)+(it.date?(" &middot; "+escapeHtml(fmtDate(it.date))):"")+
      (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '')+
      '</div></div>';
  }

  function renderPanels(cats){
    const ids = HEADING_KEYS;
    ids.forEach(function(cat){
      const container = document.getElementById("items-"+cat);
      const countEl = document.getElementById("count-"+cat);
      if(!container) return;
      const list = (cats[cat] || []).slice(0, 25);
      if(countEl) countEl.textContent = list.length;
      container.innerHTML = list.length
        ? list.map(itemHtml).join("")
        : '<div class="empty-note">' + (timeWindow === "72h"
            ? (isLive
                ? 'Nothing in the last 72 hours for this heading. Switch to <b>All Time</b> (top right) to see older items.'
                : 'Backend offline - the embedded research snapshot is older than 72 hours, so it is hidden in this view. Switch to <b>All Time</b> to read it, or start the backend for live news.')
            : 'No items for this heading yet.') + '</div>';
    });
  }

  // ---------------- connector status strip ----------------
  function renderConnectorStrip(statuses, live){
    const el = document.getElementById("connectorStrip");
    const note = document.getElementById("methodNote");
    if(!live){
      el.innerHTML = '<span class="conn-badge off">offline snapshot - connectors not queried</span>';
      note.textContent = "Backend not connected. Start it with: python run.py  (see README.md)";
      return;
    }
    el.innerHTML = statuses.map(function(s){
      const cls = !s.configured ? "off" : (s.ok ? "ok" : "err");
      const label = s.name + (s.configured ? (s.ok ? " \u2713 " + s.item_count : " \u2717") : " (not set)");
      return '<span class="conn-badge '+cls+'" title="'+escapeHtml(s.message||"")+'">'+escapeHtml(label)+'</span>';
    }).join("");
    const okCount = statuses.filter(s=>s.ok).length;
    note.textContent = okCount + " of " + statuses.length + " connectors returned data this poll. " +
      "Hover a badge for its exact status message. Add API keys in .env or via secure_setup.py to enable more.";
  }

  // ---------------- search filter ----------------
  let lastQuery = "";
  function applyFilter(){
    const q = lastQuery;
    document.querySelectorAll(".item[data-search]").forEach(function(it){
      if(!q){ it.classList.remove("dim"); return; }
      const hay = it.getAttribute("data-search") || "";
      if(hay.indexOf(q) === -1) it.classList.add("dim"); else it.classList.remove("dim");
    });
  }
  const filterInput = document.getElementById("filterInput");
  if(filterInput){
    filterInput.addEventListener("input", function(){
      lastQuery = filterInput.value.trim().toLowerCase();
      applyFilter();
    });
  }

  // ---------------- refresh button ----------------
  const refreshBtn = document.getElementById("refreshBtn");
  if(refreshBtn) refreshBtn.addEventListener("click", function(){ loadData(true); });

  // ---------------- settings modal (API keys) ----------------
  const settingsBackdrop = document.getElementById("settingsBackdrop");
  const settingsBtn = document.getElementById("settingsBtn");
  const closeSettingsBtn = document.getElementById("closeSettingsBtn");
  const saveKeysBtn = document.getElementById("saveKeysBtn");
  const keyFieldsEl = document.getElementById("keyFields");
  const settingsMsg = document.getElementById("settingsMsg");

  async function openSettings(){
    settingsBackdrop.classList.add("show");
    settingsMsg.textContent = ""; settingsMsg.className = "modal-msg";
    keyFieldsEl.innerHTML = "Loading&hellip;";
    try {
      const res = await fetch("/api/keys");
      if(!res.ok) throw new Error("HTTP " + res.status);
      const fields = await res.json();
      keyFieldsEl.innerHTML = Object.keys(fields).map(function(name){
        const f = fields[name];
        return '<div class="key-field">' +
          '<label><span class="kf-status'+(f.configured?" on":"")+'"></span>' + escapeHtml(f.label) +
          (f.configured ? ' <span style="font-weight:400;color:var(--text-faint);">(set via '+escapeHtml(f.source)+')</span>' : '') +
          '</label>' +
          '<div class="kf-help">'+escapeHtml(f.help)+'</div>' +
          '<input type="password" data-key="'+name+'" placeholder="'+
            (f.configured ? "Already set - paste a new value to replace it" : "Paste key here, or leave blank to skip") +
          '" autocomplete="off"/></div>';
      }).join("");
    } catch(e) {
      keyFieldsEl.innerHTML = '<div class="modal-msg err">Could not load key status: ' + escapeHtml(e.message) +
        (isLive ? "" : " (backend not connected - start it with python run.py first)") + '</div>';
    }
  }
  function closeSettings(){ settingsBackdrop.classList.remove("show"); }

  if(settingsBtn) settingsBtn.addEventListener("click", openSettings);
  if(closeSettingsBtn) closeSettingsBtn.addEventListener("click", closeSettings);
  if(settingsBackdrop) settingsBackdrop.addEventListener("click", function(e){
    if(e.target === settingsBackdrop) closeSettings();
  });

  if(saveKeysBtn) saveKeysBtn.addEventListener("click", async function(){
    const inputs = keyFieldsEl.querySelectorAll("input[data-key]");
    const body = {};
    inputs.forEach(function(inp){ if(inp.value.trim()) body[inp.dataset.key] = inp.value.trim(); });
    if(!Object.keys(body).length){
      settingsMsg.textContent = "Nothing to save - all fields blank."; settingsMsg.className = "modal-msg";
      return;
    }
    saveKeysBtn.disabled = true; saveKeysBtn.textContent = "Saving\u2026";
    try {
      const res = await fetch("/api/keys", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify(body)});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      settingsMsg.textContent = "Saved " + j.saved.length + " key(s), encrypted. Reconnecting\u2026";
      settingsMsg.className = "modal-msg ok";
      await loadData(true);
      setTimeout(function(){ openSettings(); }, 400); // refresh the configured/not-configured status shown
    } catch(e) {
      settingsMsg.textContent = "Save failed: " + e.message;
      settingsMsg.className = "modal-msg err";
    } finally {
      saveKeysBtn.disabled = false; saveKeysBtn.textContent = "Save & reconnect";
    }
  });

  // ---------------- live clock ----------------
  function pad(n){ return n<10 ? "0"+n : n; }
  function tickClock(){
    const d = new Date();
    const el = document.getElementById("snapClock");
    if(el) el.textContent = pad(d.getHours())+":"+pad(d.getMinutes())+":"+pad(d.getSeconds())+" local";
  }
  tickClock(); setInterval(tickClock, 1000);

  // ---------------- running news ticker (unlocated news, newest first, bottom->top) ----------------
  function ts(it){ const d = parseItemDate(it.date); return d ? d.getTime() : 0; }
  function wireTickerPause(){
    const viewport = document.getElementById("tickerViewport");
    const track = document.getElementById("tickerTrack");
    if(!viewport || !track) return;
    viewport.onpointerenter = function(){ track.classList.add("paused"); };
    viewport.onpointerleave = function(){ track.classList.remove("paused"); };
    viewport.ontouchstart = function(){ track.classList.add("paused"); };
    viewport.ontouchend = function(){ track.classList.remove("paused"); };
  }
  function in72h(it){
    const d = parseItemDate(it.date);
    if(!d) return false;                       // undated background items never qualify as "latest news"
    return (Date.now() - d.getTime()) <= 72 * 3600 * 1000;
  }
  function renderTicker(view){
    // The running feed is ALWAYS the last 72 hours - it ignores the All-Time toggle.
    const track = document.getElementById("tickerTrack");
    const cnt = document.getElementById("count-ticker");
    if(!track) return;
    const src = (currentData && currentData.items_by_category) || {};
    const all = [];
    Object.keys(src).forEach(function(k){
      (src[k] || []).forEach(function(it){
        if(!(typeof it.lat === "number" && typeof it.lon === "number") && in72h(it)) all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const list = all.slice(0, 80);
    if(cnt) cnt.textContent = list.length + " in 72h";
    if(!list.length){
      track.innerHTML = '<div class="empty-note" style="padding:14px;">No unlocated news in the last 72 hours yet.</div>';
      return;
    }
    const TAG = {geo:["GEO","var(--green)"], milops:["MIL","var(--amber)"], arms:["ARMS","var(--magenta)"],
      naval:["NAVAL","var(--cyan-h)"], scs:["SCS","var(--cyan-h)"], air:["AIR","var(--violet)"], space:["SPACE","var(--cyan-h)"],
      tech:["TECH","var(--gold)"], cyber:["CYBER","var(--red)"], darkweb:["DARK","var(--red)"], econ:["ECON","var(--cyan-h)"],
      mss:["MSS","var(--amber)"], social:["SOC","var(--gold)"], wellbeing:["WELL","var(--magenta)"], hazard:["HAZ","var(--violet)"]};
    const one = list.map(function(it){
      const t = TAG[it.category] || ["NEWS","var(--cyan-h)"];
      return '<div class="tick-item"><span class="tag" style="background:'+t[1]+'">'+t[0]+'</span>' +
        '<span class="txt">'+escapeHtml(it.label)+'</span>' +
        '<div class="meta">'+escapeHtml(it.source)+(it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '')+'</div></div>';
    }).join("");
    track.innerHTML = one + one;
    wireTickerPause();
  }

  function renderDarkWeb(view){
    const el = document.getElementById("items-darkweb");
    if(!el) return;
    const want = document.getElementById("darkwebFilter").value;
    const all = [];
    Object.keys(view.items_by_category || {}).forEach(function(k){
      (view.items_by_category[k] || []).forEach(function(it){
        if(it.category === "darkweb") all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const shown = all.filter(function(it){ return want === "all" || it.in_region; }).slice(0, 80);
    document.getElementById("count-darkweb").textContent = shown.length + " of " + all.length;
    const LABEL = {ransomware_live:"Ransomware.live: ", telegram_public:"Telegram: ", darkweb_tor:"Dark web via Tor: "};
    const st = (view.connector_status || []).filter(function(s){ return LABEL[s.name]; })
      .map(function(s){ return LABEL[s.name] + s.message; });
    document.getElementById("darkwebStatus").textContent = st.join("   |   ");
    el.innerHTML = shown.length ? shown.map(function(it){
      const href = safeUrl(it.url);
      return '<div class="item"><div class="lbl">'+escapeHtml(it.label)+'</div><div class="meta">' +
        escapeHtml(it.source) + (it.country ? ' &middot; '+escapeHtml(it.country) : '') +
        (it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '') +
        (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '') +
        '</div></div>';
    }).join("") : '<div class="empty-note">No dark-web or threat-intel claims in the current window. ' +
        (timeWindow === "72h" ? 'Switch to All Time (top right) to see older claims.' : '') + '</div>';
  }

  // ---------------- radar sweep: 2D scanner rotating over the map (off for reduced-motion) ----------------
  // Cosmetic only, so it is isolated: a missing animation API or any error here
  // must never stop the data panels from rendering. Falls back to a timer when
  // requestAnimationFrame is unavailable (older or embedded browsers).
  try {
    (function radar(){
      const g = document.getElementById("radarSweep");
      if(!g || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
      const cx = g.getAttribute("data-cx"), cy = g.getAttribute("data-cy");
      const raf = (typeof window.requestAnimationFrame === "function")
        ? function(f){ window.requestAnimationFrame(f); }
        : function(f){ setTimeout(f, 33); };
      let a = 0;
      (function step(){
        a = (a + 0.5) % 360;
        g.setAttribute("transform", "rotate(" + a + " " + cx + " " + cy + ")");
        raf(step);
      })();
    })();
  } catch(e) { /* sweep is decoration; the dashboard works without it */ }

  const dwFilter = document.getElementById("darkwebFilter");
  if(dwFilter) dwFilter.addEventListener("change", function(){ if(currentData) render(currentData, isLive, null); });

  // ---------------- 72h / All-time toggle ----------------
  document.querySelectorAll(".wt-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      timeWindow = btn.dataset.window;
      document.querySelectorAll(".wt-btn").forEach(b => b.classList.toggle("active", b === btn));
      // re-render from what we already have - no new network call needed
      if(currentData) render(currentData, isLive, null);
    });
  });

  // ---------------- Plot a location (lat/long + remark) ----------------
  const plotBackdrop = document.getElementById("plotBackdrop");
  const plotMsg = document.getElementById("plotMsg");

  async function loadCustomMarkers(){
    try {
      const res = await fetch("/api/custom-markers", {cache:"no-store"});
      if(!res.ok) throw new Error("HTTP " + res.status);
      customMarkers = (await res.json()).markers || [];
    } catch(e) { customMarkers = []; }
  }

  function renderCustomList(){
    const el = document.getElementById("customMarkersList");
    if(!customMarkers.length){ el.innerHTML = ""; return; }
    el.innerHTML = '<div style="font-size:11px;color:var(--text-faint);margin-bottom:6px;">Your plotted markers:</div>' +
      customMarkers.map(function(m, i){
        return '<div class="custom-marker-row"><span><b>'+escapeHtml(m.label)+'</b> ('+m.lat+', '+m.lon+')' +
          (m.remark ? '<br/><span style="color:var(--text-faint);">'+escapeHtml(m.remark)+'</span>' : '') +
          '</span><button data-idx="'+i+'" title="Remove">&times;</button></div>';
      }).join("");
    el.querySelectorAll("button[data-idx]").forEach(function(btn){
      btn.addEventListener("click", async function(){
        try {
          const res = await fetch("/api/custom-markers/" + btn.dataset.idx, {method:"DELETE"});
          const j = await res.json();
          if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
          customMarkers = j.markers || [];
          renderCustomList();
          if(currentData) render(currentData, isLive, null);
        } catch(e) {
          plotMsg.textContent = "Remove failed: " + e.message; plotMsg.className = "modal-msg err";
        }
      });
    });
  }

  const plotBtn = document.getElementById("plotBtn");
  if(plotBtn) plotBtn.addEventListener("click", async function(){
    plotBackdrop.classList.add("show");
    plotMsg.textContent = ""; plotMsg.className = "modal-msg";
    await loadCustomMarkers();
    renderCustomList();
  });
  document.getElementById("plotCloseBtn").addEventListener("click", () => plotBackdrop.classList.remove("show"));
  plotBackdrop.addEventListener("click", function(e){ if(e.target === plotBackdrop) plotBackdrop.classList.remove("show"); });

  document.getElementById("plotAddBtn").addEventListener("click", async function(){
    const label = document.getElementById("plotLabel").value.trim();
    const remark = document.getElementById("plotRemark").value.trim();
    const lat = parseFloat(document.getElementById("plotLat").value);
    const lon = parseFloat(document.getElementById("plotLon").value);
    if(!label || isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180){
      plotMsg.textContent = "Enter a label and valid lat (-90 to 90) / lon (-180 to 180)."; plotMsg.className = "modal-msg err";
      return;
    }
    try {
      const res = await fetch("/api/custom-markers", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({label: label, remark: remark, lat: lat, lon: lon})});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      customMarkers = j.markers || [];
      ["plotLabel","plotRemark","plotLat","plotLon"].forEach(id => document.getElementById(id).value = "");
      plotMsg.textContent = "Added."; plotMsg.className = "modal-msg ok";
      renderCustomList();
      if(currentData) render(currentData, isLive, null);
    } catch(e) {
      plotMsg.textContent = "Add failed: " + e.message; plotMsg.className = "modal-msg err";
    }
  });

  // ---------------- boot ----------------
  loadCustomMarkers().then(function(){ loadData(false); });
  // auto-update news & data every 3 minutes, per request
  refreshTimer = setInterval(function(){ loadData(false); }, 3*60*1000);

  // Test hooks (harmless in production) so the DOM regression test can drive
  // the real code paths instead of re-implementing them
  window.__TEST = {render: function(){ if(currentData) render(currentData, isLive, null); },
                   setData: function(d){ currentData = d; isLive = true; },
                   setWindow: function(w){ timeWindow = w; },
                   parseItemDate: parseItemDate, inWindow: inWindow};
})();
