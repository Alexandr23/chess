const express = require("express");
const path = require("path");
const graphqlHTTP = require("express-graphql");

const schema = require("./schema.js");
const html = require("./html.js").html;

const app = express();

app.use(
  "/dist",
  express.static(path.join(__dirname, "../dist"), { fallthrough: false })
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.use("/", (req, res) => {
  res.send(html());
});

app.listen(process.env.APP_PORT);

console.log(`Chess App running`);
