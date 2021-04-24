const graphqlHTTP = require("express-graphql");
const { schema } = require("../graphql/schema");

exports.graphql = graphqlHTTP((request) => ({
  schema: schema,
  graphiql: true,
  context: request,
}));
