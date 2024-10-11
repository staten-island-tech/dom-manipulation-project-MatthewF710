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
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  //redefining variables
  let currentcard = document.querySelector("#name-input").value;
  let currentdesc = document.querySelector("#description-input").value;
  let currentimg = document.querySelector("#image-input").value;
  let currentcolor = document.querySelector("#color-input").value;
  //value inputs
  console.log(
    "Title:",
    currentcard,
    "\nDescription:",
    currentdesc,
    "\nImage (link):",
    currentimg,
    "\nColor (rgb):",
    currentcolor
  );
  DOMSelectors.container.insertAdjacentHTML(
    "beforeEnd",
    `<div class="card"><h1 class="card-header">${currentcard}</h1><img src="${currentimg}" alt="card-img" class="card-img"><p>${currentdesc}</p><button class="removeBtn">Remove</button></div>`
  );
});
function back(color) {
  let cards = document.getElementsByClassName("card");
  if (cards.length > 0) {
    cards[cards.length - 1].style.backgroundColor = color;
  }
}
back(currentcolor);
