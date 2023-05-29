// negate true/false
function negate(val) {
  if (!val) return true;
  else return false;
}

// div creator
function createDivsFromImages(arr, container) {
  for (let img of arr) {
    const div = document.createElement("div");
    div.textContent = `I am ${img}`;
    container.appendChild(div);
  }
}

// initialize array of images/icons
const rollCall = ["img1", "img2", "img3", "img4", "img5"];

// select html elements
const body = document.getElementById("main");

createDivsFromImages(rollCall, body);
