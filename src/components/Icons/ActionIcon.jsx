/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'

/**
 * Icon
 */
class ActionIcon extends PureComponent {
  handleClick = () => {
    const { handleAction } = this.props;
    return (handleAction ? handleAction() : false);
  }

  render = () => {
    return (
      <a
        href="#"
        onClick={this.handleClick}
      >
        <FontAwesomeIcon icon={faTrash} />
      </a>
    );
  };
}

ActionIcon.propTypes = {
  /** Function for actions */
  handleAction: PropTypes.func.isRequired,
};

export default ActionIcon;