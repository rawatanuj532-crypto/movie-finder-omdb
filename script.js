let seacrh_button = document.querySelector('.search-btn');
let input = document.querySelector('.input');
let movie_name = document.querySelector('.title');
let img = document.querySelector('.movie-card img');
let year = document.querySelector('.year span');
let rating = document.querySelector('.rating span');
let plot = document.querySelector('.plot p');
let runtime = document.querySelector('.runtime span');
let actors = document.querySelector('.actors span');
let defaultHeading = document.querySelector('.default-heading');
let info = document.querySelector('.info');


input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        seacrh_button.click();
    }

});

seacrh_button.addEventListener('click', () => {

   

    if (input.value === "") {
        alert('Enter any MovieName');
        return;
    }

    defaultHeading.style.display ="none";
    info.style.display = "flex";

    const ApiKey = "608a54bc";
    const ApiUrl = "https://www.omdbapi.com/";

    movie_name.textContent = "Loading..."


    async function getmovie(movie) {

        let response = await fetch(`${ApiUrl}?t=${movie}&apikey=${ApiKey}`);

        let data = await response.json();


        if (data.Response === "False") {

            alert('movie not found');

            movie_name.textContent = "Movie not found";
            img.src = "";
            year.textContent = "";
            rating.textContent = "";
            plot.textContent = "";
            actors.textContent = "";
            runtime.textContent = "";
            return;
        }

        


        movie_name.textContent = data.Title;
        img.src = data.Poster;
        year.textContent = data.Year;

        let ratingvalue = Math.round(data.imdbRating / 2);
        rating.textContent = "⭐".repeat(ratingvalue);

        plot.textContent = data.Plot;
        actors.textContent = data.Actors;
        runtime.textContent = data.Runtime;

    }

    getmovie(input.value);

    input.value = "";
});

