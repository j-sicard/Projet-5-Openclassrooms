const productId = new URLSearchParams(window.location.search).get("id");
const url = "http://localhost:3000/api/products/";

fetch(url + productId).then((reponse) =>
  reponse.json().then((data) => {
    let product = data;
    renderProductData(product);
  })
);

const renderProductData = (product) => {
  renderProductImage(product);
  renderProductTile(product);
  renderProductPrice(product);
  renderProductDescription(product);
  renderProductColors(product);
};

const renderProductImage = (product) => {
  document.querySelector(
    ".item__img"
  ).innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}"/>`;
};

const renderProductTile = (product) => {
  document.querySelector("#title").innerHTML = product.name;
};

const renderProductPrice = (product) => {
  document.querySelector("#price").innerHTML = product.price;
};

const renderProductDescription = (product) => {
  document.querySelector("#description").innerHTML = product.description;
};

const renderProductColors = (product) => {
  let colorHtmlBuilder =
    "<option value=''>--SVP, choisissez une couleur --</option>";
  for (let color of product.colors) {
    colorHtmlBuilder += `<option value="${color}">${color}</option>`;
  }
  document.querySelector("#colors").innerHTML = colorHtmlBuilder;
};
