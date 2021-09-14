
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
let form = document.querySelector('#sendForm');

form.email.addEventListener('change', function(){
validEmail(this);
});

form.numTel.addEventListener('change', function(){
validTel(this);
});

form.city.addEventListener('change', function(){
validCity(this);
});

form.zipcode.addEventListener('change', function(){
validZipCode(this);
});

form.address.addEventListener('change', function(){
validAdress(this);
});

form.firstName.addEventListener('change', function(){
validFirstName(this);
});

form.lastName.addEventListener('change', function(){
validName(this);
 });

       



const validName = function(inputName){
        let name = new RegExp(
            '^[a-zA-Z-]{3,50}$', 'g'          
        );

        let testName = name.test(inputName.value);
        let errorMess = inputName.nextElementSibling; 

        if(testName){
            errorMess.innerHTML = '';
        } else {
             errorMess.innerHTML = 'Nom non valide';
        }

};

const validFirstName = function(inputFirstName){

        let  firstName = new RegExp(
             '^[a-zA-Z-]{3,50}$', 'g'
        );

        let testFirstName = firstName.test(inputFirstName.value);
        let errorMess = inputFirstName.nextElementSibling; 

        if(testFirstName){
            errorMess.innerHTML = '';
        } else {
             errorMess.innerHTML = 'Prénom non valide';
        }

};


const validAdress = function(inputAdress){
        let adress = new RegExp(
            '^[0-9]{2,5}+[a-zA-Z,-]{3,50}$', 'g'
        );

        let testAdress = adress.test(inputAdress.value);
        let errorMess = inputAdress.nextElementSibling; 

        if(testAdress){
            errorMess.innerHTML = '';
        } else {
             errorMess.innerHTML = 'Adresse non valide';
        }

};


const validZipCode = function(inputZipCode){
            let zipCodeRegExp = new RegExp(
                '^[0-9]{5}+[a-zA-Z-]{1,3}$', 'g'
            );
    
            let testZipCode = zipCodeRegExp.test(inputZipCode.value);
            let errorMess = inputZipCode.nextElementSibling; 
    
            if(testZipCode){
                errorMess.innerHTML = '';
            } else {
                 errorMess.innerHTML = 'Email non valide';
            }
    
};


const validCity = function(inputCity){
        let cityRegExp = new RegExp(
            '^[a-zA-Z0-9-]{3,50}$', 'g'
        );

        let testCity = cityRegExp.test(inputCity.value);
        let errorMess = inputCity.nextElementSibling; 

         if(testCity){
            errorMess.innerHTML = '';
         } else {
             errorMess.innerHTML = 'Ville non valide';
         }

};



const validTel = function(inputTel){
        let telRegExp = new RegExp(
            '^[0]{1}[0-9]{9}$', 'g'
        );

        let testTel = telRegExp.test(inputTel.value);
        console.log(testTel);
         let errorMess = inputTel.nextElementSibling; 

         if(testTel){
            errorMess.innerHTML = '';
         } else {
             errorMess.innerHTML = 'Téléphone non valide';
         }

};
    
const validEmail = function(inputEmail){
           let emailRegExp = new RegExp(
               '^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-z]{2,5}$', 'g'
           );

           let testEmail = emailRegExp.test(inputEmail.value);
           console.log(testEmail);
            let errorMess = inputEmail.nextElementSibling; 

            if(testEmail){
                errorMess.innerHTML = '';
            } else {
                errorMess.innerHTML = 'Email non valide';               
            }

};


let validation = document.getElementById('pushButton');
let lastName = document.getElementById('lastName');

let nameError = document.querySelector('small');

validation.addEventListener('click', function (e) {
        if(lastName.value === ''){
            e.preventDefault();
            nameError.textContent = "Nom manquant";
            nameError.style.color = "yellow";
        }     
});


