import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
    EQUAL, PLUS, MINUS, AC,
} from '../../constants';
import './Button.css';

export default class Button extends React.Component {
  static propTypes = {
      name: PropTypes.string.isRequired,
      clickHandler: PropTypes.func.isRequired,
  }

  handleClick = () => {
      const { name, clickHandler } = this.props;

      clickHandler(name);
  }

  render() {
      const { name } = this.props;
      const classes = cx('component-button', {
          equalSign: name === EQUAL,
          lightBlue: [PLUS, MINUS, EQUAL].includes(name),
          red: name === AC,
      });

      return (
          <button className={classes} type="submit" onClick={this.handleClick}>
              {name}
          </button>
      );
  }
}
