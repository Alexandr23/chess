import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GameListPage from "../../pages/GameListPage";
import GamePage from "../../pages/GamePage";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/games">
            <GameListPage />
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
