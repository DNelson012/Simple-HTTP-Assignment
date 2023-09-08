const fs = require('fs');

const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const sendMeme = (request, response, file) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(file);
  response.end();
};

const getSponge = (request, response) => {
  sendMeme(request, response, spongegar);
};

module.exports = {
  getSponge,
};
