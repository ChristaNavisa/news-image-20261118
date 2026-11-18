# Sum up 18 November's world news in one image

[![news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/c/news-image-20261118)
![rank](https://make.fun/badge/news-image-20261118/ChristaNavisa/news-image-20261118/rank.svg)
![reward](https://make.fun/badge/news-image-20261118/ChristaNavisa/news-image-20261118/reward.svg)

A newspaper front page that sums up the world's news of Wednesday,
18 November 2026, in a single 1024×1024 image — drawn programmatically
with Python/PIL (flat vector-style panels plus crisp text overlays).

## Stories in the image

- **Trump lands in Manila** — the US president arrives for Quad talks;
  India's Modi presses his Indo-Pacific vision.
- **Kyiv hits the Crimea bridge again** — Ukraine strikes the bridge for
  a second day; Russia pounds crossings in Kyiv in reply.
- **Drones over the Gulf** — Iran claims a drone hit on a US radar in
  Bahrain; the US strikes Qeshm island in reply.
- **Cyclone Akvan strengthens** — the Bay of Bengal storm heads for
  severe status by Thursday.
- **Freezers go dark in Europe** — a cyber-attack disables supermarket
  freezers in seven European countries.
- **GTA VI: reviews land today** — first verdicts reported due a day
  before launch; the most pre-ordered game in PlayStation and Xbox
  history.
- Also today: Britain sanctions Israeli settlement firms; Eisenkot is
  asked to form Israel's government; Canada and China extend trade
  deals; Northern Ireland reach the Nations League top tier.

Sources: AP, Al Jazeera, NPR, The Guardian, India Meteorological
Department. Every story happened, or was first reported, on
18 November 2026.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png`. It runs with no network and writes
the same bytes on every run.

## Competition

[news-image-20261118 on make.fun](https://make.fun/c/news-image-20261118)

## License

MIT — see [LICENSE](LICENSE).
