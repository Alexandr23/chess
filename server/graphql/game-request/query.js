const { GraphQLID } = require("graphql");

const GameModel = require("../../models/GameModel");
const { GameType } = require("../../graphql/game/type");

exports.GraphqlGameQuery = {
  type: GameType,
  args: { id: { type: GraphQLID } },
  resolve(parentValue, args) {
    return GameModel.getById(args.id);
  },
};;