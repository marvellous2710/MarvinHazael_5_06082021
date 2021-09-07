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
    
     
     
  
    displayArticlesNumber();
 });

 let form = document.querySelector('#sendForm');

 form.email.addEventListener('change', function() {
    validEmail(this)
 });

 const validEmail = function(inputEmail) {
    let emailRgx = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$'
    );

    
 
 };



