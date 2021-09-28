
let title = document.createElement('h1');
document.getElementById('command').appendChild(title);
title.innerText = 'Nous vous remercions !';

let cart = getCart();

//affichage des éléments du local storage
//let finalCommand = localStorage.getItem("confirmCommand");
//let local = JSON.stringify(localStorage.getItem("confirmCommand"));

//déclaration de la variable pour pouvoir y mettre les prix dans le panier
let totalPrice = [];


 //prendre le prix  dans le panier
 for (let i = 0; i < cart.length; i++){
     let priceProduct = cart[i].price/100;
     //mettre les prix trouvé dans totalPrice
     totalPrice.push(priceProduct)  
 }

// //addition des prix avec reducer qui accumule chaque valeur d'une lite comme une addition
let reducer = (accumulator, currentValue) => accumulator + currentValue;
let priceTotal = totalPrice.reduce(reducer);//comme dans la MDN
console.log(priceTotal);

//affichage du prix total
let elementPrice = document.createElement('p');
elementPrice.setAttribute("class", "elementPrice");
document.getElementById('command').appendChild(elementPrice);
elementPrice.innerText = "Voici votre confirmation de commande Numéro ... "+`${value}`+"pour un prix total de : "+`${priceTotal}`+" €";



