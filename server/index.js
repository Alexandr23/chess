const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema.js");
const path = require("path");
// const config = require("../config/main");

const app = express();

const HOST = process.env.APP_HOST;
const PORT = process.env.APP_PORT;
const STATIC_PORT = process.env.APP_HOST_PORT || process.env.APP_PORT;

app.use('/dist', express.static(path.join(__dirname, '../dist'), { fallthrough: false }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.use("/", (req, res) => {
  res.send(`
  <!DOCTYPE HTML>
  <html>
    <head>
      <title>Chess</title>
      <link rel="stylesheet" href="http://${HOST}:${STATIC_PORT}/dist/styles.css">
    </head>
    <body>
      <div id="app"></div>
      <script src="http://${HOST}:${STATIC_PORT}/dist/app.js"></script>
      
    </body>
  </html>
  `)
});

app.listen(PORT);

console.log(`Chess App running at ${HOST}:${STATIC_PORT}`);
