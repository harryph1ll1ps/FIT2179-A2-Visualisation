// Bump V whenever a vis/*.json spec changes so browsers refetch it.
const V = "20260530-8";

const charts = {
  "energy-trend":       "vis-electricity-trend.json",
  "electricity-mix":    "vis-electricity-mix-heatmap.json",
  "powerplant-map":     "vis-powerplant-map.json",
  "world-generation":   "vis-world-generation.json",
  "uranium-price":      "vis-uranium-price.json",
  "safety-emissions":   "vis-safety-emissions.json",
  "nuclear-vs-wind":    "vis-nuclear-vs-wind.json",
  "incidents-timeline": "vis-incidents-timeline.json",
  "choropleth":         "vis-choropleth.json",
  "france-trade":       "vis-france-trade.json"
};

Object.entries(charts).forEach(([id, file]) => {
  vegaEmbed("#" + id, "vis/" + file + "?v=" + V, { actions: false })
    .catch(console.error);
});
