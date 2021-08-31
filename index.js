
const containerCamera = document.getElementById("container");


fetch("http://localhost:3000/api/cameras") //va chercher les infos de l'API
.then(function(res){
    if (res.ok) {
        return res.json();//transforme en format JSON pour pouvoir les lire
    }

    throw Error;
}) 
.then(function(arrayProduct){
    arrayProduct.forEach((camera) => {
        let productContainer = newProduct(camera);
        productContainer = addLink(camera._id, productContainer);
        document.getElementById('container').appendChild(productContainer);
    });
    
    displayArticlesNumber();
}) 
.catch(function(error){
    console.log(error);
});



function addLink (cameraId, container){

    const link = document.createElement("a");
    link.setAttribute("href", "details.html?id=" + cameraId);
    link.appendChild(container);

    return link;
}


