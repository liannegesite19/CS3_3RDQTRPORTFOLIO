const movieForm = document.getElementById('movieForm');
const movieDisplay = document.getElementById('movieDisplay');

displayMovies();

movieForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('movieTitle').value;
    const genre = document.getElementById('movieGenre').value;
    const rating = document.querySelector('input[name="rating"]:checked')?.value || 0;

    const newMovie = { title, genre, rating };

    const existingMovies = JSON.parse(localStorage.getItem('movies')) || [];
    existingMovies.push(newMovie);
    localStorage.setItem('movies', JSON.stringify(existingMovies));

    movieForm.reset();
    displayMovies();
});

function displayMovies() {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    movieDisplay.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        
        let starsHTML = '';
        for(let i = 1; i <= 5; i++) {
            starsHTML += `<span class="star ${i <= movie.rating ? 'active' : ''}">★</span>`;
        }

        movieCard.innerHTML = `
            <strong>${movie.title}</strong> (${movie.genre}) <br>
            ${starsHTML}
        `;
        movieDisplay.appendChild(movieCard);
    });
}