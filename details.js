

const contCam = document.getElementById("containerDetails");
const urlParams = new URLSearchParams(window.location.search); //redirection vers autre page
console.log(urlParams);
const idProduct = urlParams.get("id");



fetch(`http://localhost:3000/api/cameras/` + idProduct)
  .then((res) => res.json())
  .then((data) => {
    newProduct(data, 'containerDetails');
    addElement(data, 'descripText');
    console.log(data);

    localStorage.setItem('currentCamera', JSON.stringify(data));  //LOCAL STORAGE
    
    data.lenses.forEach(option => {
      //const newLenses = addOptionToSelect(option);

      //let ou const au dessus
     document.getElementById('lensesSelect').appendChild(addOptionToSelect(option));
    });
  });
  
 
//function pour la description
function addText(camera){

  const divText = document.createElement("div");

  const productDetails = document.createElement("p");

  productDetails.innerText = camera.description;

  divText.appendChild(productDetails);

  return productDetails;
}

//function pour le select
function addSelect(option){
   const newSelect = document.createElement('select');
   newSelect.setAttribute("id", "lenses");

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
  const select = addSelect(camera);

  //ajout des options pour les lentilles
  const lense = addOptionToSelect(camera);

  //ajout du bouton commander
  const basketButton = document.createElement("button");
  basketButton.setAttribute("id", "basket_btn");


  basketButton.innerText = "Commander";

  
  containerLorem.appendChild(text);
  containerLorem.appendChild(select);
  select.appendChild(lense);
  containerLorem.appendChild(lensesSelect);
  containerLorem.appendChild(basketButton);

  document.getElementById(descripText).appendChild(containerLorem);
};

//clique du bouton commander

let cart = 0

let btnAdd = document.querySelector('#basket_btn');

let element = document.querySelector("#cart")
element.innerText = cart

btnAdd.addEventListener('click', function(){

  cart++;
  element.innerText = cart;
  console.log(cart);
})













