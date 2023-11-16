/* eslint-disable no-undef */
const auth = require("json-server-auth");
const jsonServer = require("json-server");
require("dotenv").config();
const express = require("express");
// for socket.io, we need http module and express.js
const http = require("http");

const app = express();

// pwd is used in the termianl to see the directory of my file and folder

const server = http.createServer(app);
const io = require("socket.io")(server);

// browser has window object
// node js has global object
global.io = io;

const router = jsonServer.router("db.json");
// response middleware
router.render = (req, res) => {
  const path = req.path;
  // console.log("path", path);      /conversations
  const method = req.method;
  // console.log("method", method);    GET
  if (
    path.includes("/conversations") &&
    (method === "POST" || method === "PATCH")
  ) {
    // emit socket io event
    io.emit("conversation", {
      data: res.locals.data,
    });
  }
  res.json(res.locals.data);
};
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

// Bind  the router db to the app
app.db = router.db;

app.use(middlewares);

const rules = auth.rewriter({
  users: 640,
  conversations: 660,
  messages: 660,
});

app.use(rules);
app.use(auth);
app.use(router);

server.listen(port);
