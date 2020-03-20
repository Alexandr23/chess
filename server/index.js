const express = require("express");
const path = require("path");

const { graphql } = require("./graphql/index");
const { html } = require("./html.js");

const app = express();

app.use(
  "/dist",
  express.static(path.join(__dirname, "../dist"), { fallthrough: false })
);

app.use("/graphql", graphql);

app.use("/", (req, res) => {
  console.log("Got request!");
  res.send(html());
});

app.listen(process.env.PORT || process.env.APP_PORT);

console.log(`Chess App running`);
