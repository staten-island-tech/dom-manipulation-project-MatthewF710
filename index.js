const DOMSelectors = {
  //finding stuff
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
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
});
