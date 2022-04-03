


async function getMovies() {
    const response = await fetch('https://www.omdbapi.com/?apikey=746eca60&s=fast');
    const data = await response.json();
    
}

getMovies();