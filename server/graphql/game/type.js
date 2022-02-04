const { GraphQLString, GraphQLList, GraphQLObjectType } = require("graphql");

const db = require("../../db").db;
const UserModel = require("../../models/UserModel");
const { UserType } = require("../../graphql/user/type");
const { MoveType } = require("../../graphql/move/type");

exports.GameType = new GraphQLObjectType({
  name: "Game",
  fields: {
    id: { type: GraphQLString },
    history: {
      type: new GraphQLList(MoveType),
      resolve(parentValue) {
        const query = `SELECT * FROM moves WHERE game_id=$1`;
        const values = [parentValue.id];

        return db
          .any(query, values)
          .then(res => res)
          .catch(err => err);
      },
    },
    create_time: { type: GraphQLString },
    creator_name: { type: GraphQLString },
    playerW: {
      type: UserType,
      resolve(parentValue) {
        return UserModel.getById(parentValue.player_w_id);
      },
    },
    playerB: {
      type: UserType,
      resolve(parentValue) {
        return UserModel.getById(parentValue.player_b_id);
      },
    },
    creator: {
      type: UserType,
      resolve(parentValue) {
        return UserModel.getById(parentValue.creator_id);
      },
    },
  },
});