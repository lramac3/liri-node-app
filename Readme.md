# Welcome to Liri Bot

LIRI is a Language Interpretation and Recognition Interface. LIRI takes the user's command line input to look up movie info, song info, concert info, or follow written instructions from a text file.

### Getting Started

If you are downloading the npm package, just run the following command in your terminal

```
sudo npm install liri-node-app1 -g
```
![install-package-globally](https://user-images.githubusercontent.com/28829258/52517236-5ccee680-2c06-11e9-82a9-0dbdd61ff6d2.png)


If you are cloning this repository from github, create your own .env file and insert the keys in it. Look at the .env-example file to see an example .env file

### Commands

If you downloaded the liri-node-app1 package then enter the commands listed in the example below to look up info. Once user enters liri in command line and hits enter, liri reminds the user to enter an action and a search term.
![just-liri](https://user-images.githubusercontent.com/28829258/52517247-ab7c8080-2c06-11e9-9e64-1c7988e4a6a9.png)
If the action  or search term is mispelled liri reminds the user to enter the command format that needs to be entered in the command line.

![liri-incomplete-action](https://user-images.githubusercontent.com/28829258/52517271-19c14300-2c07-11e9-8308-b05e6f904b5d.png) 
Before you use the liri do-what-it-says make sure to include random.txt file in the directory you are running the liri command from and has a text like spotify-this-song,"I Want it That Way" OR concert-this,"Elton John" OR movie-this,"Avengers"

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
Use the screenshots below as reference
![liri-concert-this](https://user-images.githubusercontent.com/28829258/52517286-58ef9400-2c07-11e9-87d2-da18c61b96cc.png)

![liri-spotify-this](https://user-images.githubusercontent.com/28829258/52517311-b4218680-2c07-11e9-9fd6-4266e864e9fa.png)

![liri-movie-this](https://user-images.githubusercontent.com/28829258/52517318-c56a9300-2c07-11e9-8cf7-0272af084f93.png)

![liri-random](https://user-images.githubusercontent.com/28829258/52517407-ff886480-2c08-11e9-8005-6a108c7b5bd5.png)

![liri-do-this](https://user-images.githubusercontent.com/28829258/52517416-1333cb00-2c09-11e9-9cdb-1a898088a33f.png)
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
Use screenshots below as reference


### APIs Used

BandsInTown, Spotify, Open Movie Database

### NPMs Used

axios, spotify-node-api, moment, fs, moment, dotenv

