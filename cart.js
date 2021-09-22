

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




       

// -------------REGEXP---------------//
// let form = document.querySelector('#sendForm');

//     form.email.addEventListener('change', function(){
//         validEmail(this);
//     });
    
//     form.numTel.addEventListener('change', function(){
//         validTel(this);
//     });
    
//     form.city.addEventListener('change', function(){
//         validCity(this);
//     });
    
//     form.zipCode.addEventListener('change', function(){
//         validZipCode(this);
//     });
    
//     form.address.addEventListener('change', function(){
//         validAdress(this);
//     });
    
//     form.firstName.addEventListener('change', function(){
//         validFirstName(this);
//     });
    
//     form.lastName.addEventListener('change', function(){
//         validName(this);
//     });




       



// const validName = function(inputName){
//         let name = new RegExp(
//             '^[a-zA-Z-]{3,50}$', 'g'          
//         );

//         let testName = name.test(inputName.value);
//         let errorMess = inputName.nextElementSibling; 

//         if(testName){
//             errorMess.innerHTML = '';
//         } else {
//              errorMess.innerHTML = 'Nom non valide';
//         }
// };

// const validFirstName = function(inputFirstName){

//         let  firstName = new RegExp(
//              '^[a-zA-Z-]{3,50}$', 'g'
//         );

//         let testFirstName = firstName.test(inputFirstName.value);
//         let errorMess = inputFirstName.nextElementSibling; 

//         if(testFirstName){
//             errorMess.innerHTML = '';
//         } else {
//              errorMess.innerHTML = 'Prénom non valide';
//         }
// };


// const validAdress = function(inputAdress){
//         let adress = new RegExp(
//             '^[0-9]{2,5}+[a-zA-Z,-]{3,50}$', 'g'
//         );

//         let testAdress = adress.test(inputAdress.value);
//         let errorMess = inputAdress.nextElementSibling; 

//         if(testAdress){
//             errorMess.innerHTML = '';
//         } else {
//              errorMess.innerHTML = 'Adresse non valide';
//         }
// };


// const validZipCode = function(inputZipCode){
//             let zipCodeRegExp = new RegExp(
//                 '^[0-9]{5}([a-zA-Z-]{,3})?$', 'g'
//             );
    
//             let testZipCode = zipCodeRegExp.test(inputZipCode.value);
//             let errorMess = inputZipCode.nextElementSibling; 
    
//             if(testZipCode){
//                 errorMess.innerHTML = '';
//             } else {
//                  errorMess.innerHTML = 'Email non valide';
//             }    
// };


// const validCity = function(inputCity){
//         let cityRegExp = new RegExp(
//             '^[a-zA-Z0-9-]{3,50}$', 'g'
//         );

//         let testCity = cityRegExp.test(inputCity.value);
//         let errorMess = inputCity.nextElementSibling; 

//          if(testCity){
//             errorMess.innerHTML = '';
//          } else {
//              errorMess.innerHTML = 'Ville non valide';
//          }     
// };



// const validTel = function(inputTel){
//         let telRegExp = new RegExp(
//             '^[0]{1}[0-9]{9}$', 'g'
//         );

//         let testTel = telRegExp.test(inputTel.value);
//         console.log(testTel);
//          let errorMess = inputTel.nextElementSibling; 

//          if(testTel){
//             errorMess.innerHTML = '';
//          } else {
//              errorMess.innerHTML = 'Téléphone non valide';
//          }
// };
    

// const validEmail = function(inputEmail){
//     let emailRegExp = new RegExp('^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-z]{2,5}$', 'g');
//     let inPut = emailRegExp.test(inputEmail.value);
//     let errorMess = inputEmail.nextElementSibling; 
//     let inputId = document.getElementById('email');
   

//     if(inPut){                
//         errorMess.textContent = '';                   
//     } else if(inputId.value === ''){               
//         errorMess.textContent = "Champ vide";
//         errorMess.style.color = "yellow";   
//     } else {                       
//         errorMess.textContent = 'Email non valide (Ex: aaa@aaa.com)';                               
//     }       
// };




// let sendButton = document.getElementById('pushButton');
// let inputId = document.getElementsByTagName('input');
// let messageError = inputId.nextElementSibling; 



// if(inputElement){                
//     message.textContent = '';                   
// } else if(inputElement.value === ''){               
//     message.textContent = "Champ vide";
//     message.style.color = "yellow";   
// } else {                       
//     message.textContent = 'Non valide';                               
// }











// function validForm(e){
//     e.preventDefault();
//     //return errorMessage ('idInput', nomDeLaRegex,"message");
//     return errorMessage ('lastName', lastName,"Nom non valide");
 
// }


// function validName(e){
//     e.preventDefault();
//     return errorMessage ('lastName', lastName,"Nom non valide");
// }

// function validFirstName(e){
//     e.preventDefault();
//     return errorMessage ('firstName', firstName,"Prénom nom valide");
// }

// function validAdress(e){
//     e.preventDefault();
//     return errorMessage ('adress', adressCity,"Adresse non valide");
// }

// form.email.addEventListener('change', function(){
// validEmail(this);


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

    let lastNameRegExp   = new RegExp('^[a-zA-Z-]{3,50}$');
    let firstNameRegExp  = new RegExp('^[a-zA-Z-]{3,50}$');
    let adressRegExp     = new RegExp('^[a-zA-Z0-9._-]$');
    let zipCodeRegExp    = new RegExp('^[0-9]{5}$');
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

    let isFormValid = formValid();

    if(isFormValid){
        console.log("yayouou");
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