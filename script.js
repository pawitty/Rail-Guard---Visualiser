function showTab(id){
 document.querySelectorAll(".tab").forEach(t=>t.style.display="none")
 document.getElementById(id).style.display="block"
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
