const { GraphQLNonNull, GraphQLString } = require("graphql");

const UserModel = require("../../models/UserModel");
const { UserType } = require("../../graphql/user/type");

exports.GraphqlUserCreateMutation = {
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parentValue, args) {
    return UserModel.create({
      name: args.name,
    });
  },
};