const productId = new URLSearchParams(window.location.search).get("id");
const url = "http://localhost:3000/api/products/";

// Recuperation du produit via API grace a l'ID
fetch(url + productId).then((reponse) =>
  reponse.json().then((data) => {
    let product = data;
    renderProductData(product);
  })
);

// Affichage des donner du produit
const renderProductData = (product) => {
  renderProductImage(product);
  renderProductTile(product);
  renderProductPrice(product);
  renderProductDescription(product);
  renderProductColors(product);
};

// Affichage de l'image produit
const renderProductImage = (product) => {
  document.querySelector(
    ".item__img"
  ).innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}"/>`;
};

// Affichage du nom du produit
const renderProductTile = (product) => {
  document.querySelector("#title").innerHTML = product.name;
};

// Affichage du prix unitaire du produit
const renderProductPrice = (product) => {
  document.querySelector("#price").innerHTML = product.price;
};

// Affichage de la description du produit
const renderProductDescription = (product) => {
  document.querySelector("#description").innerHTML = product.description;
};

// Affichage des couleurs disponible du produit
const renderProductColors = (product) => {
  let colorHtmlBuilder =
    "<option value=''>--SVP, choisissez une couleur --</option>";
  for (let color of product.colors) {
    colorHtmlBuilder += `<option value="${color}">${color}</option>`;
  }
  document.querySelector("#colors").innerHTML = colorHtmlBuilder;
};

// verification de la saisi d'une couleur
document.querySelector("#addToCart").addEventListener("click", () => {
  renderColorErrorMessage();
  renderQuantityErrorMessage();
});

const isColorSelected = (selectedColor) => {
  return selectedColor !== "";
};

// affichage d'un message d'erreur en cas de couleur nopn saisie
const renderColorErrorMessage = () => {
  if (!isColorSelected(document.querySelector("#colors").value)) {
    document.querySelector("#colorErrorMessage").innerHTML =
      "Veuillez choisir une couleur";
  } else {
    document.querySelector("#colorErrorMessage").innerHTML = "&nbsp;";
  }
};

// vérification de la saisie d'une quantité
const isQuantityFilled = (filledQuantity) => {
  return filledQuantity > 0;
};

const renderQuantityErrorMessage = () => {
  if (!isQuantityFilled(document.querySelector("#quantity").value)) {
    document.querySelector("#quantityErrorMessage").innerHTML =
      "Veuillez saisir une quantité";
  } else {
    document.querySelector("#quantityErrorMessage").innerHTML = "&nbsp;";
  }
};

// lors du clic sur le button "ajoutez au panier", si aucun message d'ereur
//est détécté, on ajoute dans l'élément "cart" du  "localstorage"
// le produit avec "id", "quantité", "color".
// un message de confirmation est afficher en bas de la page
// de l'utilisateur "produit ajouter au panier"

// se que contient mon objet ci dessou

// productId (me permet de recupéré l'id de l'item )

// document.querySelector("#quantity").value  (me permet de recupéré la quantité du produit)

// document.querySelector("#colors").value (me permet de recupéré la couleur selectionné)

// les condition pour que je puisse validé mon panier

//

document.querySelector("#addToCart").addEventListener("click", () => {
  if (document.querySelector("#colors").value != 0) {
    return true;
  }
});
