const request = require('request');

const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url,(error,response,body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const data = JSON.parse(body);
    if (breedName === 0) {
      console.error(`Breed '${breedName}' not found`);
    }
    console.log(data);
    console.log(typeof data);
  }
});


