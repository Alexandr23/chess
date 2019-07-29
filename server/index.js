const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema.js");
const path = require("path");
const config = require("../config/main");

let port = 3000;
const app = express();

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
      <link rel="stylesheet" href="/client/styles.css">
    </head>
    <body>
      <div id="app"></div>
      <script src="${config.STATIC_URL}/dist/app.js"></script>
    </body>
  </html>
  `)
});

app.listen(port);
console.log("GraphQL API server running at localhost: " + port);
