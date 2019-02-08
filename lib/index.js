
/**
 * Import keys, modules, and additional files used
 */

require("dotenv").config();
let keys = require("./../keys");
let fs = require("fs");
let Spotify = require("node-spotify-api");
let axios = require("axios");
let moment = require("moment");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////// VARIABLES //////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Create variables for API keys. Spotify, OMDB, and BandsInTown APIs are all kept in a separate file
 */

let spotify = new Spotify(keys.spotify);
let omdb = keys.movies.id;
let bands = keys.bands.id;

/**
 * userChoice is the action the user wants to take. userInput is the thing the user wants to look up.
 *
 * If the user doesn't at least enter an action, the program will not run.
 */

let userChoice = process.argv[2];
let userInput = "";
let nodeArgs = process.argv;

for (let i = 3; i < nodeArgs.length; i++) {
    if (i === 3) {
        userInput = userInput + nodeArgs[i];
    } else {
        userInput = userInput + "+" + nodeArgs[i];
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////// LOOKUP FUNCTIONS ///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Using the spotify-node-api npm, look up the song entered by the user. If no song is specified, look up "The Sign" by Ace
 * of Base.
 *
 * The program will print the name of the album, the first/primary artist's name,
 * a preview URL (if available), and the name of the song.
 * @param {string} userInput
 */
function songLookup(userInput) {
    if (userInput === "") {
        userInput = "The Sign Ace of Base";
    }
    spotify.search({ type: "track", query: userInput }, function(err, result) {
        if (err) {
            console.log(err);
        }
        let previewText;

        if (result.tracks.items[0].preview_url === null) {
            previewText = "No preview available";
        } else {
            previewText = result.tracks.items[0].preview_url;
        }

        let newText = `\nSong name: ${result.tracks.items[0].name}
        \nArtist name: ${result.tracks.items[0].artists[0].name}
        \nAlbum name: ${result.tracks.items[0].album.name}
        \nPreview track: ${previewText}`;

        console.log(`I found this information about this song: ${newText}`);

        addText("Song info: \n" + newText + "\n");
    });
}

/**
 * movieLookup uses Axios and the Open Movie Database to look up the title of the user submitted movie. If no movie is submitted,
 * the program will look up "Mr. Nobody".
 *
 * This will print the title of the movie, the year it was released, IMDB and Rotten Tomatoes ratings (if available), the
 * country the movie was made in, a plot summary, and the actors.
 *
 * Note: "Rating Text" is created to get around the fact that not every movie includes IMDB and Rotten Tomatoes ratings.
 * If both are available, both are shown; if only one is available, or none, this is skipped.
 * @param {string} userInput
 */
function movieLookup(userInput) {
    // placeholder
    if (userInput === "") {
        userInput = "Mr. Nobody";
    }
    axios
        .get(
            "http://www.omdbapi.com/?t=" +
                userInput +
                "&y=&plot=short&apikey=" +
                omdb
        )
        .then(function(result) {
            let ratingText = "";

            if (result.data.Ratings.length > 2) {
                for (let i = 0; i < 2; i++) {
                    if (i === 0) {
                        ratingText = `${
                            result.data.Ratings[i].Source
                        } Rating: ${result.data.Ratings[i].Value}`;
                    } else {
                        ratingText =
                            ratingText +
                            "; " +
                            `${result.data.Ratings[i].Source} Rating: ${
                                result.data.Ratings[i].Value
                            }`;
                    }
                }
            } else {
                for (let i = 0; i < result.data.Ratings.length; i++) {
                    if (i === 0) {
                        ratingText = `${
                            result.data.Ratings[i].Source
                        } Rating: ${result.data.Ratings[i].Value}`;
                    } else {
                        ratingText =
                            ratingText +
                            "; " +
                            `${result.data.Ratings[i].Source} Rating: ${
                                result.data.Ratings[i].Value
                            }`;
                    }
                }
            }

            let newText = `\nMovie Title: ${result.data.Title}
            \nRelease Year: ${result.data.Year}
            \nRatings: ${ratingText}
            \nCountry:${result.data.Country}
            \nLanguage: ${result.data.Language}
            \nPlot Summary: ${result.data.Plot}
            \nActors: ${result.data.Actors}`;

            console.log(`I found this information about this movie: 
            ${newText}`);
            addText("Movie info: \n" + newText + "\n");
        });
}

/**
 * this looks up the next tour dates of a user submitted band. If the user doesn't submit anything, it will automatically
 * look up Panic! At The Disco.
 *
 * Using Axios and BandsInTown, this prints out, for each tour date, the venue name, the country the concert will take
 * place in, and the day and time.
 * @param {string} userInput
 */
function bandLookup(userInput) {
    if (userInput === "") {
        userInput = "panic at the disco";
    }
    axios
        .get(
            "https://rest.bandsintown.com/artists/" +
                userInput +
                "/events?app_id=" +
                bands
        )
        .then(function(result) {
            let newText = "";
            let dateText;

            for (let i = 0; i < result.data.length; i++) {
                dateText = moment(result.data[i].datetime).format("MM/DD/YYYY");

                newText =
                    newText +
                    `Concert #${i + 1}:
                \nVenue name: ${result.data[i].venue.name}
                \nVenue location: ${result.data[i].venue.city} in ${
                        result.data[i].venue.country
                    }
                \nConcert date: ${dateText}
                \n`;
            }
            console.log(
                `I found this information about this artist: \n ${newText}`
            );
            addText("Concert info: \n" + newText + "\n");
        });
}

/**
 * This program will read in the "random.txt" file, which includes a command and a lookup term. According to the command,
 * the program will look up the search term.
 */
function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }

        console.log(`Accessing file........\n`);

        let dataArr = data.split(",");
        console.log(dataArr);
        lirithis(dataArr[1], dataArr[0]);
    });
}

/**
 * Writes information provided into a log file
 * @param {string} text
 */
function addText(text) {
    fs.appendFile("log.txt", text, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("I added this information to your log file!");
        }
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////// MAIN PROGRAM CONTROL ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * lirithis takes the user-entered input and calls four separate lookup functions.
 *
 * "movie-this" calls a movie lookup; "spotify-this-song" calls a spotify lookup; "concert-this" calls a concert information
 * lookup; "do-what-it-says" looks in a file to see what the file's commands are.
 *
 * If something the program doesn't recognize is entered, the program will print an error message and not call anything.
 * @param {string} userInput
 * @param {string} userChoice
 */
function lirithis(userInput, userChoice) {
    if (nodeArgs.length <= 2) {
        console.log("Please enter an action and a search term!");
    } else {
        switch (userChoice) {
            case "concert-this":
                bandLookup(userInput);

                break;
            case "spotify-this-song":
                songLookup(userInput);

                break;
            case "movie-this":
                movieLookup(userInput);

                break;
            case "do-what-it-says":
                doWhatItSays();
                break;
            default:
                console.log("Sorry - I didn't understand that. Please enter one of the following commands\n liri concert-this <artist/band name here> \n liri spotify-this-song <song name here> \n liri movie-this <movie name here> \n liri do-what-it-says");
                break;
        }
    }
}

lirithis(userInput, userChoice);
