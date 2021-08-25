const contCam = document.getElementById("containerDetails");
const urlParams = new URLSearchParams(window.location.search); //redirection vers autre page
const idProduct = urlParams.get("id");



fetch(`http://localhost:3000/api/cameras/` + idProduct)
  .then((res) => res.json())
  .then((data) => {
    //enregistrer le produit recupéré dans le localStorage (currentItem)
    let productContainer = newProduct(data);
    document.getElementById('containerDetails').appendChild(productContainer);
    addElement(data, 'descripText');
    console.log(data);


    const addButton = document.getElementById("basketBtn");
    const lenseAdd = document.getElementById("lenses");
    let cart = 0;
    let element = document.querySelector("#cart");
    element.innerText = cart;
    let verifMess = document.getElementById("error");
    let produit = JSON.parse(localStorage.getItem("currentItem"));

      addButton.addEventListener('click', () => {

        if (lenseAdd.value == 0){

          verifMess.textContent = 'Merci de choisir une lentille';//afficher un message d'erreur 
          console.log('not okay');

          return;
        } else{
          verifMess.textContent = "";//pour masquer le message d'erreur
          console.log('commandé !');

         produit = data.option;
        }

        
       //ajouter a produit(currentItem) la lentille selectionnée
        //recupere le panier avec getCart()
        //ajoute la nouvelle camera dans le panier avec la lentille (produit)
        //mettre à jour le nbArticle en affichant la taille du panier
        //ne pas oublier de réenregistrer le panier dans le localStorage :)
        

        //  cart++;
        //  element.innerText = cart;
         //console.log(cart);
        
       

        // if(produit){

        // }
        // else{
        //   produit = [];
        //   produit.push(data);
        //   console.log(produit)
        // }

        // remettre le select lentille au choix par defaut
      });
  
  
    //localStorage.setItem('currentCamera', JSON.stringify(data));  //LOCAL STORAGE
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

  // const basketButton = addButton();
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



//verifier si une lentille est sélectionnée, soit la valeur de l'element select différente de 0
//             //Si une lentille est sélectionnée alors :
//                 //recuperer le panier
//                 //recuperer la camera courante
//                 //Affecter la lentille selectionnée dans l'objet camera
//                 //enregistrer la camera dans le panier (le tableau)
//                 //enregistrer le panier dans le localStorage
//                 //mettre à jour l'affichage du nb article
//             //Sinon message d'erreur invitant l'utilisateur à selectionner une lentille