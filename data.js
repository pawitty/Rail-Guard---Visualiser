// ===============================
// RailGuard Data Store
// ===============================

// ---- SYSTEM STATUS ----
const systemData = {
  projectName: "RailGuard",
  systemStatus: "ONLINE",
  ambientTemperature: 32.5,
  detectionRate: 60, // Hz
  alertThreshold: 0.25, // meters
  radarStatus: "ACTIVE"
};

// ---- LIVE SENSOR VALUES ----
const liveData = {
  rod1: 0.18,
  rod2: 0.23,
  phaseShift: 0.42,
  baselineFFT: 0.20,
  phaseEstimated: 0.23
};

// ---- CHART HISTORY ----
const displacementHistory = {
  labels: ["T1", "T2", "T3", "T4", "T5"],
  rod1: [0.10, 0.12, 0.14, 0.16, 0.18],
  rod2: [0.12, 0.15, 0.17, 0.20, 0.23]
};

// ---- EXPERIMENTAL VALIDATION ----
const experimentalData = [
  { test: 1, actual: 0.05, measuredFFT: 0.05, measuredPhase: 0.052 },
  { test: 2, actual: 0.10, measuredFFT: 0.10, measuredPhase: 0.101 },
  { test: 3, actual: 0.20, measuredFFT: 0.19, measuredPhase: 0.201 },
  { test: 4, actual: 0.50, measuredFFT: 0.48, measuredPhase: 0.499 },
  { test: 5, actual: 1.00, measuredFFT: 0.95, measuredPhase: 1.002 }
];

// ---- EVENT LOGS ----
let eventLogs = [
  { time: "14:00:01", event: "System Start", value: "OK", status: "SAFE" },
  { time: "14:00:05", event: "Radar Active", value: "IWR6843", status: "SAFE" },
  { time: "14:00:10", event: "Rod 1 Update", value: "0.18 m", status: "SAFE" },
  { time: "14:00:12", event: "Rod 2 Update", value: "0.23 m", status: "WARNING" }
];

// ---- CONFIGURATION VALUES ----
const configData = {
  frameRate: 60,
  fftSize: 256,
  mtiEnabled: true,
  sensitivity: 80,
  warningThreshold: 0.25
};
