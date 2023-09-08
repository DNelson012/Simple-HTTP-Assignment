const text = require('./textResponses');

const sendJSON = (request, response, StrJSON) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(StrJSON);
  response.end();
};

const getHelloJSON = (request, response) => {
  const helloJSON = {
    message: text.hello,
  };
  const stringMessage = JSON.stringify(helloJSON);

  sendJSON(request, response, stringMessage);
};

const getTimeJSON = (request, response) => {
  const timeJSON = {
    time: text.getTimeString(),
  };
  const stringMessage = JSON.stringify(timeJSON);

  sendJSON(request, response, stringMessage);
};

module.exports = {
  getHelloJSON,
  getTimeJSON,
};
