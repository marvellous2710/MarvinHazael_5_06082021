function getCart() {
    let cart = localStorage.getItem("cart");
    
    if (cart === null) {
        return [];
    }

    return JSON.parse(cart);
}

function displayArticlesNumber() {
    let cart = getCart();
    //afficher le nombre d'articles
    let element = document.querySelector("#cart");
    localStorage.setItem('cart', JSON.stringify(cart));
    element.innerText = cart.length;
}


