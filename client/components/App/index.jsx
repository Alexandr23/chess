import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import GameListPage from "../../pages/GameListPage";
import GamePage from "../../pages/GamePage";
import GameCreatePage from "../../pages/GameCreatePage";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/games">Game List</Link>
        <Link to="/game/create">Create Game</Link>

        <Switch>
          <Route path="/games">
            <GameListPage />
          </Route>

          <Route path="/game/create">
            <GameCreatePage />
          </Route>

          <Route path="/game/:id">
            <GamePage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
