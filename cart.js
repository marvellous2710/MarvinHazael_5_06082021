
displayArticlesNumber();//pour afficher le nombre d'article dans le panier
let cart = getCart();

if (cart.length === 0){
    let emptyCart = document.createElement('p');
    emptyCart.setAttribute("class", "emptyCard");
    emptyCart.innerText = 'Panier vide';
    
    document.querySelector('#basket').appendChild(emptyCart);

    let formUlar = document.getElementById("sendForm");
    formUlar.style.display = "none";

    let button = document.getElementById("pushButton");
    button.style.display = "none";

    let totalCommand = document.getElementsByClassName("total");
    totalCommand.style.display = "none";

} else {

    getCart().forEach(function(articleCart) {

        let card = document.createElement('article');
        document.querySelector('#basket').appendChild(card);
              
        let division = document.createElement('div');
        document.querySelector('#basket').appendChild(division);
        division.setAttribute("class", "resum-cart");
    
        let image = document.createElement('img');
        image.setAttribute("src", articleCart.imageUrl)
        document.querySelector('#basket').appendChild(image);
    
        let name = document.createElement('p');
        name.textContent = articleCart.name;
        document.querySelector('#basket').appendChild(name);
    
        let description = document.createElement('p');
        description.textContent = articleCart.description;
        document.querySelector('#basket').appendChild(description);
    
        let lenses = document.createElement('p');
        lenses.textContent = articleCart.lenses;
        document.querySelector('#basket').appendChild(lenses);
    
        let prix = document.createElement('p');
        prix.textContent = (articleCart.price/100).toFixed(2) + "€";
        document.querySelector('#basket').appendChild(prix);
     
        card.appendChild(image);
        division.appendChild(name);
        division.appendChild(description);
        division.appendChild(lenses);
        division.appendChild(prix);
        card.appendChild(division);    
    });
};
//-------------------------TOTAL PANIER ----------------------------//


let cartFinal = (cart) => {
    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++){
        let priceProduct = cart[i].price/100;
      
        totalPrice += priceProduct;
    }; 

    return totalPrice;
};

let totalPrice = cartFinal(cart);

let total = document.createElement('p');
total.innerText = "TOTAL : "+`${totalPrice}`+" €";
document.querySelector('#basket').appendChild(total);
total.setAttribute("class", "total");

//mettre le prix total dans le localstorage pour pouvoir le récupèrer dans la page de validation commande
localStorage.setItem("totalPrice", JSON.stringify(totalPrice));

//--------------------FIN TOTAL PANIER -----------------------------//


function isValid(inputElement, regex) {
    let messageContainer = inputElement.nextElementSibling;

    if (inputElement.value === ''){    
                   
        messageContainer.textContent = "Champ vide";
        messageContainer.style.color = "red";   

        return false;
    } else if (regex.test(inputElement.value) == false){ 
                              
        messageContainer.textContent = 'Non valide';  
        messageContainer.style.color = "red"; 

        return false;                            
    } else {
        messageContainer.textContent = "";

        return true;
    }
 
};



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
    //boolean true false
    let isFormValid = isValid(lastNameInput, lastNameRegExp);
    isFormValid     = isValid(firstNameInput, firstNameRegExp) && isFormValid;
    isFormValid     = isValid(adressInput, adressRegExp)       && isFormValid;
    isFormValid     = isValid(firstNameInput, firstNameRegExp) && isFormValid;
    isFormValid     = isValid(zipCodeInput,zipCodeRegExp)      && isFormValid;
    isFormValid     = isValid(cityInput, cityRegExp)           && isFormValid;
    isFormValid     = isValid(numTelInput, telRegExp)          && isFormValid;
    isFormValid     = isValid(emailInput, emailRegExp)         && isFormValid;


    let products  = [];
    let contact   = {    
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
        products.push(productCart._id);
    };


    //je rassemble contact et products dans une meme variable
    let infoCommand = {contact, products};

    //mettre infoCommand dans le local storage
    localStorage.setItem("infoCommand", JSON.stringify(infoCommand));

    if(isFormValid){
       
        location.href="command.html";
        
        fetch("http://localhost:3000/api/cameras/order", {
            method : "POST",
            headers: { "Content-Type" : "application/json"},
            body   : JSON.stringify(infoCommand),
        })
        .then(function(response){
            if (response.ok) {
                
                return response.json();
            }   
            throw Error;            
        })
        .then(function(infoCommand){

            let infoPageCommand = {
                orderId: infoCommand.orderId,
            }
            console.log(infoPageCommand);

            let commandLocalStorage = [];
            commandLocalStorage.push(infoPageCommand);
            localStorage.setItem("confirmCommand", JSON.stringify(commandLocalStorage));

        })
        .catch(function (error) {
            console.log(error);
        });
  
    } else {       
        console.log(error);
    }
});

