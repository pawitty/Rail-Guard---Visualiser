// ===============================
// Populate KPI Cards
// ===============================
document.getElementById("temp").innerText = systemData.ambientTemperature + "°C";
document.getElementById("rod1").innerText = liveData.rod1.toFixed(2) + " m";
document.getElementById("rod2").innerText = liveData.rod2.toFixed(2) + " m";

// ===============================
// CHART
// ===============================
const ctx = document.getElementById('chart').getContext('2d');

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: displacementHistory.labels,
    datasets: [
      {
        label: 'Rod 1',
        data: displacementHistory.rod1,
        borderColor: '#00e5ff',
        backgroundColor: 'rgba(0,229,255,0.1)',
        tension: 0.3
      },
      {
        label: 'Rod 2',
        data: displacementHistory.rod2,
        borderColor: '#ff9800',
        backgroundColor: 'rgba(255,152,0,0.1)',
        tension: 0.3
      },
      {
        label: 'Threshold',
        data: displacementHistory.labels.map(() => systemData.alertThreshold),
        borderColor: '#ff4d4d',
        borderDash: [5, 5],
        pointRadius: 0,
        tension: 0
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    },
    scales: {
      x: {
        ticks: { color: 'white' },
        grid: { color: 'rgba(255,255,255,0.08)' }
      },
      y: {
        ticks: { color: 'white' },
        grid: { color: 'rgba(255,255,255,0.08)' }
      }
    }
  }
});

// ===============================
// RADAR CANVAS
// ===============================
const canvas = document.getElementById("radarCanvas");
const ctx2 = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 300;

let sweepAngle = 0;

function drawRadar() {
  ctx2.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height;
  const radius = 180;

  // Radar arcs
  ctx2.strokeStyle = "rgba(0,255,100,0.3)";
  ctx2.lineWidth = 1;

  for (let r = 50; r <= radius; r += 40) {
    ctx2.beginPath();
    ctx2.arc(centerX, centerY, r, Math.PI, 2 * Math.PI);
    ctx2.stroke();
  }

  // Radar sweep
  const sweepX = centerX + radius * Math.cos(sweepAngle);
  const sweepY = centerY + radius * Math.sin(sweepAngle);

  ctx2.beginPath();
  ctx2.moveTo(centerX, centerY);
  ctx2.lineTo(sweepX, sweepY);
  ctx2.strokeStyle = "lime";
  ctx2.lineWidth = 2;
  ctx2.stroke();

  // Rod points
  drawTarget(centerX - 40, centerY - 110, "Rod 1");
  drawTarget(centerX + 20, centerY - 140, "Rod 2");

  sweepAngle += 0.02;
  if (sweepAngle > 2 * Math.PI) sweepAngle = Math.PI;

  requestAnimationFrame(drawRadar);
}

function drawTarget(x, y, label) {
  ctx2.beginPath();
  ctx2.arc(x, y, 6, 0, 2 * Math.PI);
  ctx2.fillStyle = "#00ff88";
  ctx2.fill();

  ctx2.fillStyle = "white";
  ctx2.font = "12px Arial";
  ctx2.fillText(label, x + 10, y);
}

drawRadar();

// ===============================
// LOG TABLE
// ===============================
const logTable = document.getElementById("logTable");

function renderLogs() {
  logTable.innerHTML = "";

  eventLogs.forEach(log => {
    let row = `
      <tr>
        <td>${log.time}</td>
        <td>${log.event}</td>
        <td>${log.value}</td>
      </tr>
    `;
    logTable.innerHTML += row;
  });
}

renderLogs();

// ===============================
// Add Log Helper
// ===============================
function addLog(event, value, status = "SAFE") {
  const now = new Date().toLocaleTimeString();

  eventLogs.push({
    time: now,
    event: event,
    value: value,
    status: status
  });

  if (eventLogs.length > 10) {
    eventLogs.shift();
  }

  renderLogs();
}

// ===============================
// LIVE SIMULATION
// ===============================
setInterval(() => {
  // Simulate rod values
  liveData.rod1 = +(0.15 + Math.random() * 0.08).toFixed(2);
  liveData.rod2 = +(0.18 + Math.random() * 0.12).toFixed(2);

  document.getElementById("rod1").innerText = liveData.rod1.toFixed(2) + " m";
  document.getElementById("rod2").innerText = liveData.rod2.toFixed(2) + " m";

  // Update chart
  const newLabel = "T" + (displacementHistory.labels.length + 1);

  displacementHistory.labels.push(newLabel);
  displacementHistory.rod1.push(liveData.rod1);
  displacementHistory.rod2.push(liveData.rod2);

  if (displacementHistory.labels.length > 8) {
    displacementHistory.labels.shift();
    displacementHistory.rod1.shift();
    displacementHistory.rod2.shift();
  }

  chart.data.labels = displacementHistory.labels;
  chart.data.datasets[0].data = displacementHistory.rod1;
  chart.data.datasets[1].data = displacementHistory.rod2;
  chart.data.datasets[2].data = displacementHistory.labels.map(() => systemData.alertThreshold);
  chart.update();

  // Alerts
  if (liveData.rod2 > systemData.alertThreshold) {
    addLog("Threshold Warning", liveData.rod2.toFixed(2) + " m", "WARNING");
  } else {
    addLog("Live Update", liveData.rod2.toFixed(2) + " m", "SAFE");
  }

}, 3000);
