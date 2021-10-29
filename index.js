fetch("http://localhost:3000/api/cameras") //va chercher les infos de l'API
.then(function(response){
    if (response.ok) {
        return response.json();//transforme en format JSON pour pouvoir les lire
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
    location.href="error.html";

    return error;
});


// pour que les cameras soient des liens
function addLink (cameraId, container){
    const link = document.createElement("a");
    link.setAttribute("href", "details.html?id=" + cameraId);
    link.appendChild(container);

    return link;
}
