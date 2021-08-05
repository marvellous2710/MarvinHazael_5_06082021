// // fonction pour ajouter une balise a 

function addLink (camera){

    const link = document.createElement("div");
    
   
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
    basketButton.classList.add("basket_btn");

    //menu déroulant
    const scrollingMenu = document.createElement("select");
    scrollingMenu.setAttribute("id","lensesSelect");
    //const lensesChoice = document.createElement("option");
    
    const lenses = document.getElementsByClassName("lenses-class");

    const theLenses = "http://localhost:3000/api/cameras/"

    // const libila = urlParams.get("lenses");

    // function getLenses(){
    //     return new Promise((resolve, reject) => {
    //         fetch(`http://localhost:3000/api/cameras/` + libila)
    //         .then(data => data.json())
    //         .then(lenses => {
    //             console.log("lenses", lenses);
    //             resolve(lenses);
    //         })
    //     });
    // }

    // getLenses().then(data =>{
    //     let option;
    //     Object.entries(data.lenses).forEach(lenses => {
    //         option = document.createElement("option");
    //         option.text = lenses[0];
    //         lenses.add(option);
    //     });
    // });

    //recuperation du nom et du prix sur l'API

    nameCamera.innerText = camera.name;
    priceCamera.innerText = (camera.price/100).toFixed(2) + "€";
    productDetails.innerText = camera.description;
    basketButton.innerText = "Commander";
    //lensesChoice.innerText = camera.lenses;


    


    // const lensiz = [`http://localhost:3000/api/cameras/` + lenses];

    // lensiz.forEach(function(lense) {
    //     let option = document.createElement('option');

    //     document.querySelector('.lenses-class').appendChild(option);
    // });
    
  
    

    //ajout du nom , du prix, du panier
    divDescription.appendChild(nameCamera);
    divDescription.appendChild(priceCamera);
    divDescription.appendChild(productDetails);
    divDescription.appendChild(basketButton);

    divDescription.appendChild(scrollingMenu);
    //scrollingMenu.appendChild(lensesChoice);



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



//-----------PANIER---------------------------//

let basket = document.querySelectorAll('.basket_btn');

for (let i=0; i < basket.length; i++) {
    basket[i].addEventListener('click', () => {
        console.log("hello world");
    })
}



