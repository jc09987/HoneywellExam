import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Alert extends PureComponent {
  render = () => {
    const {
      id, className, title, text
    } = this.props;
    return (
      <div id={id} className={className} role="alert">
        <strong>{title}</strong>
        {' '}
        {text}
.
      </div>
    );
  }
}

Alert.defaultProps = {
  text: ''
};

Alert.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string
};

export default Alert;
