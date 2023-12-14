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

createBtn.addEventListener("click", (event) => {
  if (input.value >= 1 && input.value <= 100) {
  }
});

function createBoxes(amount) {
  const result = [];
  const box = document.createElement("div");
  box.style.width = "30px";
  box.style.height = "30px";
  box.style.backgroundColor = getRandomHexColor();

  const box2 = document.createElement("div");
  box2.style.width = "40px";
  box2.style.height = "40px";
  box2.style.backgroundColor = getRandomHexColor();

  for (let i = 0; i <= amount; i++) {}
  result.push();
  return boxes.append(box, box2);
}

console.log(createBoxes(3));
