
const containerCamera = document.getElementById("container")


fetch("http://localhost:3000/api/cameras")
.then(function(res){
    if(res){
        return res.json();
    }
}) 

.then(function(arrayProduct){
    arrayProduct.forEach((camera) => {
        let productContainer = newProduct(camera);
        productContainer = addLink(camera._id, productContainer);
        document.getElementById('container').appendChild(productContainer);
    });
    
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


