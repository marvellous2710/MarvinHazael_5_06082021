

displayArticlesNumber();//pour afficher le nombre d'article dans le panier

if (getCart() == 0){
    let emptyCart = document.createElement('p');
    emptyCart.setAttribute("class", "emptyCard");
    emptyCart.innerText = 'Panier vide';
    
    document.querySelector('#basket').appendChild(emptyCart);

    let formUlar = document.getElementById("sendForm");
    formUlar.style.display = "none";

    let button = document.getElementById("pushButton");
    button.style.display = "none";

} else {

     getCart().forEach(function(panier) {
        console.log(panier);
    
        let card = document.createElement('article');
        document.querySelector('#basket').appendChild(card);
            
    
        let division = document.createElement('div');
        document.querySelector('#basket').appendChild(division);
        division.setAttribute("class", "resum-cart");
    
        let image = document.createElement('img');
        image.setAttribute("src", panier.imageUrl)
        document.querySelector('#basket').appendChild(image);
    
        let name = document.createElement('p');
        name.textContent = panier.name;
        document.querySelector('#basket').appendChild(name);
    
        let description = document.createElement('p');
        description.textContent = panier.description;
        document.querySelector('#basket').appendChild(description);
    
        let lenses = document.createElement('p');
        lenses.textContent = panier.lenses;
        document.querySelector('#basket').appendChild(lenses);
    
        let prix = document.createElement('p');
        prix.textContent = (panier.price/100).toFixed(2) + "€";
        document.querySelector('#basket').appendChild(prix);
    
    
        card.appendChild(image);
        division.appendChild(name);
        division.appendChild(description);
        division.appendChild(lenses);
        division.appendChild(prix);
        card.appendChild(division); 
        
    });
        // let cart = getCart();
        // let totalPrice = [];


        // //prendre le prix  dans le panier
        // for (let i = 0; i < cart.length; i++){
        //     let priceProduct = cart[i].price/100;
        //     //mettre les prix trouvé dans totalPrice
        //     totalPrice.push(priceProduct)  
        // }

        // // //addition des prix avec reducer qui accumule chaque valeur d'une lite comme une addition
        // let reducer = (accumulator, currentValue) => accumulator + currentValue;
        // let priceTotal = totalPrice.reduce(reducer);//comme dans la MDN
        

        // let total = document.createElement('p');
        // total.innerText = "TOTAL : "+`${priceTotal}`+" €";// je veux TOTAL : ${total des prix trouvé dans le local storage}
        // document.querySelector('#basket').appendChild(total);
        // total.setAttribute("class", "total");
};



function isValid(inputElement, regex) {
    let messageContainer = inputElement.nextElementSibling;

    if(inputElement.value === ''){    
                   
        messageContainer.textContent = "Champ vide";
        messageContainer.style.color = "red";   

        return false;
    } else if(regex.test(inputElement.value) == false){ 
                              
        messageContainer.textContent = 'Non valide';  
        messageContainer.style.color = "red"; 

        return false;                            
    } else {

        messageContainer.textContent = "";

        return true;
    }
 
};





    // let lastNameRegExp   = new RegExp('^[a-zA-Z -]{3,50}$');
    // let firstNameRegExp  = new RegExp('^[a-zA-Z -]{3,50}$');
    // let adressRegExp     = new RegExp('^[a-zA-Z0-9 -]{3,50}$');
    // let zipCodeRegExp    = new RegExp('^((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B))[0-9]{3}$');
    // let cityRegExp       = new RegExp('^[a-zA-Z0-9 -]{3,50}$');
    // let telRegExp        = new RegExp('^[0][0-9]{9}$');
    // let emailRegExp      = new RegExp('^[a-z0-9._-]+@[a-z0-9]+\.[a-z]{2,5}$');

    // let lastNameInput    = document.getElementById('lastName');
    // let firstNameInput   = document.getElementById('firstName');
    // let adressInput      = document.getElementById('adress');
    // let zipCodeInput     = document.getElementById('zipCode');
    // let cityInput        = document.getElementById('city');
    // let numTelInput      = document.getElementById('numTel');
    // let emailInput       = document.getElementById('email');

    
    
    //récupération des valeurs du formulaire
    // let products = [];
 
    // let contact = {
       
    //         Name      : document.getElementById("lastName").value,
    //         FirstName : document.getElementById("firstName").value,
    //         Adress    : document.getElementById("adress").value,
    //         ZipCode   : document.getElementById("zipCode").value,
    //         City      : document.getElementById("city").value,
    //         Tel       : document.getElementById("numTel").value,
    //         Email     : document.getElementById("email").value,
      
    // };

    // let formValue = {contact, products}
    // let sendServer = {
    //     formValue,//les value du formulaire (nom,prénom,...)
    //     localStorage,//la commande du panier      
    // }

    //function fetchInos(){
        // fetch("http://localhost:3000/api/cameras/order", {
        //     method: "POST",
        //     headers: { "Content-Type" : "application/json"},
        //     body: JSON.stringify(formValue),
        // })
        // .then(function(res){
        //     if (res.ok) {
        //         return res.json();
        //     }   
        //     throw Error;            
        // })
        // .then(function(data){
        //     console.log(data)
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    //}

    


