import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Display.css';

export default class Display extends React.Component {
  static propTypes = {
      value: PropTypes.string.isRequired,
  }

  render() {
      const { value } = this.props;
      const classes = cx('component-display', {
          overflow: value.length > 60,
      });

      return (
          <div className={classes}>
              {value}
          </div>
      );
  }
}
