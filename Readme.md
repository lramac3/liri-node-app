# Welcome to Liri Bot

LIRI is a Language Interpretation and Recognition Interface. LIRI takes the user's command line input to look up movie info, song info, concert info, or follow written instructions from a text file.

### Getting Started

If you are downloading the npm package, just run the following command in your terminal

```
sudo npm install liri-node-app1 -g
```
![alt text] (https://raw.githubusercontent.com/lramac3/liri-node-app/)
If you are cloning this repository from github, create your own .env file and insert the keys in it. Look at the .env-example file to see an example .env file

### Commands

If you downloaded the liri-node-app1 package then enter the commands listed in the example below to look up info. Before you use the liri do-what-it-says make sure to include random.txt file in the directory you are running the liri command from and has a text like spotify-this-song,"I Want it That Way" OR concert-this,"Elton John" OR movie-this,"Avengers"

Example:
```
Search any artist/band
liri concert-this song_value

Search any song name
liri spotify-this-song song_value

Search any movie
liri movie-this 

Search random text
liri do-what-it-says
```
If you are cloning the repository from github then enter the commands listed in the example below to look up info.


Example:
```
Search any artist/band
node index.js concert-this song_value

Search any song name
node index.js spotify-this-song song_value

Search any movie
node index.js movie-this 

Search random text
node index.js do-what-it-says
```

### APIs Used

BandsInTown, Spotify, Open Movie Database

### NPMs Used

axios, spotify-node-api, moment, fs, moment, dotenv

