const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { graphql } = require("./graphql/index");
const { html } = require("./html.js");
const routes = require("./routes/index");
const validateToken = require("./middlewares/validate-token");

const app = express();
const router = express.Router();

app.use(
  "/dist",
  express.static(path.join(__dirname, "../dist"), { fallthrough: false })
);

app.use(bodyParser.json());

app.use("/api", routes(router));

app.use("/graphql", validateToken, graphql);

app.use("/", (req, res) => {
  res.send(html());
});

app.listen(process.env.PORT || process.env.APP_PORT);

console.log(`Chess App is running`);
