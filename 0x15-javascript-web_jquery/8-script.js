/* global $ */
$(document).ready(function () {
  $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data) {
    const movies = data.results;
    const movieList = $('#list_movies');
    movies.forEach(function (movie) {
      movieList.append('<li>' + movie.title + '</li>');
    });
  });
});
