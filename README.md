<h1> Liri-node-app </h1>
<p> Contributor: Lillian Portenier </p>
<p> Created on: 11-14-2019 </p>

<h1>About the App</h1>
<p> LIRI is similar to iPhone's SIRI. However, SIRI is a Speech Interpretation and Recognition Interface, while LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data. </p>
 
<h1>Set Up</h1>
<ol>
  <li>Clone the repository</li>
  <li>Run npm install, this should install the following: 
    <ul>
      <li>axios</li>
      <li>dotenv</li>
      <li>moment</li>
      <li>node-spotify-api</li>
    </ul>
  <li>Create a .env file in the same directory as the rest of the files. These keys are created with a spotify developer account. In the .env file should be:

'# Spotify API keys'

'SPOTIFY_ID=your-spotify-ID-here'

'SPOTIFY_SECRET=your-spotify-secret-here'
    </li>
  </li>
</ol>

<h1>APIs Used</h1>
<ul>
  <li>Spotify Api</li>
  <li>OMDB Api</li>
  <li>Bandsintown Api</li>
</ul>

<h1>Available Commands</h1>
<ul>
  <li>spotify-this-song</li>
  <li>movie-this</li>
  <li>concert-this</li>
  <li>do-what-it-says</li>
</ul>
<h1>Command Usage</h1>
<ul>
  <li>Spotify-this-song:  This searches the Spotify API and returns the top five results of the song searched. In each response the name of the song, a link to the preview on Spotify, and the name of the album all appear in the command line.</li>
 <li>Movie-this:  This searches the OMBD API for the requested movie and displays information for the the movie result. This response shows the data in the command line such as moive title, release, year, rating, rotten tomato score, acotrs, plot and more.</li>
 <li>Concert-this:  This command searches the BandsInTown API for the artist that is requested. All the listing of the artists upcomming events are shown in the command line, with information such as the venue name, location, and time of the event. </li>
 <li>Do-what-it-says: This function takes in the information from the read.txt file and queries a result based on the text that is on the file. It will then populate the command line with the appropriate results based on what is in the read.txt file.</li>
</ul>
<p>Each of the commands will also take the data that was searched and save it in a seperate text file, random.txt. This is saved each time the user requests a search so the user has a record of what has been searched, and the data that was provided is in an easy to read and easy to find location. </p>

<h1>Spotify-this-song</h1>
<p>Here you can see how the spotify command line works, you simpliy input "node liri.js spotify-this-song" followed by the song you want to search. This is what the command line should look like on the input: </p>
<img src = "screenshots /spotify-this-song-pre-j.jpg">
<p>This is what the result should look like as well, as you can see the random.txt file as well as the terminal have been populated with the queried data. </p>
<img src = "screenshots /spotify-this-song-post.png">

<h1>Concert-this</h1>
<p>Here you can see the functionality of the concert commant, similar to the spotify command, you input "node liri.js concert-this" followed up with the artist you are looking to find. This is what the command line should look like: </p>
<img src = "screenshots /concert-this-pre.png">
<p>This is what the result should look like, with the terminal and the random.txt file both populating with the searched data.</p>
<img src = "screenshots /concert-this-post.png">

<h1>Movie-this</h1>
<p>This is an example of the movie command, you simpliy input "node liri.js movie-this" and then the movie you are searching for. This is an example of what it should look like: </p>
<img src = "screenshots /movie-this-pre.png">
<p>This is what the data results should look like, with the terminal and the random.txt files both populating with data.</p>
<img src = "screenshots /movie-this-post.png">

<h1>Do-what-it-says</h1>
<p>This is an example of the do-what-it-says command, simply input "node liri.js do-what-it-says". This is what the command line should look like: </p>
<img src = "screenshots /do-what-pre.png">
<p>And this is what the data populated should look like: </p>
<img src = "screenshots /do-what-post.png">