let sendButton = document.getElementById('sendForm');

sendButton.addEventListener('submit', e => {
    
    e.preventDefault();

    let lastNameRegExp   = new RegExp('^[a-zA-Z -]{3,50}$');
    let firstNameRegExp  = new RegExp('^[a-zA-Z -]{3,50}$');
    let adressRegExp     = new RegExp('^[a-zA-Z0-9 -]{3,50}$');
    let zipCodeRegExp    = new RegExp('^((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B))[0-9]{3}$');
    let cityRegExp       = new RegExp('^[a-zA-Z0-9 -]{3,50}$');
    let telRegExp        = new RegExp('^[0][0-9]{9}$');
    let emailRegExp      = new RegExp('^[a-z0-9._-]+@[a-z0-9]+\.[a-z]{2,5}$');

    let lastNameInput    = document.getElementById('lastName');
    let firstNameInput   = document.getElementById('firstName');
    let adressInput      = document.getElementById('adress');
    let zipCodeInput     = document.getElementById('zipCode');
    let cityInput        = document.getElementById('city');
    let numTelInput      = document.getElementById('numTel');
    let emailInput       = document.getElementById('email');

    

    //je place isFormValid ici pour qu'il soit actif uniquement au click !
    let isFormValid = isValid(lastNameInput, lastNameRegExp);
    isFormValid = isValid(firstNameInput, firstNameRegExp) && isFormValid;
    isFormValid = isValid(adressInput, adressRegExp)       && isFormValid;
    isFormValid = isValid(firstNameInput, firstNameRegExp) && isFormValid;
    isFormValid = isValid(zipCodeInput,zipCodeRegExp)      && isFormValid;
    isFormValid = isValid(cityInput, cityRegExp)           && isFormValid;
    isFormValid = isValid(numTelInput, telRegExp)          && isFormValid;
    isFormValid = isValid(emailInput, emailRegExp)         && isFormValid;




    
    
    let products  = [];
    

    let contact = {    
            lastName  : document.getElementById("lastName").value,
            firstName : document.getElementById("firstName").value,
            address   : document.getElementById("adress").value,
            zipCode   : document.getElementById("zipCode").value,
            city      : document.getElementById("city").value,
            tel       : document.getElementById("numTel").value,
            email     : document.getElementById("email").value,       
    }

    for (let i = 0; i < cart.length; i++) {
        let productCart = cart[i];
        products.push(productCart.id);
    };

    let formValue = {contact, products};

   
   

    //mettre formValues dans le local storage
    localStorage.setItem("formValue", JSON.stringify(formValue));

 

    if(isFormValid){
        location.href="command.html";
        console.log("Formulaire envoyé !");
 
            fetch("http://localhost:3000/api/cameras/order", {
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify(formValue),
            })
            .then(function(res){
                if (res.ok) {
                    return res.json();
                }   
                throw Error;            
            })
            .then(function(formValue){

            let cart = getCart();
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
            

            let total = document.createElement('p');
            total.innerText = "TOTAL : "+`${priceTotal}`+" €";
            document.querySelector('#basket').appendChild(total);
            total.setAttribute("class", "total");


            let infoPageCommand = {
                orderId: formValue.orderId,
                priceTotal: priceTotal
            }
            console.log(infoPageCommand);

            let commandLocalStorage = [];
            commandLocalStorage.push(infoPageCommand);
            localStorage.setItem("confirmCommand", JSON.stringify(commandLocalStorage));
            

            })
            .catch(function (error) {
                console.log(error);
            });
  

    }else{
        
        console.log("nononon");
    }

  
});