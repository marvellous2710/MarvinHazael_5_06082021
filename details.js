const contCam = document.getElementById("containerDetails");
const urlParams = new URLSearchParams(window.location.search); //redirection vers autre page
const idProduct = urlParams.get("id");


fetch(`http://localhost:3000/api/cameras/` + idProduct)
  .then((res) => res.json())
  .then((data) => {
    let productContainer = newProduct(data);
    document.getElementById('containerDetails').appendChild(productContainer);
    addElement(data, 'descripText');
    console.log(data);


    const addButton = document.getElementById("basketBtn");
    const lenseAdd = document.getElementById("lenses");
    let verifMess = document.getElementById("error");
    
    
  
    

      addButton.addEventListener('click', () => {

        if (lenseAdd.value == 0){

          verifMess.textContent = 'Merci de choisir une lentille';//afficher un message d'erreur 
          console.log('not okay');

          return;
        } else{
          verifMess.textContent = "";// masquer le message d'erreur
          console.log('commandé !');
          let cart = getCart();
          data.lenses = document.getElementById('lenses').value;
          cart.push(data);
          localStorage.setItem('cart', JSON.stringify(cart));
          
          displayArticlesNumber();
          
          console.log(cart.length);
 
        };
      });

  });
 


// function pour le message d'erreur
function addMessErr(){
  const messError = document.createElement('span');
   messError.setAttribute("id", "error");  

   return messError;
}

      
 
//function pour la description
function addText(camera){

  const divText = document.createElement("div");

  const productDetails = document.createElement("p");

  productDetails.innerText = camera.description;

  divText.appendChild(productDetails);

  return productDetails;
}

//function pour le select
function addSelect(lenses){
  const newSelect = document.createElement('select');
  newSelect.setAttribute("id", "lenses");
  
  const defaultOption = document.createElement('option');
  defaultOption.innerText = 'Choix de la lentille...';
  defaultOption.value     = 0;

  newSelect.appendChild(defaultOption);

  lenses.forEach(option => {

    newSelect.appendChild(addOptionToSelect(option));
  });

  return newSelect;
}

//function pour les option
function addOptionToSelect(option) {
   /* Création de la balise option */
   const newOption = document.createElement('option');
  
   /* remplissage de la balise option */
   newOption.textContent = option;
   newOption.value = option;
  
   return newOption;
}


function addElement(camera, descripText){

  const containerLorem = document.createElement("div");//div container
  
  //ajout de la description de la camera
  const text = addText(camera);
  
  //ajout du select
  const select = addSelect(camera.lenses);

  const messError = addMessErr();

  //ajout du bouton commander
  const basketButton = document.createElement("button");
  basketButton.setAttribute("id", "basketBtn");
  basketButton.innerText = "Commander";

  containerLorem.appendChild(text);
  containerLorem.appendChild(select);
  containerLorem.appendChild(basketButton);
  containerLorem.appendChild(messError);

  document.getElementById(descripText).appendChild(containerLorem);
};