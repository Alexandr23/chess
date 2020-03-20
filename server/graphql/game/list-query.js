const { GraphQLList } = require("graphql");

const GameModel = require("../../models/GameModel");
const { GameType } = require("../../graphql/game/type");

exports.GraphqlGameListQuery = {
  type: new GraphQLList(GameType),
  resolve: function () {
    return GameModel.getAll();
  },
};;