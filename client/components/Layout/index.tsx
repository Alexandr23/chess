import * as React from 'react';

import { Nav } from '../Nav';

import './style.scss';

export class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="layout__content">
          {this.props.children}
        </div>
        <Nav />
      </div>
    );
  }
}
