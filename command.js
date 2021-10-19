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
    let orderData = JSON.parse(localStorage.getItem("orderData"));

    messageConfirmation.innerText = `Merci pour votre achat ${orderData.contact.lastName} ${orderData.contact.firstName} ! Voici votre confirmation de commande Numéro   ${finalOrderId[0].orderId} pour un prix total de :  ${finalPrice} € livraison prévu au ${orderData.contact.address} ${orderData.contact.zipCode} ${orderData.contact.city}`;

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


        