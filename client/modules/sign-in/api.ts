import { SignInRequestInterface } from './sign-in-request.interface';
import { SignInResponseInterface } from './sign-in-response.interface';
import { UserInterface } from '../user/interface';

class Api {
  signIn(params: SignInRequestInterface): Promise<UserInterface> {
    return fetch('/api/signin', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(this.updateToken)
      .then(res => res.json())
      .then((data: SignInResponseInterface) => {
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
