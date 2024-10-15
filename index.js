// create HTML for inputs, cards and container aka where the cards go
//select/query the HTML form and get values from inputs
//turn values into an object
//insert card with object onto HTML
//add event listener for remove button in JS
const DOMSelectors = {
  //finding stuff
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
};
let currentcard;
let currentdesc;
let currentimg;
let currentcolor;
let id = 0;
function coloring(color) {
  let cards = document.getElementsByClassName("card");
  cards[cards.length - 1].style.backgroundColor = `rgb(${color})`;
  console.log(cards[cards.length - 1].style.backgroundColor);
}
function create(name, desc, img) {
  id += 1;
  let currentcolor = document.querySelector("#color-input").value;
  DOMSelectors.container.insertAdjacentHTML(
    "beforeEnd",
    `<div class="card" id="${id}"><h1 class="card-header">${name}</h1><img src="${img}" alt="${name}" class="card-img"><p>${desc}</p><button class="removeBtn" id="remove${id}">Remove</button></div>`
  );
  coloring(currentcolor);
}
function deleter(cardid) {
  const remove = document.querySelector(`#remove-${cardid}`);
  remove.addEventListener("click", function () {
    const card = document.querySelector(`${cardid}`);
    card.remove();
  });
}
function clear() {
  document.querySelector("#name-input").value = "";
  document.querySelector("#description-input").value = "";
  document.querySelector("#image-input").value = "";
  document.querySelector("#color-input").value = "";
}
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  //redefining variables
  let currentcard = document.querySelector("#name-input").value;
  let currentdesc = document.querySelector("#description-input").value;
  let currentimg = document.querySelector("#image-input").value;
  //inserting card
  create(currentcard, currentdesc, currentimg);
  //gets rid of stuff inside bar
  clear();
  //for getting rid of card
  deleter(id);
});
