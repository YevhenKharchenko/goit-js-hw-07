function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("[type=number]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let result = [];
  let width = 30;

  for (let i = 0; i < amount; i++) {
    const markup = `<div
    class="boxes-item"
    style="background-color:${getRandomHexColor()};
    width:${width}px;
    height:${width}px"
  ></div>`;
    result.push(markup);
    width += 10;
  }

  return boxes.insertAdjacentHTML("afterbegin", result.join(""));
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", (event) => {
  if (input.value >= 1 && input.value <= 100) {
    destroyBoxes();
    createBoxes(input.value);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", (event) => {
  destroyBoxes();
});
