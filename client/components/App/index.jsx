import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../../components/Layout";
import GameListPage from "../../pages/GameListPage";
import GamePage from "../../pages/GamePage";
import GameCreatePage from "../../pages/GameCreatePage";
import UserListPage from "../../pages/UserListPage";
import UserCreatePage from "../../pages/UserCreatePage";
import SignInPage from "../../pages/SignInPage";

import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
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

            <Route path="/users">
              <UserListPage />
            </Route>

            <Route path="/signup">
              <UserCreatePage />
            </Route>

            <Route path="/signin">
              <SignInPage />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
