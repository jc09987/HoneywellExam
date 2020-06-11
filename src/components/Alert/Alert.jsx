import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Alert to display system messages
 */
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
  /** Alert id */
  id: PropTypes.string.isRequired,

  /** Alert CSS class */
  className: PropTypes.string.isRequired,

  /** Alert title */
  title: PropTypes.string.isRequired,

  /** Alert text */
  text: PropTypes.string
};

export default Alert;
