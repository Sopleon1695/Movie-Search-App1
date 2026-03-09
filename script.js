const searchInput=document.querySelector("input");
const searchButton=document.querySelector("button");
const movieContainer=document.getElementById("movie-container");

// searchButton.addEventListener("click", function(){
//     console.log("Search button clicked");
// });
searchInput.addEventListener("keydown",function(event){
    if(event.key== "Enter"){
        searchButton.click();
    }
})
const hotMovies = [
"avengers endgame",
"black panther",
"thor ragnarok",
"guardians of the galaxy",
"captain america civil war",
"iron man",
"doctor strange",
"ant-man",
"shang-chi",
"captain marvel",
"spider-man homecoming",
"spider-man far from home",
"deadpool",
"logan"
];


const popularMovies = [
"avatar",
"titanic",
"jurassic park",
"the dark knight",
"inception",
"interstellar",
"the matrix",
"the lord of the rings",
"harry potter",
"gladiator",
"mad max fury road",
"top gun maverick",
"the batman",
"oppenheimer"
];

const animeMovies = [
"naruto",
"naruto shippuden",
"one piece",
"dragon ball super",
"attack on titan",
"demon slayer",
"jujutsu kaisen",
"my hero academia",
"tokyo ghoul",
"death note",
"fullmetal alchemist",
"bleach",
"sword art online",
"your name"
];
// show movies when page loads
window.onload = function(){

// HOT MOVIES
movieContainer.innerHTML = "";

hotMovies.forEach(movie => {

fetch(`https://www.omdbapi.com/?apikey=f5676078&s=${movie}`)
.then(res => res.json())
.then(data => {

if(data.Search){

const firstMovie = data.Search[0];

const movieCard = `
<div class="movie-card">
<img src="${firstMovie.Poster}">
<div class="movie-info">
<h3>${firstMovie.Title}</h3>
<p>${firstMovie.Year}</p>
</div>
</div>
`;

movieContainer.innerHTML += movieCard;

}

});

});


// POPULAR MOVIES
const popularContainer = document.getElementById("popular-container");

popularMovies.forEach(movie => {

fetch(`https://www.omdbapi.com/?apikey=f5676078&s=${movie}`)
.then(res => res.json())
.then(data => {

if(data.Search){

const firstMovie = data.Search[0];

const movieCard = `
<div class="movie-card">
<img src="${firstMovie.Poster}">
<div class="movie-info">
<h3>${firstMovie.Title}</h3>
<p>${firstMovie.Year}</p>
</div>
</div>
`;

popularContainer.innerHTML += movieCard;

}

});

});


// ANIME SERIES
const animeContainer = document.getElementById("anime-container");

animeMovies.forEach(movie => {

fetch(`https://www.omdbapi.com/?apikey=f5676078&s=${movie}`)
.then(res => res.json())
.then(data => {

if(data.Search){

const firstMovie = data.Search[0];

const movieCard = `
<div class="movie-card">
<img src="${firstMovie.Poster}">
<div class="movie-info">
<h3>${firstMovie.Title}</h3>
<p>${firstMovie.Year}</p>
</div>
</div>
`;

animeContainer.innerHTML += movieCard;

}

});

});

};
// ___________________________________________________________________________________________________



// --------------------------------------------------------------------------------------------------
// show movies when search movies
searchButton.addEventListener("click",function(){

    const movieName= searchInput.value;

    fetch(`https://www.omdbapi.com/?apikey=f5676078&s=${movieName}`)
    .then(response => response.json())
    .then(data => {

        movieContainer.innerHTML="";
        data.Search.forEach(movie => {

            const movieCard = `
            <div class="movie-card">
                <img src="${movie.Poster}">
                <div class="movie-info">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                </div>
            </div>
            `;

            movieContainer.innerHTML += movieCard;

        });


    });
});
// ______________________________________________________
// Notification for contact  

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert("✅ Message Sent Successfully!");

form.reset();

});

}