
const containerCamera = document.getElementById("container")


fetch("http://localhost:3000/api/cameras")
.then(function(res){
    if(res){
        return res.json();
    }
}) 

.then(function(arrayProduct){
    newProduct(arrayProduct);
}) 

.catch(function(error){
    console.log(error);
})


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


     //recuperation du nom et du prix sur l'API

     nameCamera.innerText = camera.name;
     priceCamera.innerText = camera.price + "€";

     //ajout du nom et du prix
     divDescription.appendChild(nameCamera);
    divDescription.appendChild(priceCamera);


    return divDescription;
 }


 // FONCTION POUR APPELER LES PRODUITS

function newProduct(array){
    array.forEach((camera) => {

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
        document.getElementById("container").appendChild(containerProduct);

    })
};


//     /*
//     ajout des element HTML pour chaque élément de la reponse

//     debut boucle data
//         //Créer les objets DOM à ajouter dans la page
        
//         let cardDiv   = new Element('div');
//         cardDiv.addAttribut('attribut à ajouter', 'value');

//         let cardImage = new Element('img');

//         let cardLink  = new Element('a');

//         cardDiv.append(cardImage);
//         cardLink.append(cardDiv);

//         document.getElementById('container').append(cardLink);


//     fin boucle

//     */