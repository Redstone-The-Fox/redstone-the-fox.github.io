///////////////////
// Starting Stuff
///////////////////

let clicks = 0;
let clkdisp = document.getElementById('clickdisp').innerHTML;
let cpc = 1;
let cpcdisp = document.getElementById('cpcdisp').innerHTML;

console.log("display='" + clkdisp + "'");
console.log("clicks='" + clicks + "'");

function updDisplay() {
  clkdisp = "Clicks: " + clicks;
  document.getElementById('clickdisp').innerHTML = clkdisp;
  cpcdisp = "CPC: " + cpc;
  document.getElementById('cpcdisp').innerHTML = cpcdisp;
}

updDisplay();
console.log("display='" + clkdisp + "'");
console.log("Console will be cleared in 3 seconds.");
setTimeout(console.clear, 3000);

clicks = Number(localStorage.getItem("clicks"));
if (cpc !== 0) {
  cpc = Number(localStorage.getItem("cpc"));
} else {
  cpc = 1
  localStorage.setItem("cpc", "1")
  updDisplay()
}
updDisplay();

cpc = 1
  localStorage.setItem("cpc", "1")
  updDisplay()