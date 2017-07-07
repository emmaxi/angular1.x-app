/**
 * Created by Emma on 7/5/17.
 */
(function(){
    angular
        .module('pocApp', [])
        .controller('pocController', pocController);

    function pocController($http) {
        var model = this;

        // event handlers
        model.searchMovie = searchMovie;
        model.searchMovieById = searchMovieById;

        function searchMovie(title){
            var url = "http://www.omdbapi.com/?apikey=852159f0&s=" + title;
            $http.get(url)
                 .then(function (response) {
                     model.movies = response.data.Search;
                 });
        }

        function searchMovieById(imdbID) {
            var url = "http://www.omdbapi.com/?apikey=852159f0&i=" + imdbID;
            $http.get(url)
                .then(function(response) {
                    model.movie = response.data;
                });
        }
    }
})();
