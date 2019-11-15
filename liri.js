
require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
moment().format();

var dashes = "\n--------------------------------------------------------"
var command = process.argv[2];
var value = "";
var track = "";

for (var i = 3; i < process.argv.length; i++) {

  if (i > 3 && i < process.argv.length) {
    value = value + "+" + process.argv[i];
  } else {
    value += process.argv[i];
  }
}
for (var i = 3; i < process.argv.length; i++) {

  if (i > 3 && i < process.argv.length) {
    track = track + " " + process.argv[i];
  } else {
    track += process.argv[i];
  }
}
if (command === "spotify-this-song") {
  songQuery(track);
} else if (command === "movie-this") {
  movieQuery(value);
} else if (command === "concert-this") {
  concertQuery(value);
} else if (command === "do-what-it-says") {
  doThis(track);
}



function songQuery(track) {
  if (track === undefined) {
    var track = "The Sign Ace of Base";
  }
  spotify.search({ type: 'track', query: track ,limit: 5 }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } else {
      for (var i = 0; i < data.tracks.items.length; i++) {
        console.log("Song #"+ (i+1)) + 
        console.log("Song:         " + data.tracks.items[i].name);
        console.log("Listen Here : " + data.tracks.items[i].preview_url);
        console.log("Album:        " + data.tracks.items[i].album.name);
        console.log(dashes);
        var text = "\nSong: " + data.tracks.items[i].name + "\nListen Here: " + data.tracks.items[i].preview_url + "\nAlbum: " + data.tracks.items[i].album.name + dashes;
        fs.appendFile("random.txt", text, function (err) {
          if (err){
            console.log(err, "append file error");
            throw err;
          } 
          
        })
      }
    }
  });
};


function movieQuery(value) {
  if (value === undefined) {
    var value = "Mr.Nobody";
  }
  var OMDBurl = "http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=df704d12";

  axios.get(OMDBurl).then(
    function (response) {
      console.log("Title:         " + response.data.Title)
      console.log("Year:          " + response.data.Year)
      console.log("Rating:        " + response.data.Rated)
      console.log("Rotten Tomato: " + response.data.Ratings[1].Value)
      console.log("Country:       " + response.data.Country)
      console.log("Language:      " + response.data.Language)
      console.log("Actors:        " + response.data.Actors)
      console.log("Plot:          " + response.data.Plot);

      var text = "\nTitle: " + response.data.Title + "\nYear: " + response.data.Year + "\nRating: " + response.data.Rated + "\nRotten Tomato: " + response.data.Ratings[1].Value + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nActors: " + response.data.Actors + "\nPlot: " + response.data.Plot + dashes;
      fs.appendFile("random.txt", text, function (err) {
        if (err) {
          console.log(err, "appendFile error");
          throw err
      }

      })
    }
  )
    .catch(function (error) {
      if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request, "catch error");
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config, "config error");
    })
};
function concertQuery(value) {
  axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
    function (response) {
      for (var i = 0; i < response.data.length; i++) {
        // console.log(value);
        var concertInfo =
          "\nVenue #"+ (i+1) +
          "\nVenue: " + response.data[i].venue.name +
          "\nLocation: " + response.data[i].venue.city +
          "\nDate: " + moment(response.data[i].datetime).format('LL') +
          "\n" + dashes;
          console.log(concertInfo);
          

        fs.appendFile("random.txt", concertInfo, function (err) {
          if (err) {
            console.log(err);
            throw err;
          }
        })
      }
    })
    .catch(function (error) {
      console.log(error, "catch error");
    });
};
function doThis(track) {

  fs.readFile("read.txt", "utf8", function(error, data) {
      if (error) {
          return console.log(error, "read.txt");
      }
      var dataArr = data.split(",");
      songQuery(dataArr[1])
  })
}
