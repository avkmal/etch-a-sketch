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

function clearOnly() {
  createSquares(nSize);
}

let nSize = 40;
function newSize() {
  const size = prompt("please enter new size");
  if (size) {
    nSize = size;
    createSquares(nSize);
  }
}

createSquares(60);
document.getElementById("clearButton").addEventListener("click", clearOnly);

document.getElementById("inputSizeButton").addEventListener("click", newSize);
