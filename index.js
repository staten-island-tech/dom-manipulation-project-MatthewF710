const DOMSelectors = {
  header: document.querySelector("h1"),
  items: document.querySelectorAll("li"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
};
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  let currentcard = document.querySelector("#main-name").value;
  let currentdesc = document.querySelector("#main-description").value;
  let currentimg = document.querySelector("#main-image").value;
  console.log(currentcard, currentdesc, currentimg);
});
