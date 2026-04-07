@@ -1,15 +1,73 @@
body{
 font-family: Arial;
 margin:40px;
body {
  margin: 0;
  font-family: Arial;
  background: #0b132b;
  color: white;
}

.tabs button{
 margin:10px;
 padding:10px 20px;
/* NAVBAR */
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #1c2541;
}

.tab{
 display:none;
 width:70%;
 margin:auto;
.nav-links span {
  margin: 0 10px;
  cursor: pointer;
}

.status {
  color: #00ff88;
}

/* HERO */
.hero {
  text-align: center;
  padding: 30px;
}

/* CARDS */
.cards {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}

.card {
  background: #1c2541;
  padding: 20px;
  border-radius: 10px;
  width: 150px;
  text-align: center;
}

/* MAIN */
.main {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.panel {
  flex: 1;
  background: #1c2541;
  padding: 20px;
  border-radius: 10px;
}

/* LOGS */
.logs {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

td, th {
  border: 1px solid #333;
  padding: 10px;
}
