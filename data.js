/* =========================================
   RAILGUARD DEMO DATA
   Used by script.js for dashboard plotting
========================================= */

/* -------------------------------
   TEST CASE INDEX
-------------------------------- */
const tests = [1, 2, 3, 4, 5];

/* -------------------------------
   BASELINE OOB DETECTION DATA
   Simulated FFT / range magnitude
-------------------------------- */
const rangeBins = [1, 2, 3, 4, 5, 6, 7, 8];
const fftMagnitude = [8, 15, 20, 35, 28, 18, 10, 5];

/* -------------------------------
   PHASE-BASED DISPLACEMENT DATA
-------------------------------- */

/* Rod separation in meters */
const rodSeparation = [0.05, 0.05, 0.06, 0.08, 0.10];

/* Phase shift in radians */
const phaseShift = [0.05, 0.10, 0.20, 0.50, 1.00];

/* Radar wavelength (approx for 60 GHz radar)
   lambda = c / f ≈ 3e8 / 60e9 = 0.005 m
*/
const wavelength = 0.005;

/* Displacement formula:
   displacement = (phaseShift * wavelength) / (4 * pi)
*/
const displacement = phaseShift.map(p =>
  (p * wavelength) / (4 * Math.PI)
);

/* -------------------------------
   OPTIONAL EXTRA DATA
   Useful for future upgrades
-------------------------------- */

/* Same displacement in millimeters */
const displacementMM = displacement.map(d => d * 1000);

/* Simple detection labels */
const movementStatus = displacementMM.map(d =>
  d < 0.1 ? "Stable" : "Shift Detected"
);

/* Combined dataset for debugging / tables */
const experimentData = tests.map((test, i) => ({
  testNumber: test,
  rodSeparation_m: rodSeparation[i],
  phaseShift_rad: phaseShift[i],
  displacement_m: displacement[i],
  displacement_mm: displacementMM[i],
  status: movementStatus[i]
}));

/* -------------------------------
   Console Check (optional)
-------------------------------- */
console.log("RailGuard Data Loaded");
console.log("Experiment Data:", experimentData);
