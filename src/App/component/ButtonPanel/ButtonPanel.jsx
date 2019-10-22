import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import './ButtonPanel.css';

export default class ButtonPanel extends React.Component {
  static propTypes = {
      clickHandler: PropTypes.func.isRequired,
  }

  handleClick = (buttonName) => {
      const { clickHandler } = this.props;

      clickHandler(buttonName);
  }

  render() {
      const buttonsMatrice = [
          ['7', '4', '1', 'AC'],
          ['8', '5', '2', '0'],
          ['9', '6', '3', '.'],
          ['+', '-', '='],
      ];

      return (
          <div className="component-button-panel">
              {
                  buttonsMatrice.map(line => (
                      <div key={line[0]}>
                          {
                              line.map(name => (
                                  <Button
                                      name={name}
                                      key={name}
                                      clickHandler={this.handleClick}
                                  />
                              ))
                          }
                      </div>
                  ))
              }
          </div>
      );
  }
}
