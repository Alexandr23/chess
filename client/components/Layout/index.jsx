import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';

import "./style.scss";

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="layout__header">
          <Link to="/games"><Button type="link">Game List</Button></Link>
          <Link to="/game/create"><Button type="link">Create Game</Button></Link>
          <Link to="/signup"><Button type="link">Sign up</Button></Link>
          <Link to="/signin"><Button type="link">Sign in</Button></Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
