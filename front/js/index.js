// call list products

const url = "http://localhost:3000/api/products/";

fetch(url).then((reponse) =>
  reponse.json().then((data) => {
    let products = data;
    renderProducts(products);
  })
);

const renderProducts = async (products) => {
  let htmlBuilder = "";

  for (let product of products) {
    htmlBuilder += `<a href='./product.html?id=${product._id}'>`;
    htmlBuilder += "<article>";
    htmlBuilder += `<img src='${product.imageUrl}' alt='${product.altTxt}'>`;
    htmlBuilder += `<h3 class='productName'>${product.name}</h3>`;
    htmlBuilder += `<p class='productDescription'>${product.description}</p>`;
    htmlBuilder += "</article>";
    htmlBuilder += "</a>";
  }
  document.querySelector("#items").innerHTML = htmlBuilder;
};
