const { GraphQLID } = require("graphql");

const UserModel = require("../../models/UserModel");
const { UserType } = require("../../graphql/user/type");

exports.GraphqlProfileQuery = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve(parentValue, args, context) {
    const userLogin = context.decoded.login;

    return UserModel.find(userLogin);
  },
};
