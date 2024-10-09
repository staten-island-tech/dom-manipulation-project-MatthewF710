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
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  //redefining variables
  let currentcard = document.querySelector("#name-input").value;
  let currentdesc = document.querySelector("#description-input").value;
  let currentimg = document.querySelector("#image-input").value;
  //value inputs
  console.log(
    "Title:",
    currentcard,
    "\nDescription:",
    currentdesc,
    "\nImage (link):",
    currentimg
  );
  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card"><h1>${currentcard}</h1><img src="${currentimg}" alt="card-img" class="card-img"><p>${currentdesc}</p> </div>`
  );
});
