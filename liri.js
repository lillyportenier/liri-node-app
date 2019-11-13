// OMDB-apiKey = http://www.omdbapi.com/?i=tt3896198&apikey= df704d12

require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");


var spotify = new Spotify(keys.spotify);

var proArgv2 = process.argv[2];
var proArgv3 = process.argv[3];

var spngQuery = function (track){
  spotify.search({ type: 'track', query: "Hello" }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } else {
      for(var i = 0; i < data.tracks.items[0].artists.length; i++) {
        if(i === 0) {
          console.log("Artist(s):    " + data.tracks.items[0].artists[i].name);
        } else {
          console.log("              " + data.tracks.items[0].artists[i].name);
        }
      }
      console.log("Song:         " + data.tracks.items[0].name);
      console.log("Listen Here : " + data.tracks.items[0].preview_url);
      console.log("Album:        " + data.tracks.items[0].album.name);
    }
  // console.log(data); 
  });
};
