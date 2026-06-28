# SZ Global Solutions — Image Generation Prompts

Prompts to recreate the exact imagery shown in the six design templates, with the
placement of each image. Works with Midjourney, DALL·E 3, Flux, or SDXL.

## How to use
1. For each image, paste: **`<PROMPT>` + `, ` + the STYLE block below.**
2. Use the listed **aspect ratio** (Midjourney `--ar`, or set canvas size).
3. Save the result into `public/images/` using the **filename** given, then point
   the matching key in `lib/site.js` → `img` at `/images/<filename>` instead of the
   current Unsplash URL.

## Shared STYLE block (append to every prompt)
> photorealistic, cinematic corporate advertising photography, dramatic golden-hour
> light with deep navy-blue shadows, premium sophisticated mood, colour palette of
> dark navy #0a1019 and gold/amber #e8a33d, soft depth of field, high detail, subtle
> film grain, 8k

## Shared NEGATIVE prompt
> text, words, watermark, logo, captions, cartoon, illustration, 3d render, low
> quality, blurry, oversaturated, distorted hands, extra fingers

---

## Master image list (unique images)

| # | filename | aspect | prompt (append STYLE) |
|---|----------|--------|------------------------|
| 1 | hero-port.jpg | 16:9 | A vast industrial seaport at sunset: a huge oil tanker / cargo ship berthed beside a tank farm of cylindrical oil-and-gas storage tanks and pipelines, gantry cranes, calm water, glowing orange-and-purple dusk sky |
| 2 | oil-rig.jpg | 4:3 | An offshore oil drilling platform silhouetted on a calm ocean at sunset, orange sky, reflections on water, distant haze |
| 3 | hands-signing.jpg | 4:3 | Close-up of a businessman's hands signing a financial document with a fountain pen on a desk, paperwork and charts, warm office light |
| 4 | boardroom-meeting.jpg | 4:3 | A small group of diverse business professionals in suits meeting around a table in a warm-lit modern office, discussing documents |
| 5 | tank-farm.jpg | 4:3 | Rows of large white cylindrical oil-and-gas storage tanks at an industrial terminal, clear daytime sky, slight aerial angle |
| 6 | excavator.jpg | 4:3 | A large yellow hydraulic excavator working at an open mining quarry, raw earth and rock, dust in the air, daylight |
| 7 | wind-solar.jpg | 4:3 | A renewable-energy farm: a row of tall white wind turbines beside large solar-panel arrays in a green field under a bright blue sky |
| 8 | world-map-gold.jpg | 16:9 | A dark navy world map with glowing gold network arcs and light nodes connecting continents, night-earth connectivity, subtle grid |
| 9 | london.jpg | 1:1 | London skyline at dusk along the Thames, The Shard and city lights, moody blue hour |
| 10 | dubai-night.jpg | 16:9 | Dubai skyline at night, Burj Khalifa, glowing skyscrapers and long highway light-trails on Sheikh Zayed Road, aerial |
| 11 | africa.jpg | 1:1 | An African metropolis skyline at golden dusk (e.g. Nairobi/Lagos), warm light, modern towers |
| 12 | gcc.jpg | 1:1 | A Gulf (GCC) city skyline at dusk (e.g. Doha or Riyadh), modern towers, desert-warm tones |
| 13 | earth-space.jpg | 1:1 | Planet Earth seen from space at night, glowing city lights and golden atmosphere on the horizon, stars |
| 14 | mountain-peak.jpg | 1:1 | A dramatic snow-capped mountain summit at golden sunrise, clouds below the peak |
| 15 | lighthouse.jpg | 1:1 | A coastal lighthouse at blue-hour dusk casting a warm beam of light, rocky shore, calm sea |
| 16 | compass.jpg | 1:1 | Extreme close-up of an antique brass/gold nautical compass on a dark surface, shallow focus |
| 17 | handshake.jpg | 4:3 | Close-up of two businessmen in dark suits shaking hands, blurred office background, warm rim light |
| 18 | writing-docs.jpg | 4:3 | A hand writing notes with a pen over printed charts and a contract on a desk, soft daylight |
| 19 | city-night.jpg | 4:3 | A modern downtown skyline of glass skyscrapers at night reflected in water, glowing windows |
| 20 | team-hands.jpg | 4:3 | A diverse business team stacking their hands together in the centre, teamwork close-up, warm light |
| 21 | office-dartboard.jpg | 16:9 | A blurred modern office interior at dusk with a dartboard on the wall and a dart hitting the bullseye, warm bokeh, shallow focus |
| 22 | coins-chart.jpg | 4:3 | Stacks of gold coins on a desk with a glowing rising candlestick / line financial chart overlaid, dark background |
| 23 | construction-cranes.jpg | 1:1 | Silhouettes of tall tower cranes over a construction site at dusk, blue-toned, industrial |
| 24 | corporate-towers.jpg | 1:1 | Low-angle view of modern corporate glass office towers, blue-toned, looking up |
| 25 | bank-columns.jpg | 1:1 | A classical bank building façade with tall stone columns, monochrome blue tone |
| 26 | gov-building.jpg | 1:1 | A neoclassical government building with a large dome and columns (capitol-style), blue dusk tone |
| 27 | boardroom-night.jpg | 16:9 | An empty executive boardroom at night with a long polished table and city skyline through floor-to-ceiling windows, moody |
| 28 | magnifier-docs.jpg | 4:3 | A magnifying glass held over financial documents and graphs on a desk, analytical, cool blue tone |
| 29 | office-walking.jpg | 4:3 | Silhouetted business people walking through a bright, airy modern office lobby/corridor, motion, glass and light |
| 30 | growth-arrow.jpg | 4:3 | A hand drawing an upward growth arrow / ascending line on a glowing chart, success and momentum, dark background |
| 31 | pumpjack.jpg | 3:4 | An oil pumpjack (nodding-donkey) silhouetted against a vivid orange sunset, oilfield |
| 32 | minerals.jpg | 3:4 | Extreme close-up of raw mined ore and metallic mineral rocks, glints of metal, dark moody light |
| 33 | container-ship.jpg | 3:4 | A large cargo container ship stacked with colourful containers at sea / leaving port, logistics |
| 34 | coastal-highway-night.jpg | 16:9 | Aerial view of a winding coastal mountain highway at night with red-and-white car light-trails, city lights and sunset on the horizon |
| 35 | yacht-sunset.jpg | 16:9 | The deck of a sailing yacht heeling on the open ocean at sunset, sail and rigging in frame, sun low over distant mountains, golden hour |
| 36 | chess-king.jpg | 4:3 | A single gold chess king piece standing on a chessboard, dramatic warm bokeh, strategy concept |
| 37 | bridge.jpg | 4:3 | A long modern suspension or arch bridge spanning water in perspective, dusk, leading lines |
| 38 | summit-person.jpg | 4:3 | A lone person standing triumphantly on a mountain summit at sunrise, arms relaxed, vast view below |
| 39 | network-nodes.jpg | 1:1 | Abstract dark visualisation of glowing gold connected nodes and light points forming a network, depth |
| 40 | globe-particles.jpg | 21:9 | Planet Earth from space at night with glowing gold particle connections and light streams arcing around it, dark space, panoramic |

