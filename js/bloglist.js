const url= "http://localhost/worldkitchen/wp-json/wp/v2/posts";

// To show maximum 15 pages 
//const url= "http://localhost/worldkitchen/wp-json/wp/v2/posts?per_page=15"; 
const postContainer = document.querySelector(".blog-list");

async function getPosts(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }

    catch(error){
        console.log(error);
    }
}

getPosts();

function createHTML(posts){
    posts.forEach(function(post){
        console.log(post)
        postContainer.innerHTML += 
        `<div class="post">
            <img src="${post.better_featured_image.source_url}" alt="${post.content.rendered}">
            <h2>${post.title.rendered}</h2>
            ${post.excerpt.rendered}
        </div>`;
    })
}

