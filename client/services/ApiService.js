const API_URL = "/graphql/";

const request = query => {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  });
};

class ApiService {
  getGame(id) {
    const query = `
      query {
        games {
          id
          history
          playerW {
            id
            name
          }
          playerB {
            id
            name
          }
          creator {
            id
            name
          }
        }
      }
    `;
    return request(query);
  }
}

export default new ApiService();
