import React from 'react';
import { ButtonPanel, Display } from './component';
import calculate from './logic';
import './app.scss';


export default class App extends React.Component {
  state = {
      total: 0,
      current: 0,
      operation: null, // eslint-disable-line
  }

  handleClick = (buttonName) => {
      const {
          current,
          total,
          operation,
      } = this.state;

      this.setState(calculate({ current, total, operation }, buttonName));
  }


  render() {
      const { current, total } = this.state;

      return (
          <div className="component-app">
              <Display value={current || total || '0'} />
              <ButtonPanel clickHandler={this.handleClick} />
          </div>
      );
  }
}
