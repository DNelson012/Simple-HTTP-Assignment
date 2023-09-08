const hello = 'Hello World';

const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

const sendMessage = (request, response, message) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(message);
  response.end();
};

const getHello = (request, response) => {
  sendMessage(request, response, hello);
};

const getTime = (request, response) => {
  sendMessage(request, response, getTimeString());
};

module.exports = {
  hello,
  getTimeString,
  getHello,
  getTime,
};
