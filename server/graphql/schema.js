const { GraphQLObjectType, GraphQLSchema } = require("graphql");

const { GraphqlGameQuery } = require("../graphql/game/query");
const { GraphqlGameListQuery } = require("../graphql/game/list-query");
const { GraphqlGameCreateMutation } = require("../graphql/game/create-mutation");
const { GraphqlUserQuery } = require("../graphql/user/query");
const { GraphqlUserListQuery } = require("../graphql/user/list-query");
const { GraphqlUserCreateMutation } = require("../graphql/user/create-mutation");

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: GraphqlUserQuery,
    userList: GraphqlUserListQuery,
    game: GraphqlGameQuery,
    gameList: GraphqlGameListQuery,
  }
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createGame: GraphqlGameCreateMutation,
    createUser: GraphqlUserCreateMutation,
  }
});

const schema = new GraphQLSchema({
  query,
  mutation,
});

exports.schema = schema;
