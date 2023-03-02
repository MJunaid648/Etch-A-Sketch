function createGrid(number) {
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.style.gridTemplateColumns = `repeat(${number},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${number},1fr)`;
  for (let i = 0; i < number * number; i++) {
    let div = document.createElement("div");
    div.classList.add("grid-item");
    gridContainer.appendChild(div);
  }
}
function changeColor(e) {
  e.target.style.backgroundColor = "black";
}
function currentSizeHeading(num) {
  let currentSize = document.querySelector(".current-size");
  currentSize.textContent = `${num} x ${num}`;
}
function clear() {
  let gridBoxList = document.querySelectorAll(".grid-item");
  gridBoxList.forEach((gridItem) => (gridItem.style.backgroundColor = null));
}

function reset() {
  let num = prompt("Please enter grid size between 1 to 100:");
  while (
    isNaN(num) ||
    num === undefined ||
    num === null ||
    num === 0 ||
    num > 100 ||
    num < 1
  ) {
    num = prompt("Invalid! Please enter gridsize between 1 to 100:");
  }
  const gridContainer = document.querySelector(".grid-container");
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  createGrid(num);
  let gridBoxList = document.querySelectorAll(".grid-item");
  gridBoxList.forEach((gridBox) => {
    gridBox.addEventListener("mouseover", changeColor);
  });
  currentSizeHeading(num);
}

let gridNumber = 28;
createGrid(gridNumber);
currentSizeHeading(gridNumber);

let gridBoxList = document.querySelectorAll(".grid-item");
gridBoxList.forEach((gridItem) =>
  gridItem.addEventListener("mouseover", changeColor)
);

let clearBtn = document.querySelector(".btn-clear");
clearBtn.addEventListener("click", clear);

let resetBtn = document.querySelector(".btn-reset");
resetBtn.addEventListener("click", reset);
