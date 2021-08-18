

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
      const newLenses = addOptionToSelect(option);

      //let ou const au dessus
      document.getElementById('lassIz').appendChild(addOptionToSelect(option));
    });
  });
  
 
//function pour la description
function addText(camera){

  const divEcho = document.createElement("div");

  const productDetails = document.createElement("p");

  productDetails.innerText = camera.description;

  divEcho.appendChild(productDetails);

  return productDetails;
}



//function pour les option
function addOptionToSelect(option) {
  /* Création de la balise option */
  const newOption = document.createElement('option');
  newOption.setAttribute("id", "lassIz");

  /* remplissage de la balise option */

  newOption.textContent = option;
  newOption.value = option;

  return newOption;
}




function addElement(camera, descripText){

  const containerLorem = document.createElement("div");//div container
  
  //ajout de la description de la camera
  const text = addText(camera);
  
  //ajout des options pour les lentilles
  const lense = addOptionToSelect(camera);

  //ajout du bouton commander
  const basketButton = document.createElement("button");
  basketButton.setAttribute("id", "basket_btn");


  basketButton.innerText = "Commander";

  containerLorem.appendChild(text);
  containerLorem.appendChild(lense);
  containerLorem.appendChild(basketButton);

  document.getElementById(descripText).appendChild(containerLorem);
};
















