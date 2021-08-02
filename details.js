

const contCam = document.getElementById("containerDetails")

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);

const idProduct = urlParams.get("id");
console.log(idProduct);

fetch(`http://localhost:3000/api/cameras/` + idProduct)
  .then((res) => res.json())
  .then((data) => {
    newProduct(data, 'containerDetails');
    console.log(data)
  });













//------------------------------------------------------------//

 //récupèration de la chaine de requete dans l'url
//const queryStringUrlId = window.location.search;
//console.log(queryStringUrlId);


  //extraire l'id
//const camEra = new URLSearchParams(queryStringUrlId);
//console.log(camEra);

//const containerDetails = bonJour.get("_id");
//console.log(containerDetails); 
 


//  METHODE 1  let response = await fetch(`http://localhost:3000/api/cameras/` + containerDetails);

// let response = await fetch(`http://localhost:3000/api/cameras/_id);















