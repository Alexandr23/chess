const {
  GraphQLString,
  GraphQLEnumType,
  GraphQLObjectType,
} = require("graphql");

const GameRequestColorType = new GraphQLEnumType({
  name: "color",
  values: {
    white: { value: "white" },
    black: { value: "black" },
  },
});

exports.GameRequestColorType = GameRequestColorType;

exports.GameRequestType = new GraphQLObjectType({
  name: "GameRequest",
  fields: {
    id: { type: GraphQLString },
    userId: {
      type: GraphQLString,
      resolve(parentValue) {
        return parentValue.user_id;
      },
    },
    color: {
      type: GameRequestColorType,
    },
    create_time: { type: GraphQLString },
  },
});
