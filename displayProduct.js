// // fonction pour ajouter une balise a 

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
    const productDetails = document.createElement("p");
    const basketButton = document.createElement("button");

    //menu déroulant
    const scrollingMenu = document.createElement("select");
    const lensesChoice = document.createElement("option");
    
    
    


    //recuperation du nom et du prix sur l'API

    nameCamera.innerText = camera.name;
    priceCamera.innerText = camera.price/100 + "€";
    productDetails.innerText = camera.description;
    basketButton.innerText = "Commander";
    lensesChoice.innerText = camera.lenses;
    
    
    

    //ajout du nom , du prix, du panier
    divDescription.appendChild(nameCamera);
    divDescription.appendChild(priceCamera);
    divDescription.appendChild(productDetails);
    divDescription.appendChild(basketButton);

    divDescription.appendChild(scrollingMenu);
    scrollingMenu.appendChild(lensesChoice);



   


    return divDescription;
}


// FONCTION POUR APPELER LES PRODUITS

function newProduct(camera, container){
   //array.forEach((camera) => {

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