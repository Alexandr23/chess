import { SignUpRequestInterface } from './sign-up-request.interface';
import { SignUpResponseInterface } from './sign-up-response.interface';
import { UserInterface } from '../user/interface';

class Api {
  signUp(params: SignUpRequestInterface): Promise<UserInterface> {
    return fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(this.updateToken)
      .then(res => res.json())
      .then((data: SignUpResponseInterface) => {
        if (data.error) {
          throw data.error;
        }

        return data.data.user;
      });
  }

  updateToken(res: Response) {
    const token: string = res.headers.get('token') || '';

    localStorage.setItem('token', token);

    return res;
  }
}

export const api = new Api();
