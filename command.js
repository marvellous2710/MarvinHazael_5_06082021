let cart = getCart();
let orderDatas = orderData();


// if (cart.length !== 0){
//     // recup localStorage data
//     //clear le localStorage
//     let value = document.createElement('h1');
//     let finalOrderId = JSON.parse(localStorage.getItem("confirmCommand"));
//     let finalPrice = localStorage.getItem("totalPrice");

//     value.innerText = "Merci pour votre achat ! Voici votre confirmation de commande Numéro  " +`${finalOrderId[0].orderId}`+" pour un prix total de : " +`${finalPrice}`+" €";
//     document.getElementById('command').appendChild(value);

//     //création du lien vers la redirection index.html
//     let comeBackButton = document.createElement("a");
//     comeBackButton.setAttribute("href", "index.html");
//     comeBackButton.setAttribute("id", "backButton");
//     comeBackButton.innerText = "Revenir sur notre site";
//     document.querySelector('#command').appendChild(comeBackButton);  

//     //vider le localstorage
//     localStorage.clear();

// } else {
//     let comeBackButton = document.createElement("a");
//     comeBackButton.setAttribute("href", "index.html");
//     comeBackButton.setAttribute("id", "backButton");
//     comeBackButton.innerText = "Revenir sur notre site";
//     document.querySelector('#command').appendChild(comeBackButton);  
// }


if (orderDatas){
    // recup localStorage data
    //clear le localStorage
    let value = document.createElement('h1');
    let finalOrderId = JSON.parse(localStorage.getItem("confirmCommand"));
    let finalPrice = localStorage.getItem("totalPrice");

    value.innerText = "Merci pour votre achat ! Voici votre confirmation de commande Numéro  " +`${finalOrderId[0].orderId}`+" pour un prix total de : " +`${finalPrice}`+" €";
    document.getElementById('command').appendChild(value);

    //création du lien vers la redirection index.html
    let comeBackButton = document.createElement("a");
    comeBackButton.setAttribute("href", "index.html");
    comeBackButton.setAttribute("id", "backButton");
    comeBackButton.innerText = "Revenir sur notre site";
    document.querySelector('#command').appendChild(comeBackButton);  

    //vider le localstorage
    localStorage.clear();

} else {
    let comeBackButton = document.createElement("a");
    comeBackButton.setAttribute("href", "index.html");
    comeBackButton.setAttribute("id", "backButton");
    comeBackButton.innerText = "Revenir sur notre site";
    document.querySelector('#command').appendChild(comeBackButton);  
}




  
function orderData(){
    let orderDatas = localStorage.getItem("orderData");
    
    if (orderDatas === null) {
        
        return [];
    }

    return JSON.parse(orderDatas);
}
