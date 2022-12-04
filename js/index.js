const url = "https://localhostflower-power.shop/worldkitchen/wp-json/wp/v2/posts?per_page=13";
let slideIndex = 1;

async function getPosts(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
        loadCarousel();
    }

    catch(error){
        console.log(error);
    }
}

getPosts();

function createHTML(posts){
    const postContainer = document.querySelector(".slideshow-container");
    const slideshowDots = document.querySelector(".slideshow-dots");
    const featuredDishes = document.querySelector(".featured-dishes");

    posts.forEach(function(post,index){
        postContainer.innerHTML += 
        `<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
        <div class="mySlides">
            <a href="details.html?id=${post.id}"><img src="${post.better_featured_image.source_url}" style="width:100%">
            <div class="text">${post.title.rendered}</div>
        </div>`

        slideshowDots.innerHTML +=
        `<span class="dot" onclick="currentSlide(${index+1})"></span>`

        if(index >= 9) {
            featuredDishes.innerHTML +=
            `<div class="post bloglist-post">
                <a href="details.html?id=${post.id}"><img src="${post.better_featured_image.source_url}"></a>
                <a href="details.html?id=${post.id}">${post.title.rendered}</a>
            </div>`;
        }
    })
}


function loadCarousel() {
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

