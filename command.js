let cart = getCart();


commandConfirm().forEach(function(localCommand) {
       

    //déclaration de la variable pour pouvoir y mettre les prix dans le panier
    let totalPrice = [];


    //prendre le prix  dans le panier
    for (let i = 0; i < cart.length; i++){
        let priceProduct = cart[i].price/100;
        //mettre les prix trouvé dans totalPrice
        totalPrice.push(priceProduct)  
    }

    //addition des prix avec reducer qui accumule chaque valeur d'une lite comme une addition
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let priceTotal = totalPrice.reduce(reducer);//comme dans la MDN
    console.log(priceTotal);

    let value = document.createElement('h1');
    value.innerText = "Voici votre confirmation de commande Numéro " +`${localCommand.orderId}`+" pour un prix total de : " +`${priceTotal}`+" €";
    document.getElementById('command').appendChild(value);


    //ajout du bouton commander
    const comeBackButton = document.createElement("button");
    comeBackButton.setAttribute("id", "backButton");
    comeBackButton.innerText = "Revenir sur notre site";
    document.getElementById('command').appendChild(comeBackButton);

    //ajout du bouton de redirection vers l'index + vider local storage
    comeBackButton.addEventListener('click', () => {
    location.href="index.html";
    localStorage.clear();
    });
});


