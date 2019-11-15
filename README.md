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

<h1>Available Commands</h1>
<ul>
  <li>spotify-this-song</li>
  <li>movie-this</li>
  <li>concert-this</li>
  <li>do-what-it-says</li>
</ul>
<h1>Command Usage</h1>
<ul>
  <li>Spotify-this-song:  this searches the Spotify API and returns the five results of the search paramaeter. In each of the five searches the name of the song, a link to preview the song on Spotify, and the name of the album of the song all appear in the command line.</li>
</ul>

<h1>APIs Used</h1>
<ul>
  <li>Spotify Api</li>
  <li>OMDB Api</li>
  <li>Bandsintown Api</li>
</ul>

