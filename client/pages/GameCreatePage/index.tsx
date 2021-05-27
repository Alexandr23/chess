import * as React from 'react';

import { Layout } from '../../components/Layout';
import { GameRequestForm } from '../../modules/game-request-form';

export class GameCreatePage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="game-create-page">
          <GameRequestForm />
        </div>
      </Layout>
    );
  }
}
