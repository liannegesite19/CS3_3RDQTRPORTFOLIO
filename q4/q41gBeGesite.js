const movieForm = document.getElementById('movieForm');
const movieDisplay = document.getElementById('movieDisplay');

displayMovies();

movieForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('movieTitle').value.trim();
    const genre = document.getElementById('movieGenre').value;
    const rating = parseFloat(document.querySelector('input[name="rating"]:checked')?.value || 0);

    let movies = JSON.parse(localStorage.getItem('movies')) || [];

    const existingMovieIndex = movies.findIndex(m => m.title.toLowerCase() === title.toLowerCase());

    if (existingMovieIndex !== -1) {
        const existingMovie = movies[existingMovieIndex];
        
        const averagedRating = (parseFloat(existingMovie.rating) + rating) / 2;
        
        movies[existingMovieIndex] = {
            title: title, 
            genre: genre,
            rating: averagedRating.toFixed(1) 
        };
    } else {
        movies.push({ title, genre, rating });
    }

    localStorage.setItem('movies', JSON.stringify(movies));
    movieForm.reset();
    displayMovies();
});

function deleteMovie(index) {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    
    if (confirm(`Are you sure you want to delete "${movies[index].title}"?`)) {
        movies.splice(index, 1); 
        localStorage.setItem('movies', JSON.stringify(movies)); 
        displayMovies(); 
    }
}

function displayMovies() {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    movieDisplay.innerHTML = '';

    movies.forEach((movie, index) => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        
        let starsHTML = '';
        const roundedRating = Math.round(movie.rating);
        for(let i = 1; i <= 5; i++) {
            starsHTML += `<span class="${i <= roundedRating ? 'display-star' : 'empty-star'}">★</span>`;
        }

        movieCard.innerHTML = `
            <div class="movie-info">
                <strong>${movie.title}</strong> (${movie.genre}) <br>
                ${starsHTML} <small>(${movie.rating})</small>
            </div>
            <button class="delete-btn" onclick="deleteMovie(${index})">Delete</button>
        `;
        movieDisplay.appendChild(movieCard);
    });
}
