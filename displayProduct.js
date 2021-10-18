// fonction pour ajouter les images
function addImage(camera){

    const imageFigureCamera = document.createElement("figure"); 
    
    const imageCamera = document.createElement("img");

    imageCamera.setAttribute("src", camera.imageUrl);
    imageFigureCamera.appendChild(imageCamera);
    
    return imageFigureCamera;
}

//div description
function addDescription(camera){

    const divDescription = document.createElement("div");
    divDescription.setAttribute("id", "descripText");
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
function newProduct(camera){
  

       //creation de la div produit
       const containerProduct = document.createElement("div");
       containerProduct.classList.add("cardsProduct"); //c'est le container des cartes
       
       //ajout des images
       const image = addImage(camera);

       //ajout du texte description
       const description = addDescription(camera);

       
       // Montage de la DIV
        image.appendChild(description);
        containerProduct.appendChild(image);

    return containerProduct;
};

