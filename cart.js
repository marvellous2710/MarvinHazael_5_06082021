

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




let sendButton = document.getElementById('sendForm');

sendButton.addEventListener('submit', e => {
    
    e.preventDefault();

    let lastNameRegExp   = new RegExp('^[a-zA-Z- ]{3,50}$');
    let firstNameRegExp  = new RegExp('^[a-zA-Z- ]{3,50}$');
    let adressRegExp     = new RegExp('^[a-zA-Z0-9 ]{3,50}$');
    let zipCodeRegExp    = new RegExp('^((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B))[0-9]{3}$');
    let cityRegExp       = new RegExp('^[a-zA-Z0-9-]{3,50}$');
    let telRegExp        = new RegExp('^[0]{1}[0-9]{9}$');
    let emailRegExp      = new RegExp('^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-z]{2,5}$');

    let lastNameInput    = document.getElementById('lastName');
    let firstNameInput   = document.getElementById('firstName');
    let adressInput      = document.getElementById('adress');
    let zipCodeInput     = document.getElementById('zipCode');
    let cityInput        = document.getElementById('city');
    let numTelInput      = document.getElementById('numTel');
    let emailInput       = document.getElementById('email');

    
    function formValid(){
        return isValid(lastNameInput, lastNameRegExp) 
            && isValid(firstNameInput, firstNameRegExp) 
            && isValid(adressInput, adressRegExp)
            && isValid(zipCodeInput,zipCodeRegExp)
            && isValid(cityInput, cityRegExp)
            && isValid(numTelInput, telRegExp)
            && isValid(emailInput, emailRegExp);  
    }

//récupération des valeurs du formulaire

const formValue = {
    Name      : document.getElementById("lastName").value,
    FirstName : document.getElementById("firstName").value,
    Adress    : document.getElementById("adress").value,
    ZipCode   : document.getElementById("zipCode").value,
    City      : document.getElementById("city").value,
    Tel       : document.getElementById("numTel").value,
    Email     : document.getElementById("email").value,
}


//mettre formvalues dans le local storage
localStorage.setItem("formValue", JSON.stringify(formValue));


//FIN récupération des valeurs du formulaire


let isFormValid = formValid();

    if(isFormValid){
    location.href="command.html";
     console.log("Formulaire envoyé !");
    }else{
        
        console.log("nononon");
    }

  
});



















 /**
     * Cours rapide sur les booleen
     * 
     * == / === 
     * 1 == '1' => true mais 1 === '1' => faux parce que deux type différent
     * 
     * && => AND (et)
     * || => OR (ou)
     * 
     * true && true => true
     * true && false => false
     * false && true => false
     * false && false => false
     * 
     * true || true => true
     * false || false => false
     * true || false => true
     * false || true => true
     */