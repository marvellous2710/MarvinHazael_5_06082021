

const contCam = document.getElementById("containerDetails");
const urlParams = new URLSearchParams(window.location.search); //redirection vers autre page
console.log(urlParams);
const idProduct = urlParams.get("id");



fetch(`http://localhost:3000/api/cameras/` + idProduct)
  .then((res) => res.json())
  .then((data) => {
    newProduct(data, 'containerDetails');
    console.log(data);

    localStorage.setItem('currentCamera', JSON.stringify(data));

    data.lenses.forEach(option => {
      //const/let newLenses = addOptionToSelect(option);
      document.getElementById('lensesSelect').appendChild(addOptionToSelect(option));
    });
  });
  


  function addOptionToSelect(option) {
    /* Création de la balise option */
    const newOption = document.createElement('option');
    newOption.classList.add('lense');

    /* remplissage de la balise option */
  
    newOption.textContent = option;
    newOption.value = option;

    return newOption;
  }
 




















