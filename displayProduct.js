
 function addLink (camera){

    const link = document.createElement("a");
     link.setAttribute("href", "details.html?id="+camera._id);
     return link;
  }



// // fonction pour ajouter les images

function addImage(camera){

    const imageFigureCamera = document.createElement("figure");
    const imageCamera = document.createElement("img");

    imageCamera.setAttribute("src", camera.imageUrl);
    imageFigureCamera.appendChild(imageCamera);
    
    return imageFigureCamera;
}

// //div description

function addDescription(camera){

    const divDescription = document.createElement("div");
    divDescription.classList.add("descript_text");

    const nameCamera = document.createElement("p");
    const priceCamera = document.createElement("p");

    //recuperation du nom et du prix sur l'API
   
    nameCamera.innerText = camera.name;
    priceCamera.innerText = (camera.price/100).toFixed(2) + "€";
    

    //ajout du nom et du prix
    divDescription.appendChild(nameCamera);
    divDescription.appendChild(priceCamera);
   

   return divDescription;
}


// FONCTION POUR APPELER LES PRODUITS

function newProduct(camera, container){
  

       //creation de la div produit
       const containerProduct = document.createElement("div");
       containerProduct.classList.add("cardsProduct"); //c'est le container des cartes

       //ajout du lien
       const link = addLink(camera);
       
       //ajout des images
       const image = addImage(camera);

       //ajout du texte description
       const description = addDescription(camera);

       

       // Montage de la DIV
        

       link.appendChild(image);
       link.appendChild(description);
       containerProduct.appendChild(link);

       // AJOUT DE LA DIV DANS LE DOM (dans l'écran)
       document.getElementById(container).appendChild(containerProduct);
};



//addElement ();  //ajout bouton commander +lentilles+description

function addElement(camera){

    const divDescription = document.createElement("div");
    divDescription.classList.add("descript_text");  
   
  const productDetails = document.createElement("p");
  const basketButton = document.createElement("button");
  basketButton.setAttribute("id", "basket_btn");

  //recuperation du nom et du prix sur l'API

  productDetails.innerText = camera.description;
  basketButton.innerText = "Commander";
  
  
   divDescription.appendChild(productDetails);
   divDescription.appendChild(basketButton);
   divDescription.appendChild(lensesSelect);
  

  
   return divDescription;

};



 

/* ajouter addElement a detail.js pour avoir le bouton les lentilles */











       //-------------------PANIER-----------------------//

          //Clique du bouton COMMANDER

//         var cart = 0

//         var btnAdd = document.querySelector('#basket_btn')

//         var element = document.querySelector("#cart")
//         element.innerText = cart

//         btnAdd.addEventListener('click', function(){

//             cart++;
//             element.innerText = cart;
//             console.log(cart);

//             //verifier si une lentille est sélectionnée, soit la valeur de l'element select différente de 0
//             //Si une lentille est sélectionnée alors :
//                 //recuperer le panier
//                 //recuperer la camera courante
//                 //Affecter la lentille selectionnée dans l'objet camera
//                 //enregistrer la camera dans le panier (le tableau)
//                 //enregistrer le panier dans le localStorage
//                 //mettre à jour l'affichage du nb article
//             //Sinon message d'erreur invitant l'utilisateur à selectionner une lentille


//             // choix de l'utilisateur dans une variable
//             const choixForm = idForm.value;
//             console.log(choixForm);
        
//             // sélection du bouton d'ajout
//             const addBtn = document.querySelector("#basket_btn");


//         })
        
//         //Selection des OPTIONS LENSES
//         const idForm = document.querySelector("#lensesSelect");

//          // choix de l'utilisateur dans une variable
//          const choixForm = idForm.value;
       
     
//         // sélection du bouton d'ajout
//         const addBtn = document.querySelector("#basket_btn");       

