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
![Alt text](screenshots/spotify-this-song-pre-j.jpg)


