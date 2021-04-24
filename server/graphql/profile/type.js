const { GraphQLString, GraphQLObjectType } = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    login: { type: GraphQLString },
    create_time: { type: GraphQLString }
  }
});

exports.UserType = UserType;