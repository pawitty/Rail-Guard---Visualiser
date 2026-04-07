@@ -1,38 +1,65 @@
function showTab(id){
 document.querySelectorAll(".tab").forEach(t=>t.style.display="none")
 document.getElementById(id).style.display="block"
const ctx = document.getElementById('chart').getContext('2d');

let data = [0.1, 0.12, 0.15, 0.18, 0.23];

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5'],
    datasets: [{
      label: 'Displacement',
      data: data
    }]
  }
});

// RADAR CANVAS
const canvas = document.getElementById("radarCanvas");
const ctx2 = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

function drawRadar() {
  ctx2.clearRect(0,0,300,300);

  ctx2.beginPath();
  ctx2.arc(150,150,100,0,Math.PI);
  ctx2.strokeStyle = "green";
  ctx2.stroke();

  // points
  ctx2.fillStyle = "lime";
  ctx2.beginPath();
  ctx2.arc(120,120,5,0,2*Math.PI);
  ctx2.fill();

  ctx2.beginPath();
  ctx2.arc(170,100,5,0,2*Math.PI);
  ctx2.fill();
}

showTab("baseline")

// Baseline chart
new Chart(document.getElementById("baselineChart"),{

 type:"line",

 data:{
  labels:tests,
  datasets:[{
   label:"Rod Separation (m)",
   data:rodSeparation,
   borderColor:"blue",
   fill:false
  }]
 }
})

// Phase chart
new Chart(document.getElementById("phaseChart"),{

 type:"line",

 data:{
  labels:phaseShift,
  datasets:[{
   label:"Displacement (m)",
   data:displacement,
   borderColor:"red",
   fill:false
  }]
 }
})
drawRadar();

// LOGS
const logTable = document.getElementById("logTable");

function addLog(event, value) {
  let row = `<tr>
    <td>${new Date().toLocaleTimeString()}</td>
    <td>${event}</td>
    <td>${value}</td>
  </tr>`;
  logTable.innerHTML += row;
}

addLog("System Start", "OK");

// SIMULATION
setInterval(() => {
  let val = (Math.random()*0.3).toFixed(2);
  document.getElementById("rod2").innerText = val + " m";

  addLog("Update", val);

}, 3000);
