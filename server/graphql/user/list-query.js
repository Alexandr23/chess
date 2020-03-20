const { GraphQLList } = require("graphql");

const UserModel = require("../../models/UserModel");
const { UserType } = require("../../graphql/user/type");

exports.GraphqlUserListQuery = {
  type: new GraphQLList(UserType),
  resolve: function () {
    return UserModel.getAll();
  }
};