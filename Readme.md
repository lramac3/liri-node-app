# Welcome to LIRI Bot

LIRI is a Language Interpretation and Recognition Interface. LIRI takes the user's command line input to look up movie info, song info, concert info, or follow written instructions from a text file.

### Getting Started

If you are downloading the npm package, run the following command in your terminal

```
sudo npm install liri-node-app1 -g
```
![install-package-globally](https://user-images.githubusercontent.com/28829258/52517236-5ccee680-2c06-11e9-82a9-0dbdd61ff6d2.png)


If you are cloning this repository from github, create your own .env file and insert the keys in it. Look at the .env-example file to see an example .env file

### Commands

If you downloaded the liri-node-app1 package enter the commands listed in the example below to look up info. Once user enters liri in command line and hits enter, LIRI reminds the user to enter an action and a search term.

![just-liri](https://user-images.githubusercontent.com/28829258/52517247-ab7c8080-2c06-11e9-9e64-1c7988e4a6a9.png)

In case the action  or search term is mispelled LIRI reminds the user to enter the command format that needs to be entered in the command line.

![liri-incomplete-action](https://user-images.githubusercontent.com/28829258/52517271-19c14300-2c07-11e9-8308-b05e6f904b5d.png) 
Before you use the liri do-what-it-says make sure to include random.txt file in the directory you are running the LIRI command from and has a text like spotify-this-song,"I Want it That Way" OR concert-this,"Elton John" OR movie-this,"Avengers"

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


![node-incorrect](https://user-images.githubusercontent.com/28829258/52517563-1465f780-2c0b-11e9-95c8-98694082e822.png)

![node-concert](https://user-images.githubusercontent.com/28829258/52517567-30699900-2c0b-11e9-9917-1debcd4c0c7e.png)

![node-movie](https://user-images.githubusercontent.com/28829258/52517577-4ecf9480-2c0b-11e9-85ab-91fcbc103fb1.png)

![node-spotify](https://user-images.githubusercontent.com/28829258/52517698-1335ca00-2c0d-11e9-9c36-169f3df90e68.png)

![node-do](https://user-images.githubusercontent.com/28829258/52517701-247ed680-2c0d-11e9-9eac-a400f92760b4.png)


### APIs Used

BandsInTown, Spotify, Open Movie Database

### NPMs Used

axios, spotify-node-api, moment, fs, moment, dotenv

