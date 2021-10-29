/**
 * Return cart data from local storage
 *
 * @returns []
 */
function getCart() {
    let cart = localStorage.getItem("cart");

    if (cart === null) {

        return [];
    }

    return JSON.parse(cart);
}


//affiche le nombre d'articles
function displayArticlesNumber() {
    let cart = getCart();
    let nbArticle = document.querySelector("#cart");
    nbArticle.innerText = cart.length;
}
