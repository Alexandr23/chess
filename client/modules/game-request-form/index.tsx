import * as React from 'react';

import { Layout } from '../../components/Layout';

import { api, IUser, Color } from '../../services/ApiService';
import { Button } from '../../modules/button/component';

interface IGameRequestFormProps {}

interface IIGameRequestFormState {
  form: {
    color: Color | null;
  };
  isSubmitting: boolean;
}

export class GameRequestForm extends React.Component<
  IGameRequestFormProps,
  IIGameRequestFormState
> {
  constructor(props: IGameRequestFormProps) {
    super(props);

    this.state = {
      form: {
        color: null,
      },
      isSubmitting: false,
    };
  }

  createGameRequest(): void {
    this.setState({ isSubmitting: true });

    api
      .createGameRequest({
        color: this.state.form.color,
      })
      .then(gameRequest => {
        this.setState({ isSubmitting: false });
        // this.props.history.push(`/game/${game.id}`);
        console.log({ gameRequest });
      })
      .catch(error => {
        this.setState({ isSubmitting: false });
        console.log(error);
      });
  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    this.createGameRequest();
  }

  onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value || null,
      },
    });
  }

  render() {
    return (
      <div className="game-request-form">
        <form onSubmit={this.onSubmit}>
          <select
            name="color"
            style={{ width: 200 }}
            placeholder="Select color"
            onChange={this.onSelect}
          >
            <option key={Color.White} value={Color.White} label={'White'} />
            <option key={Color.Black} value={Color.Black} label={'Black'} />
            <option key={'Any'} value={undefined} label={'Any'} />
          </select>

          <Button htmlType="submit">New Game</Button>
        </form>
      </div>
    );
  }
}
