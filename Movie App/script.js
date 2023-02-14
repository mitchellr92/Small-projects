const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9e980059befe35cecefa70df4fab4c51&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_URL =
  "https://api.themoviedb.org/3/search/moive?api_key=9e980059befe35cecefa70df4fab4c51&query='";
const main = document.getElementById("main");

const form = document.getElementById("form");
const search = document.getElementById("search");

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movies) => {
    const { title, poster_path, cote_average, overview } = movies;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});
