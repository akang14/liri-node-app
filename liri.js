require("dotenv").config();
var axios = require("axios");

var Spotify = require("node-spotify-api");
var fs = require("fs");
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);


var request = process.argv[2];
var search_term = process.argv.slice(3).join(" ");

if (request === "spotify-this-song") {
    if (!search_term) {
        search_term = "The Sign"
        spotify
            .search({ type: 'track', query: search_term })
            .then(function (response) {
                var song = response.tracks.items[2];
                var songData = [
                    "Artist: " + song.artists[0].search_term,
                    "Song Name: " + song.search_term,
                    "Preview Link: " + song.preview_url,
                    "Album: " + song.album.search_term
                ].join("\n\n");
                console.log(songData);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    else {
        spotify
            .search({ type: 'track', query: search_term })
            .then(function (response) {
                var song = response.tracks.items[0];
                var songData = [
                    "Artist: " + song.artists[0].search_term,
                    "Song Name: " + song.search_term,
                    "Preview Link: " + song.preview_url,
                    "Album: " + song.album.search_term
                ].join("\n\n");
                console.log(songData);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}
else if (request === "movie-this") {
    if (!search_term) {
        search_term = "Mr. Nobody"
        axios
            .get("http://www.omdbapi.com/?t=" + search_term + "&y=&plot=short&apikey=trilogy")
            .then(function (response) {
                var movie = response.data;
                var movieData = [
                    "Title: " + movie.Title,
                    "Release Year: " + movie.Year,
                    "IMDB Rating: " + movie.imdbRating,
                    "Rotten Tomatoes Rating: " + movie.Ratings[1].Value,
                    "Location Produced: " + movie.Country,
                    "Language: " + movie.Language,
                    "Synopsis: " + movie.Plot,
                    "Starring: " + movie.Actors
                ].join("\n\n");
                console.log(movieData);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    else {
        axios
            .get("http://www.omdbapi.com/?t=" + search_term + "&y=&plot=short&apikey=trilogy")
            .then(function (response) {
                var movie = response.data;
                var movieData = [
                    "Title: " + movie.Title,
                    "Release Year: " + movie.Year,
                    "IMDB Rating: " + movie.imdbRating,
                    "Rotten Tomatoes Rating: " + movie.Ratings[1].Value,
                    "Location Produced: " + movie.Country,
                    "Language: " + movie.Language,
                    "Synopsis: " + movie.Plot,
                    "Starring: " + movie.Actors
                ].join("\n\n");
                console.log(movieData);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}
else if (request === "do-what-it-says") {
    fs.readFile("./random.txt", 'utf8', function (err, data) {
        if (err) return console.error(err);
        var text = data.split(",")
        var search_term = text[1];
        if (text[0] === "spotify-this-song") {
            if (!search_term) {
                search_term = "The Sign"
                spotify
                    .search({ type: 'track', query: search_term })
                    .then(function (response) {
                        var song = response.tracks.items[2];
                        var songData = [
                            "Artist: " + song.artists[0].search_term,
                            "Song Name: " + song.search_term,
                            "Preview Link: " + song.preview_url,
                            "Album: " + song.album.search_term
                        ].join("\n\n");
                        console.log(songData);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
            else {
                spotify
                    .search({ type: 'track', query: search_term })
                    .then(function (response) {
                        var song = response.tracks.items[0];
                        var songData = [
                            "Artist: " + song.artists[0].search_term,
                            "Song Name: " + song.search_term,
                            "Preview Link: " + song.preview_url,
                            "Album: " + song.album.search_term
                        ].join("\n\n");
                        console.log(songData);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        }
        else if (text[0] === "movie-this") {
            if (!search_term) {
                search_term = "Mr. Nobody"
                axios
                    .get("http://www.omdbapi.com/?t=" + search_term + "&y=&plot=short&apikey=trilogy")
                    .then(function (response) {
                        var movie = response.data;
                        var movieData = [
                            "Title: " + movie.Title,
                            "Release Year: " + movie.Year,
                            "IMDB Rating: " + movie.imdbRating,
                            "Rotten Tomatoes Rating: " + movie.Ratings[1].Value,
                            "Location Produced: " + movie.Country,
                            "Language: " + movie.Language,
                            "Synopsis: " + movie.Plot,
                            "Starring: " + movie.Actors
                        ].join("\n\n");
                        console.log(movieData);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
            else {
                axios
                    .get("http://www.omdbapi.com/?t=" + search_term + "&y=&plot=short&apikey=trilogy")
                    .then(function (response) {
                        var movie = response.data;
                        var movieData = [
                            "Title: " + movie.Title,
                            "Release Year: " + movie.Year,
                            "IMDB Rating: " + movie.imdbRating,
                            "Rotten Tomatoes Rating: " + movie.Ratings[1].Value,
                            "Location Produced: " + movie.Country,
                            "Language: " + movie.Language,
                            "Synopsis: " + movie.Plot,
                            "Starring: " + movie.Actors
                        ].join("\n\n");
                        console.log(movieData);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        }
        
    })
}
