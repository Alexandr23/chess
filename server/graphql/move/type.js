const { GraphQLString, GraphQLObjectType, GraphQLID } = require("graphql");

const MoveType = new GraphQLObjectType({
  name: "Move",
  fields: {
    id: { type: GraphQLID },
    gameId: {
      type: GraphQLID,
      resolve(parentValue) {
        return parentValue.game_id;
      },
    },
    playerId: {
      type: GraphQLID,
      resolve(parentValue) {
        return parentValue.player_id;
      },
    },
    fenFrom: {
      type: GraphQLString,
      resolve(parentValue) {
        return parentValue.fen_from;
      },
    },
    fenTo: {
      type: GraphQLString,
      resolve(parentValue) {
        return parentValue.fen_to;
      },
    },
    createTime: {
      type: GraphQLString,
      resolve(parentValue) {
        return parentValue.create_time;
      },
    },
  },
});

exports.MoveType = MoveType;