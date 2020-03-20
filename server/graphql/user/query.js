const { GraphQLID } = require("graphql");

const UserModel = require("../../models/UserModel");
const { UserType } = require("../../graphql/user/type");

exports.GraphqlUserQuery = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve(parentValue, args) {
    return UserModel.getById(args.id);
  }
};