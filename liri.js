// OMDB-apiKey = http://www.omdbapi.com/?i=tt3896198&apikey= df704d12

require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var dashes = "\n--------------------------------------------------------"
var command = process.argv[2];

var movieName = "";
var OMDBurl =  "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


if (command === "spotify-this-song") {
  songQuery();
}

function songQuery(){
  var search = process.argv[3];

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
  
}

