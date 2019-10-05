const db = require("./db").db;
const GameModel = require("./models/GameModel");

let {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLID,
  GraphQLSchema,
  GraphQLInt,
  GraphQLNonNull
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    create_time: { type: GraphQLString }
  }
});

const MoveType = new GraphQLObjectType({
  name: "Move",
  fields: {
    id: { type: GraphQLID },
    gameId: {
      type: GraphQLID,
      resolve(parentValue) {
        return parentValue.game_id;
      }
    },
    playerId: {
      type: GraphQLID,
      resolve(parentValue) {
        return parentValue.player_id;
      }
    },
    fenFrom: {
      type: GraphQLString,
      resolve(parentValue) {
        return parentValue.fen_from;
      }
    },
    fenTo: {
      type: GraphQLString,
      resolve(parentValue) {
        return parentValue.fen_to;
      }
    },
    createTime: {
      type: GraphQLString,
      resolve(parentValue) {
        return parentValue.create_time;
      }
    }
  }
});

const GameType = new GraphQLObjectType({
  name: "Game",
  fields: {
    id: { type: GraphQLString },
    history: {
      type: GraphQLList(MoveType),
      resolve(parentValue) {
        const query = `SELECT * FROM moves WHERE game_id=$1`;
        const values = [parentValue.id];

        return db
          .any(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    create_time: { type: GraphQLString },
    creator_name: { type: GraphQLString },
    playerW: {
      type: UserType,
      resolve(parentValue) {
        const query = `SELECT * FROM users WHERE id=$1`;
        const values = [parentValue.player_w_id];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    playerB: {
      type: UserType,
      resolve(parentValue) {
        const query = `SELECT * FROM users WHERE id=$1`;
        const values = [parentValue.player_b_id];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    creator: {
      type: UserType,
      resolve(parentValue) {
        const query = `SELECT * FROM users WHERE id=$1`;
        const values = [parentValue.creator_id];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

const query = new GraphQLObjectType({
  name: "AppSchema",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM users WHERE id=$1`;
        const values = [args.id];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    userList: {
      type: new GraphQLList(UserType),
      resolve: function() {
        const query = "SELECT * FROM users";

        return db
          .any(query)
          .then(res => res)
          .catch(err => err);
      }
    },
    game: {
      type: GameType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return GameModel.getById(args.id);
      }
    },
    gameList: {
      type: new GraphQLList(GameType),
      resolve: function() {
        return GameModel.getAll();
      }
    }
  }
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createGame: {
      type: GameType,
      args: {
        playerWId: { type: new GraphQLNonNull(GraphQLInt) },
        playerBId: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parentValue, args) {
        return GameModel.create({
          playerWId: args.playerWId,
          playerBId: args.playerBId
        });
      }
    }
  }
});

const AppSchema = new GraphQLSchema({
  query,
  mutation
});

module.exports = AppSchema;
