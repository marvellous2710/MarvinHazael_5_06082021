
let userData = [];
let _id = [];

const fetchUser = async () => {
    await fetch("http://localhost:3000/api/cameras")
    .then((res) => res.json())
    .then((data) => (userData = data));
    

    console.log(userData);
}

const userDisplay = async () => {
    await fetchUser();

    document.getElementById('container').innerHTML = userData
    .map(
        (user) => 
    `
    <a href="details.html?detailsproducts${user._id}">     
        <article class="cards">
            <img src=${user.imageUrl} alt="${user.name}">
                <div class="text">
                    <h3>${user.name}<h3/>
                        <p>${user.price}€</p>
                           <p>${user.description}</p>
                                <a href="details.html"><button>Détails</button></a>
                </div>
         </article>
    </a>
    
    `
    )
    .join("");//pour enlever les virgules du rendu ----------- ?${_id[i]}
};

userDisplay();



//LA PAGE CAM ALONE


