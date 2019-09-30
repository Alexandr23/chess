const db = require("./db").db;

let {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLID,
  GraphQLSchema
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    create_time: { type: GraphQLString }
  }
});

const GameType = new GraphQLObjectType({
  name: "Game",
  fields: {
    id: { type: GraphQLString },
    history: { type: GraphQLString },
    create_time: { type: GraphQLString },
    creator_name: { type: GraphQLString },
    playerW: {
      type: UserType,
      resolve(parentValue) {
        console.log(parentValue);

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

const QueryRootType = new GraphQLObjectType({
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
    users: {
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
        const query = `SELECT * FROM games WHERE id=$1`;
        const values = [args.id];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    games: {
      type: new GraphQLList(GameType),
      resolve: function() {
        const query = `SELECT * FROM games`;

        return db
          .any(query)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

const AppSchema = new GraphQLSchema({
  query: QueryRootType
});

module.exports = AppSchema;
