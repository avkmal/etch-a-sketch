function createSquares(size) {
  if (!size) {
    return;
  }
  clearSquares();
  const container = document.getElementById("container");
  container.style.gridTemplateRows = `repeat(${size},auto)`;
  container.style.gridTemplateColumns = `repeat(${size},auto)`;

  for (i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "grid");
    square.style.border = "1px solid black";
    square.addEventListener("mouseenter", (e) => {
      square.style.backgroundColor = "black";
    });
    container.appendChild(square);
  }
}

function clearSquares() {
  const squares = document.querySelectorAll(".grid");
  for (let square of squares) {
    square.remove();
  }
}

createSquares(8);
document.getElementById("clearButton").addEventListener("click", clearOnly);

function clearOnly() {
  createSquares(8);
}

document.getElementById("inputSizeButton").addEventListener("click", newSize);

function newSize() {
  let size = prompt("please enter new size");
  createSquares(size);

  // if (size) {
  //   createSquares(size);
  // } else {
  //   createSquares(60);
  // }
}
