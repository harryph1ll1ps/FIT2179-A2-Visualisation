# Data

All datasets used by the visualisations on this site. Each `.csv` here powers one
chart; full documentation (source, citation, columns) for every file lives in
[`documentation/`](documentation/).

| File | Powers | Source |
| --- | --- | --- |
| `electricity-fossil-renewables-nuclear-line.csv` | Electricity-mix stacked bars (2000–2025) | Our World in Data / Ember |
| `electricity-mix-pct.csv` | Electricity-mix heatmap by country | Our World in Data / Ember |
| `global-power-plant-database.csv` | World power-plant dot map | World Resources Institute |
| `world-electricity-generation.csv` | Monthly nuclear generation | Nuclear Energy Institute |
| `uranium-purchase-price-us.csv` | Uranium price waterfall | US Energy Information Administration |
| `death-rates-by-energy-source.csv` | Safety vs emissions bubble chart | Our World in Data |
| `nuclear-incidents.csv` | INES incident timeline | GZERO Media / IAEA |
| `share-electricity-nuclear.csv` | Nuclear-share choropleth | Our World in Data / Ember |
| `france-electricity-trade.csv` | France electricity-trade bars | RTE (France) |

One map also loads world country borders directly from the
[vega-datasets](https://github.com/vega/vega-datasets) CDN (`world-110m.json`),
so that boundary file is not stored here.
