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
    let nbArticle = document.querySelector("#cart");
    nbArticle.innerText = cart.length;  
}




 




