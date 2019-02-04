// require("dotenv").config();

const command = process.argv[2];
const value = process.argv[3];
// node liri.js concert-this <artist/band name here>

//https://rest.bandsintown.com/artists/   /events?app_id=codingbootcamp

function getMyBands(artist){
// const url = 'https://rest.bandsintown.com/artists/'+artist+'/events?app_id=codingbootcamp';
    const url = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;
    axios.get(url, {
        params: {
          ID: 12345
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}