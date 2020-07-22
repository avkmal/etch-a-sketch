let container = document.body.getElementsByClassName("container")[0];
console.log(container);

const size = 16;
for (let i = 0; i < 4 * 4; i++) {
  let grid = document.createElement("div");
  grid.classList.add("grid");
  grid.style.width = `${Math.sqrt((30 * 30) / size)}vw`;
  grid.style.height = `${Math.sqrt((30 * 30) / size)}vw`;
  container.appendChild(div);
  container.appendChild(grid);
}

// let grids = document.getElementsByClassName("grid");
// for (let grid of grids) {
//   console.log(grid);
//   console.log(grid.offsetWidth);
//   console.log(grid.getBoundingClientRect());
// }
// console.log(grids.length);

// console.log(container.style.gridTemplateColumns);
// container.style.gridTemplateColumns = "repeat(4, 1fr)";

// function changeColor() {
//   this.style.backgroundColor = "black";
// }

// let grids = document.getElementsByClassName("grid");
// for (let grid of grids) {
//   grid.addEventListener("mouseover", changeColor, false);
// }
