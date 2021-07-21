let userData = [];

const fetchUser = async () => {
    await fetch("http://localhost:3000/api/cameras")
    .then((res) => res.json())
    .then((data) => (userData = data));

    console.log(userData);
}

const userDisplay = async () => {
    await fetchUser();

    document.body.innerHTML = userData
    .map(
        (user) => 
    `
    <body>
    
        <article class="cards">
            <img src=${user.imageUrl} alt="${user.name}">
                <div class="text">
                    <h3>${user.name}<h3/>
                        <p>${user.price}€</p>
                            <p>${user.description}</p>
                </div>
        </article>
    
    </body>
    `
    )
    .join("");
};

userDisplay();
