let cart = getCart();

if (cart.length !== 0){
    let value = document.createElement('h1');
    let finalOrderId = JSON.parse(localStorage.getItem("confirmCommand"));
    let finalPrice = localStorage.getItem("totalPrice");

    value.innerText = "Voici votre confirmation de commande Numéro  " +`${finalOrderId[0].orderId}`+" pour un prix total de : " +`${finalPrice}`+" €";
    document.getElementById('command').appendChild(value);

    //création du lien vers la redirection index.html
    let comeBackButton = document.createElement("a");
    comeBackButton.setAttribute("href", "index.html");
    comeBackButton.setAttribute("id", "backButton");
    comeBackButton.innerText = "Revenir sur notre site";
    document.querySelector('#command').appendChild(comeBackButton);  

    //vider le localstorage
    let storageClear = document.getElementById("backButton");
    storageClear.addEventListener('click', () => {
        if(cart.length !== 0){
            localStorage.clear();
        }
    });
}




  
