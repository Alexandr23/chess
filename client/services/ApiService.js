const API_URL = "/graphql/";

const USER = `
  id
  login
`;

const MOVE = `
  id
  gameId
  playerId
  fenFrom
  fenTo
  createTime
`;

const GAME = `
  id
  history {${MOVE}}
  playerW {${USER}}
  playerB {${USER}}
  creator {${USER}}
`;

const request = query => {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify({ query })
  }).then(res => res.json());
};

class ApiService {
  getGame(id) {
    const query = `
      query {
        game (id: ${id}) {${GAME}}
      }
    `;
    return request(query);
  }

  getGameList() {
    const query = `
      query {
        gameList {${GAME}}
      }
    `;
    return request(query);
  }

  createGame(game) {
    const query = `
      mutation {
        createGame (playerWId: ${game.playerWId}, playerBId: ${game.playerBId}) {${GAME}}
      }
    `;
    return request(query);
  }

  getUser(id) {
    const query = `
      query {
        user (id: ${id}) {${USER}}
      }
    `;
    return request(query);
  }

  getUserList() {
    const query = `
      query {
        userList {${USER}}
      }
    `;
    return request(query);
  }

  createUser(user) {
    const query = `
      mutation {
        createUser (name: "${user.name}") {${USER}}
      }
    `;
    return request(query);
  }

  signUp(user) {
    return fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(this.updateToken)
      .then(res => res.json());
  }

  signIn(user) {
    return fetch('/api/signin', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(this.updateToken)
      .then(res => res.json())
  }

  updateToken(res) {
    const token = res.headers.get('token');
    localStorage.setItem('token', token);

    console.log(token);

    return res;
  }
}

export default new ApiService();
