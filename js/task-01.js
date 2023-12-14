const listOfCategories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");
const listOfItems = listOfCategories.children;

console.log(`Number of categories: ${listOfItems.length}`);

for (let i = 0; i < items.length; i++) {
  console.log(`Category: ${items[i].firstElementChild.textContent}`);
  console.log(`Elements: ${items[i].lastElementChild.children.length}`);
}
