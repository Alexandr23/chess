const API_URL = '/graphql/';

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

export interface IUser {
  id: string;
  login: string;
  created: string;
}

export interface IMove {
  id: string;
  gameId: string;
  playerId: string;
  fenFrom: string;
  fenTo: string;
  createTime: string;
}

export interface IGame {
  id: string;
  history: IMove[];
  playerW: IUser;
  playerB: IUser;
  creator: IUser;
}

export interface ISignUpRequest {
  login: string;
  password: string;
}

export interface ISignInRequest {
  login: string;
  password: string;
}

export interface ICreateGameRequest {
  playerWId: string;
  playerBId: string;
}

const request = <T>(query: string): Promise<T> => {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token') || '',
    },
    body: JSON.stringify({ query }),
  })
    .then(res => res.json())
    .then(data => data.data);
};

class Api {
  getGame(id: string): Promise<IGame> {
    const query = `
      query {
        game (id: ${id}) {${GAME}}
      }
    `;
    return request<{ game: IGame }>(query)
      .then(data => data.game);
  }

  getGameList(): Promise<IGame[]> {
    const query = `
      query {
        gameList {${GAME}}
      }
    `;
    return request<{ gameList: IGame[] }>(query)
      .then(data => data.gameList);
  }

  createGame(game: ICreateGameRequest): Promise<IGame> {
    const query = `
      mutation {
        createGame (playerWId: ${game.playerWId}, playerBId: ${game.playerBId}) {${GAME}}
      }
    `;
    return request<{ game: IGame }>(query)
      .then(data => data.game);
  }

  getUser(id: string): Promise<IUser> {
    const query = `
      query {
        user (id: ${id}) {${USER}}
      }
    `;
    return request<{ user: IUser }>(query)
      .then(data => data.user);
  }

  getUserList(): Promise<IUser[]> {
    const query = `
      query {
        userList {${USER}}
      }
    `;
    return request<{ userList: IUser[] }>(query)
      .then(data => data.userList);
  }

  signUp(user: ISignUpRequest): Promise<IUser> {
    return fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(this.updateToken)
      .then(res => res.json())
      .then((data: { user: IUser }) => data.user);
  }

  signIn(user: ISignInRequest): Promise<IUser> {
    return fetch('/api/signin', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(this.updateToken)
      .then(res => res.json())
      .then((data: { user: IUser }) => data.user);
  }

  updateToken(res: Response) {
    const token: string = res.headers.get('token') || '';

    localStorage.setItem('token', token);

    return res;
  }
}

export const api = new Api();
