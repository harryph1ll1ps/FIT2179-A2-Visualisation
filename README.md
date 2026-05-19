# FIT2179 Data Visualisation 2 Starter Scaffold

This is a simple beginner-friendly starter project for a FIT2179 Data Visualisation 2 assignment. It uses HTML, CSS, JavaScript, Vega-Lite, and Vega-Embed only, so it can run easily with Live Server and be deployed to GitHub Pages.

## Project Structure

```text
project/
│
├── index.html
├── style.css
├── script.js
│
├── data/
│   └── sample_data.csv
│
├── vis/
│   ├── vis1.json
│   ├── vis2.json
│   ├── vis3.json
│   └── map.json
│
└── README.md
```

## Run With Live Server

1. Open the folder in VS Code.
2. Install the Live Server extension if needed.
3. Right-click `index.html`.
4. Select `Open with Live Server`.

## Deploy To GitHub Pages

1. Push this project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the main branch and the root folder.
6. Save the settings and wait for the site to publish.

## Where Things Go

- Put datasets inside the `data/` folder.
- Put Vega-Lite specification files inside the `vis/` folder.
- Write the narrative and layout structure in `index.html`.
- Add page styling in `style.css`.
- Connect charts in `script.js`.

## How To Add Another Visualisation

1. Create a new Vega-Lite JSON file in `vis/`, for example `vis4.json`.
2. Add a new section and chart container in `index.html`, for example `<div id="vis4"></div>`.
3. Add a new `vegaEmbed()` line in `script.js`.
4. Add narrative text near the chart so it fits the storytelling structure.

## Final Assignment Reminder

The final assignment should include:

- 10 or more visualisations
- substantial variety of visual idioms
- a clear storytelling structure
- useful annotations and explanation
- at least one map

## Notes

- Keep datasets publicly accessible if you want the charts to work on GitHub Pages.
- Keep Vega-Lite JSON files readable and well commented through descriptions and clear structure.
- This scaffold is only a clean foundation. You can expand the story, layout, annotations, and visual design later.
