const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path");

global.env = process.env.NODE_ENV === undefined ? "development" : process.env.NODE_ENV;
require('dotenv').config({
  path: global.env === "development" ? ".env.development" : ".env.production",
});
console.log(global.env, "globalenv")
var http_port = 3001;
if (process.env.NODE_ENV === 'production') {
  http_port = process.env.PORT;
}
console.log(http_port, "port")

class Server {
  constructor() {
    this.init();
  }
  init() {
    try {
      this.initHTTPServer();
    } catch (err) {
      console.error(err);
    }
  }
  initHTTPServer() {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
    app.listen(http_port, () => {
      console.log('Server running on port ' + http_port + global.env);
    });
  }
}
const server = new Server();
