# Global Power Plant Database (reduced)

- **File:** `global-power-plant-database.csv`
- **Powers:** world dot map — *"Where are the power plants?"*
- **Source:** [World Resources Institute — Global Power Plant Database, v1.3.0](http://datasets.wri.org/dataset/globalpowerplantdatabase)
- **Citation:** Global Energy Observatory, Google, KTH Royal Institute of Technology in Stockholm, Enipedia, World Resources Institute. 2019. *Global Power Plant Database.*
- **License:** Creative Commons Attribution 4.0 International (CC BY 4.0).
- **Coverage:** ~34,900 grid-scale (≥1 MW) generating facilities across 167 countries (~72% of world capacity).

## Columns
| Column | Description |
| --- | --- |
| `country` | ISO 3166-1 alpha-3 country code. |
| `country_long` | Full country name. |
| `name` | Power plant name (Romanized). |
| `gppd_idnr` | 10–12 character unique plant identifier. |
| `capacity_mw` | Generating capacity in megawatts. |
| `latitude` | Latitude, decimal degrees (WGS84). |
| `longitude` | Longitude, decimal degrees (WGS84). |
| `primary_fuel` | Primary energy source (Coal, Gas, Nuclear, Hydro, Solar, Wind, etc.). |

## Notes
Reduced for the web: all columns to the right of `primary_fuel` in the original dataset (other fuels, commissioning year, owner, reported/estimated generation 2013–2019, etc.) were removed to keep the file small enough for GitHub Pages.
