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


//fonction pour afficher l'orderID 
function commandConfirm() {
    let conFirmation = localStorage.getItem("confirmCommand");
    
    if (conFirmation === null) {
        
        return [];      
    }

    return JSON.parse(conFirmation);
}