---

## Placement map (where each image goes)

### Home (`/`) — template 01
- **Hero background** → `hero-port.jpg` (#1), full-width behind the headline.
- **What We Do** cards (3, wide image on top):
  - Deal Origination → `oil-rig.jpg` (#2)
  - Capital Advisory → `hands-signing.jpg` (#3)
  - Transaction Advisory → `boardroom-meeting.jpg` (#4)
- **Our Transaction Method** (6 steps) → icons only, no photos.
- **Where We Focus** cards (3, tall image-overlay):
  - Energy & Commodities → `tank-farm.jpg` (#5)
  - Capital Advisory → `excavator.jpg` (#6)
  - Infrastructure & Renewables → `wind-solar.jpg` (#7)

### About (`/about`) — template 05
- **Hero background** → `world-map-gold.jpg` (#8).
- **Where We Operate** (5 circular thumbnails):
  - United Kingdom → `london.jpg` (#9)
  - United Arab Emirates → `dubai-night.jpg` (#10)
  - Africa → `africa.jpg` (#11)
  - GCC → `gcc.jpg` (#12)
  - International Markets → `earth-space.jpg` (#13)
- **Our Mission** circle → `mountain-peak.jpg` (#14)
- **Our Vision** circle → `lighthouse.jpg` (#15)
- **Why Clients Work With Us** (5 cards):
  - Integrity → `compass.jpg` (#16)
  - Experience → `handshake.jpg` (#17)
  - Execution → `writing-docs.jpg` (#18)
  - Value Creation → `city-night.jpg` (#19)
  - Collaboration → `team-hands.jpg` (#20)

### What We Do (`/what-we-do`) — template 06
- **Hero background** → `office-dartboard.jpg` (#21).
- **Capability** cards (3):
  - Deal Origination → `city-night.jpg` (#19)
  - Capital Advisory → `coins-chart.jpg` (#22)
  - Transaction Advisory → `handshake.jpg` (#17)
- **Who We Work With** (5 thumbnails):
  - Project Sponsors → `construction-cranes.jpg` (#23)
  - Investors → `coins-chart.jpg` (#22) (or `handshake.jpg` #17)
  - Corporates → `boardroom-meeting.jpg` (#4)
  - Financial Institutions → `bank-columns.jpg` (#25)
  - Governments & Agencies → `gov-building.jpg` (#26)
- **Let's Build What's Next** band background → `boardroom-night.jpg` (#27).

### Our Approach (`/our-approach`) — template 02
- **Hero background** → four business professionals at a conference table by a sunset
  city window — generate as `boardroom-meeting.jpg` variant, **16:9**:
  *"four diverse business professionals in suits seated at a conference table in a
  high-rise office, smiling and discussing, golden city skyline at sunset behind"*.
  Filename: `approach-hero.jpg`.
- **6 step cards** (small photo on a light card):
  - 01 Originate → `magnifier-docs.jpg` (#28)
  - 02 Evaluate → `writing-docs.jpg` (#18)
  - 03 Structure → `handshake.jpg` (#17)
  - 04 Align Capital → `coins-chart.jpg` (#22)
  - 05 Execute → `office-walking.jpg` (#29)
  - 06 Deliver Value → `growth-arrow.jpg` (#30)
- **Global Perspective, Local Insight** panel background → `world-map-gold.jpg` (#8)
  or `dubai-night.jpg` (#10).

### Why Choose Us (`/why-choose-us`) — template 03
- **Hero** 4 cards (dark photo + icon):
  - Global Reach → `dubai-night.jpg` (#10)
  - Sector Expertise → `oil-rig.jpg` (#2)
  - Trusted Partnerships → `handshake.jpg` (#17)
  - Focused on Outcomes → archery target, generate `target-arrow.jpg`, **1:1**:
    *"a golden archery target with an arrow in the bullseye, dramatic light, dark
    background"*.
- **Sectors We Serve** (5 tall cards):
  - Energy & Oil and Gas → `pumpjack.jpg` (#31)
  - Mining & Minerals → `minerals.jpg` (#32)
  - Infrastructure & Logistics → `container-ship.jpg` (#33)
  - Renewables & Clean Energy → `wind-solar.jpg` (#7)
  - Financial Advisory → `growth-arrow.jpg` (#30) / `coins-chart.jpg` (#22)
- **Our Impact** panel background → `coastal-highway-night.jpg` (#34).
- **Stats** bar → icons only.

### Value Proposition (`/value-proposition`) — template 04
- **Hero background** → `yacht-sunset.jpg` (#35).
- **How We Add Value** (5 cards):
  - Strategic Perspective → `chess-king.jpg` (#36)
  - Disciplined Analysis → `compass.jpg` (#16)
  - Tailored Solutions → `hands-signing.jpg` (#3) / `writing-docs.jpg` (#18)
  - Strong Networks → `bridge.jpg` (#37)
  - Enduring Partnerships → `summit-person.jpg` (#38)
- **Who We Work With** (4 cards):
  - Investors → `corporate-towers.jpg` (#24)
  - Corporates → `boardroom-night.jpg` (#27)
  - Governments → `gov-building.jpg` (#26)
  - Advisors & Law Firms → `network-nodes.jpg` (#39)
- **Let's Build What's Next** band background → `globe-particles.jpg` (#40).
- **Get In Touch** card background → `dubai-night.jpg` (#10).

### Energy & Commodities / Insights / Contact
- No template images. Reuse: Energy & Commodities hero → `wind-solar.jpg` (#7) or
  `pumpjack.jpg` (#31); Insights hero → `city-night.jpg` (#19); Contact hero →
  `world-map-gold.jpg` (#8).
