const url= "https://localhostflower-power.shop/worldkitchen/wp-json/wp/v2/posts";
const remainingurl = "https://localhostflower-power.shop/worldkitchen/wp-json/wp/v2/posts?page=2"
const postContainer = document.querySelector(".blog-list");
const perPage = document.querySelector(".per-page-selection");
const categories = document.querySelectorAll(".categories");
const searchButton = document.querySelector(".search-button");


async function getPosts(url){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }

    catch(error){
        console.log(error);
    }
}

getPosts(url);

btnShowRemaining.addEventListener("click", () => {
    getPosts(remainingurl);
    document.getElementById("btnShowRemaining").style.visibility = "hidden"
  });  

function createHTML(posts){
    posts.forEach(function(post){
        console.log(post.id)
        postContainer.innerHTML += 
        `<div class="post bloglist-post">
            <a href="details.html?id=${post.id}"><img src="${post.better_featured_image.source_url}"></a>
            <a href="details.html?id=${post.id}">${post.title.rendered}</a>
            <a id="date" href="details.html?id=${post.id}">${post.date.slice(0, -9)}</a>
        </div>`;
    })
}


