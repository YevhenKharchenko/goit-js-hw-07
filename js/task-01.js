const listOfCategories = document.querySelector('#categories');
const listOfItems = [...listOfCategories.children];

console.log(`Number of categories: ${listOfItems.length}`);

listOfItems.forEach(elem => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});

const title = document.querySelectorAll('h2');
title.forEach(elem => elem.classList.add('title'));

const sublist = document.querySelectorAll('.item > ul');
sublist.forEach(elem => elem.classList.add('sublist'));

const subitem = document.querySelectorAll('.sublist > li');
subitem.forEach(elem => elem.classList.add('subitem'));
