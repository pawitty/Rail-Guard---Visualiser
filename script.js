function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-btn");

  tabs.forEach(tab => tab.classList.remove("active"));
  buttons.forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");

  const clickedButton = [...buttons].find(btn =>
    btn.getAttribute("onclick").includes(tabId)
  );
  if (clickedButton) clickedButton.classList.add("active");
}

/* =========================
   DEFAULT DATA FALLBACK
   (used if data.js doesn't define them)
========================= */
const baselineX = typeof rangeBins !== "undefined" ? rangeBins : [1, 2, 3, 4, 5];
const baselineY = typeof fftMagnitude !== "undefined" ? fftMagnitude : [10, 22, 18, 30, 25];

const rodSeparationData = typeof rodSeparation !== "undefined" ? rodSeparation : [0.05, 0.05, 0.06, 0.08, 0.10];
const phaseShiftData = typeof phaseShift !== "undefined" ? phaseShift : [0.05, 0.1, 0.2, 0.5, 1.0];
const displacementData = typeof displacement !== "undefined" ? displacement : [0.00004, 0.00008, 0.00016, 0.00040, 0.00080];

/* =========================
   PLOTLY THEME
========================= */
const darkLayout = {
  paper_bgcolor: "rgba(0,0,0,0)",
  plot_bgcolor: "rgba(255,255,255,0.03)",
  font: { color: "#ffffff", family: "Segoe UI, Arial, sans-serif" },
  xaxis: {
    gridcolor: "rgba(255,255,255,0.08)",
    zerolinecolor: "rgba(255,255,255,0.12)"
  },
  yaxis: {
    gridcolor: "rgba(255,255,255,0.08)",
    zerolinecolor: "rgba(255,255,255,0.12)"
  },
  margin: { t: 30, r: 20, b: 60, l: 60 }
};

const config = {
  responsive: true,
  displayModeBar: false
};

/* =========================
   BASELINE CHART
========================= */
Plotly.newPlot("baselineChart", [
  {
    x: baselineX,
    y: baselineY,
    type: "scatter",
    mode: "lines+markers",
    line: { width: 3, color: "#00b4d8" },
    marker: { size: 8, color: "#90e0ef" },
    name: "FFT Magnitude"
  }
], {
  ...darkLayout,
  title: "",
  xaxis: { ...darkLayout.xaxis, title: "Range Bin / Sample Index" },
  yaxis: { ...darkLayout.yaxis, title: "Magnitude" }
}, config);

/* =========================
   PHASE CHART
========================= */
Plotly.newPlot("phaseChart", [
  {
    x: phaseShiftData,
    y: displacementData,
    type: "scatter",
    mode: "lines+markers",
    line: { width: 3, color: "#ffb703" },
    marker: { size: 8, color: "#ffd166" },
    name: "Displacement"
  }
], {
  ...darkLayout,
  xaxis: { ...darkLayout.xaxis, title: "Phase Shift (rad)" },
  yaxis: { ...darkLayout.yaxis, title: "Estimated Displacement (m)" }
}, config);

/* =========================
   ROD SEPARATION CHART
========================= */
Plotly.newPlot("rodChart", [
  {
    x: rodSeparationData,
    y: displacementData,
    type: "bar",
    marker: { color: "#8ecae6" },
    name: "Shift"
  }
], {
  ...darkLayout,
  xaxis: { ...darkLayout.xaxis, title: "Rod Separation (m)" },
  yaxis: { ...darkLayout.yaxis, title: "Estimated Displacement (m)" }
}, config);
