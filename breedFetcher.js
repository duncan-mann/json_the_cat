const request = require('request');
let args = process.argv.slice(2);

let cat = args[0];
let URL = `https://api.thecatapi.com/v1/breeds/search?q=${cat}`;

request(URL, (error, response, body) => {
  if (error) {
    console.log('URL Error');
    return;
  }
  const catJSON = JSON.parse(body);
  if (catJSON.length) {
    catJSON = JSON.parse(body);
    console.log('Descriptions ->', catJSON[0].description);
  } else {
    console.log('Not a valid cat breed');
  }
});



