


async function getMovies() {
    const response = await fetch("https://www.omdbapi.com/?apikey=746eca60&s=fast");
    const moviesData = await response.json();
    const moviesListEl = document.querySelector(".movie__wrapper--general");

    moviesListEl.innerHTML = moviesData
    .map(
            (movie) => `<div class="movie__wrapper">
    <h3 class="movie__title"><span class="purple__1">Movie Title</span></h3>
    <img src="./img/fast6.jpg" alt="" class="movie__poster">
    <h4 class="movie__desc">
      <i class="fa-solid fa-calendar-days"></i>
      <span class="purple__1">2004</span>
    </h4>
    <h4 class="movie__desc">
      <i class="fa-solid fa-video"></i>
      <span class="purple__1">Movie</span>
    </h4>
    <h4 class="movie__desc">
      <i class="fa-brands fa-imdb"></i>
      <span class="purple__1">Imdb tt5433138</span>
    </h4>
  </div>`
  )
  .join("");
}

getMovies();