console.log(movies);
function getMoviesByGenre(movies, genre) {
  return movies.filter((movie) => movie.genre === genre);
}
const moviesByGenre = getMoviesByGenre(movies, "Драма");
// console.log(moviesByGenre);
function getMoviesByDirector(movies, director) {
  return movies.filter((movie) => movie.director === director);
}
const moviesByDirector = getMoviesByDirector(movies, "Джеймс Камерон");
// console.log(moviesByDirector);
function getMoviesbyYear(movies, year) {
  return movies
    .filter((movie) => movie.year === year)
    .map((movie) => movie.title);
}
const moviesByYear = getMoviesbyYear(movies, 1999);
// console.log(moviesByYear);
function getMovieByDuration(movies, duration = 120) {
  return movies
    .filter((movie) => movie.duration < duration)
    .map((movie) => movie.title);
}
const moviesByDuration = getMovieByDuration(movies);
// console.log(moviesByDuration);
function sortMoviesByYear(movies) {
  return movies.toSorted((a, b) => a.year - b.year);
}
const sortMovies = sortMoviesByYear(movies);
// console.log(sortMovies);
function sortMoviesByDuration(movies) {
  return movies.toSorted((a, b) => b.duration - a.duration);
}
const sortMoviesDuration = sortMoviesByDuration(movies);
// console.log(sortMoviesDuration);
function getDirectorsByYear(movis, minYear = 2000, maxYear = 2010) {
  return movies
    .filter((movie) => movie.year >= minYear && movie.year <= maxYear)
    .map((movie) => movie.director);
}
const namesDirectors = new Set(getDirectorsByYear(movies));
// console.log(namesDirectors);
function getAverageDuration(movies) {
  return (
    movies.reduce((accumulator, movie) => accumulator + movie.duration, 0) /
    movies.length
  );
}
const averageDuration = getAverageDuration(movies)
console.log(averageDuration);
