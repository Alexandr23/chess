const { GraphQLNonNull } = require("graphql");

const GameRequestModel = require("../../models/GameRequestModel");
const { GameRequestType, GameRequestColorType } = require("./type");

exports.GraphqlGameRequestCreateMutation = {
  type: GameRequestType,
  args: {
    color: { type: GameRequestColorType },
  },
  resolve(parentValue, args, context) {
    const userId = context.decoded.id;

    return GameRequestModel.create({
      userId,
      color: args.color || null,
    });
  },
};
