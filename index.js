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
  cardtitle: document.querySelector("#name-input"),
  carddesc: document.querySelector("#description-input"),
  cardimg: document.querySelector("#image-input"),
  cardcolor: document.querySelector("#color-input"),
};
let id = 0;
let cardids = [];
function coloring(color) {
  let cards = document.getElementsByClassName("card");
  cards[cards.length - 1].style.backgroundColor = `rgb(${color})`;
}
function create(name, desc, img) {
  id += 1;
  let currentcolor = DOMSelectors.cardcolor.value;
  DOMSelectors.container.insertAdjacentHTML(
    "beforeEnd",
    `<div class="card" id="card-${id}"><h1 class="card-header">${name}</h1><img src="${img}" alt="${name}" class="card-img"><p class="card-desc">${desc}</p><button class="removeBtn" id="remove-${id}">Remove</button></div>`
  );
  cardids.push({ id });
  coloring(currentcolor);
}
function deleter(cardid) {
  let remove = document.querySelector(`#remove-${cardid}`);
  remove.addEventListener("click", function () {
    let card = document.querySelector(`#card-${cardid}`);
    card.remove();
    cardids = cardids.filter((currentcard) => currentcard.id !== cardid);
  });
}
function clear() {
  DOMSelectors.cardtitle.value = "";
  DOMSelectors.carddesc.value = "";
  DOMSelectors.cardimg.value = "";
  DOMSelectors.cardcolor.value = "";
}
function final() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    //redefining variables
    let currentcard = DOMSelectors.cardtitle.value;
    let currentdesc = DOMSelectors.carddesc.value;
    let currentimg = DOMSelectors.cardimg.value;
    //inserting card
    create(currentcard, currentdesc, currentimg);
    //gets rid of stuff inside bar
    clear();
    //for getting rid of card
    deleter(id);
  });
}
final();
