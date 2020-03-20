const { GraphQLNonNull, GraphQLInt } = require("graphql");

const GameModel = require("../../models/GameModel");
const { GameType } = require("../../graphql/game/type");

exports.GraphqlGameCreateMutation = {
  type: GameType,
  args: {
    playerWId: { type: new GraphQLNonNull(GraphQLInt) },
    playerBId: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve(parentValue, args) {
    return GameModel.create({
      playerWId: args.playerWId,
      playerBId: args.playerBId,
    });
  },
};;