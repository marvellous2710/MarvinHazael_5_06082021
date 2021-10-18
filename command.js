let cart       = getCart();
let orderDatas = orderData();

let redirectionButton = document.createElement("a");
redirectionButton.setAttribute("href", "index.html");
redirectionButton.setAttribute("id", "backButton");
redirectionButton.innerText = "Revenir sur notre site";
document.querySelector('#command').appendChild(redirectionButton);  


if (orderDatas){

    let messageConfirmation = document.createElement('h1');
    let finalOrderId = JSON.parse(localStorage.getItem("confirmCommand"));
    let finalPrice = localStorage.getItem("totalPrice");

    messageConfirmation.innerText = `Merci pour votre achat ! Voici votre confirmation de commande Numéro   ${finalOrderId[0].orderId} pour un prix total de :  ${finalPrice} €`;

    document.getElementById('command').appendChild(messageConfirmation);

    //vider le localstorage
    localStorage.clear();
}


function orderData(){
    let orderDatas = localStorage.getItem("orderData");
    
    if (orderDatas === null) {      
        return [];
    }
    return JSON.parse(orderDatas);
}