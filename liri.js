// OMDB-apiKey = http://www.omdbapi.com/?i=tt3896198&apikey= df704d12

require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var dashes = "\n--------------------------------------------------------"
var command = process.argv[2];

var movieName = "";


// for (var i = 3; i < process.argv.length; i++) {

//   if (i > 2 && i < process.argv.length) {
//     movieName = movieName + "+" + process.argv[i];
//   } else {
//     movieName += process.argv[i];
//   }
// }
if (command === "spotify-this-song") {
  songQuery();
} else if (command === "movie-this") {
  movieQuery();
}



function songQuery(){
  
  var search = process.argv[3];
  if (search === undefined) {
    var search = "The Sign Ace of Base";
  }
  spotify.search({ type: 'track', query: search }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } else {
     
      // for(var i = 0; i < data.tracks.items[0].artists.length; i++) {
      //   if(i === 0) {
      //     console.log("Artist(s):    " + data.tracks.items[0].artists[i].name);
      //   } else {
      //     console.log("              " + data.tracks.items[0].artists[i].name);
      //   }
      // }
      console.log("Song:         " + data.tracks.items[0].name);
      console.log("Listen Here : " + data.tracks.items[0].preview_url);
      console.log("Album:        " + data.tracks.items[0].album.name);
  }
    var text = "\nSong: " + data.tracks.items[0].name + "\nListen Here: " + data.tracks.items[0].preview_url + "\nAlbum: " + data.tracks.items[0].album.name + dashes;

    fs.appendFile("random.txt", text, function (err){
      if (err) throw err; 
      console.log(err);
    })
  });
};


function movieQuery() {
  movieName = process.argv[3];
  var OMDBurl =  "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=df704d12";
  // console.log(OMDBurl);
  axios.get(OMDBurl).then(
    function(response) {
      console.log("Title:         " + response.data.Title)
      console.log("Year:          " + response.data.Year)
      console.log("Rating:        " + response.data.Rated)
      console.log("Rotten Tomato: " + response.data.Ratings[1].Value)
      console.log("Country:       " + response.data.Country)
      console.log("Language:      " + response.data.Language)
      console.log("Actors:        " + response.data.Actors)
      console.log("Plot:          " + response.data.Plot);

      var text = "\nTitle: " + response.data.Title + "\nYear: " + response.data.Year + "\nRating: " + response.data.Rated + "\nRotten Tomato: " + response.data.Ratings[1].Value + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nActors: " + response.data.Actors + "\nPlot: " + response.data.Plot + dashes;
      fs.appendFile("random.txt", text, function (err){
        if (err) throw err; 
        console.log(err);
    
      })
    }
  )
  .catch(function(error) {
    if (error.response) {

      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  })
}
