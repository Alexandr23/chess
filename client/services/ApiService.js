const API_URL = "/graphql/";

const USER = `
  id
  name
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
    headers: { "Content-Type": "application/json" },
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
}

export default new ApiService();
