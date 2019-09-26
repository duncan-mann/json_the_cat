const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, response, body) => {
    if (error) {
      callback(error, "Invalid URL");
      return;
    }

    let catJSON = JSON.parse(body);
    if (catJSON.length) {
      catJSON = JSON.parse(body);
      callback(null, catJSON[0].description.trim());
      return catJSON[0].description;
    } else {
      callback(null, "This cat does not exist!")
    };
  });
};

module.exports = {fetchBreedDescription };





