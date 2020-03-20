const graphqlHTTP = require("express-graphql");
const { schema } = require("../graphql/schema");

exports.graphql = graphqlHTTP({
  schema: schema,
  graphiql: true
})