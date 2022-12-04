const queryString = document.location.search;
console.log(queryString)
const params = new URLSearchParams(queryString);
console.log(params)
const id = params.get("id");
console.log(id)

if (id === null) {
    location.href = "/";
}

const url = "https://localhostflower-power.shop/worldkitchen/wp-json/wp/v2/posts/" + id;
console.log(url)
const idContainer = document.querySelector(".id");
const detailContainer = document.querySelector(".details");
const modalContainer = document.querySelector(".modal");

idContainer.innerHTML = id;

async function fetchID() {
    try {
        const response = await fetch(url);
        const ID = await response.json();
        console.log(ID);
        createHtml(ID);
    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = error;
    }
}

fetchID();

function createHtml(posts) {

    document.title = posts.name;

    detailContainer.innerHTML = `<h1>${posts.title.rendered}</h1>
                                 <img id="myImg" src=${posts.better_featured_image.source_url}> </img> 
                                 <p> ${posts.content.rendered}</p>
                                 <p> ${posts.date}</p>
                                 `;

    modalContainer.innerHTML = `<img id="modalImg" src=${posts.better_featured_image.source_url}> </img>`

    const img = document.getElementById("myImg");
    img.addEventListener("click", openModal);
}


 
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
  
overlay.addEventListener("click", closeModal);
  