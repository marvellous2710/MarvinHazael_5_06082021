
displayArticlesNumber();//pour afficher le nombre d'article dans le panier

if (getCart() == 0){
    let emptyCart = document.createElement('p');
    emptyCart.setAttribute("class", "emptyCard");
    emptyCart.innerText = 'Panier vide';
    console.log(emptyCart);
    document.querySelector('#basket').appendChild(emptyCart);

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


// TELEPHONE

       

// EMAIL
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

       form.zipCode.addEventListener('change', function(){
        validZipCode(this);
       });






        const validZipCode = function(inputZipCode){
        let zipCodeRegExp = new RegExp(
            '^[0-9]{5}$', 'g'
        );

        let testZipCode = zipCodeRegExp.test(inputZipCode.value);
        let errorMess = inputEmail.nextElementSibling; 

        if(testZipCode){
         
        } else {
             errorMess.innerHTML = 'Email non valide';
             errorMess.classlist.add('text-danger');
        }

    };

       const validCity = function(inputCity){
        let cityRegExp = new RegExp(
            '^[a-zA-Z-]$', 'g'
        );

        let testCity = cityRegExp.test(inputCity.value);
        let errorMess = inputCity.nextElementSibling; 

         if(testCity){
             
         } else {
             errorMess.innerHTML = 'Ville non valide';
             errorMess.classlist.add('text-danger');
         }

        };



       const validTel = function(inputTel){
        let telRegExp = new RegExp(
            '^[0-9]{2}[0-9]{8}$', 'g'
        );

        let testTel = telRegExp.test(inputTel.value);
        console.log(testTel);
         let errorMess = inputTel.nextElementSibling; 

         if(testTel){
             
         } else {
             errorMess.innerHTML = 'Téléphone non valide';
             errorMess.classlist.add('text-danger');
         }

        };
    
       const validEmail = function(inputEmail){
           let emailRegExp = new RegExp(
               '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
           );

           let testEmail = emailRegExp.test(inputEmail.value);
           console.log(testEmail);
            let errorMess = inputEmail.nextElementSibling; 

            if(testEmail){
                
            } else {
                errorMess.innerHTML = 'Email non valide';
                errorMess.classlist.add('text-danger');
            }

       };
