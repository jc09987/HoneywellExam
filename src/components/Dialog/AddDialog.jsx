import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import styles from "./styles/dialog.module.scss";
import { validateFields } from '../../../js/utils';
import Alert from 'components/Alert/Alert';

class AddDialog extends PureComponent {
  constructor(props) {
    super(props);
    this.studentInputRef = createRef();
    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      city: '',
      phone: '',
      gpa: 0.0,
      modal: false,
      alert: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { modal } = this.state;
    if (modal && !prevState.modal) {
      this.studentInputRef.current.focus();
    }
  }

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  clearFields = () => {
    this.setState({
      firstname: '',
      lastname: '',
      address: '',
      city: '',
      phone: '',
      gpa: 0.0,
      modal: false,
      alert: false
    });
  }

  handleData = (event) => {
    event.preventDefault();
    const { sendData } = this.props;
    const { firstname, lastname, address, city, phone, gpa } = this.state;
    if (
        !validateFields(firstname) ||
        !validateFields(lastname) ||
        !validateFields(address) ||
        !validateFields(city) ||
        !validateFields(phone) ||
        !validateFields(gpa)
    ) {
      this.setState({ alert: true });
    } else {
      const newStudent = {
        firstname: firstname,
        lastname: lastname,
        address: address,
        city: city,
        phone: phone,
        gpa: parseFloat(gpa),
      }
      sendData(newStudent);
      this.clearFields();
    }
  }

  render = () => {
    const { 
      firstname, lastname, address, city, phone, gpa, modal, alert
    } = this.state;

    return (
      <span>
        <Button className={styles.addButton} onClick={this.toggle}>Add Student</Button>
        <Modal id="add-student-form" isOpen={modal} toggle={this.toggle} centered>
          <form onSubmit={this.handleData}>
            <ModalHeader toggle={this.toggle}>Add a new Student</ModalHeader>
            <ModalBody>
              { alert
                && (
                <Alert
                  id="form-alert"
                  className="alert alert-info"
                  title="Validation!"
                  text="Please provide all the required data."
                />
                )
              }
              <div>
                <label id="reruired-label" className="dialog-form-label">(* Required)</label>
              </div>
              <div>
                <label id="firstname-label" className="dialog-form-label" htmlFor="firstname">First Name*: </label>
                <input
                    type="text"
                    name="firstname"
                    ref={this.studentInputRef}
                    id="firstname"
                    value={firstname}
                    className="form-control text ui-widget-content"
                    onChange={this.handleChange}
                />
              </div>
              <div>
                <label id="lastname-label" className="dialog-form-label" htmlFor="lastname">Last Name*: </label>
                <input
                    type="text"
                    name="lastname"
                    ref={this.studentInputRef}
                    id="lastname"
                    value={lastname}
                    className="form-control text ui-widget-content"
                    onChange={this.handleChange}
                />
              </div>
              <div>
                <label id="address-label" className="dialog-form-label" htmlFor="address">Street Name/Number*: </label>
                <input
                    type="text"
                    name="address"
                    ref={this.studentInputRef}
                    id="address"
                    value={address}
                    className="form-control text ui-widget-content"
                    onChange={this.handleChange}
                />
              </div>
              <div>
                <label id="city-label" className="dialog-form-label" htmlFor="city">City*: </label>
                <input
                    type="text"
                    name="city"
                    ref={this.studentInputRef}
                    id="city"
                    value={city}
                    className="form-control text ui-widget-content"
                    onChange={this.handleChange}
                />
              </div>
              <div>
                <label id="phone-label" className="dialog-form-label" htmlFor="phone">Phone Number*: </label>
                <input
                    type="text"
                    name="phone"
                    ref={this.studentInputRef}
                    id="phone"
                    value={phone}
                    className="form-control text ui-widget-content"
                    onChange={this.handleChange}
                />
              </div>
              <div>
                <label id="gpa-label" className="dialog-form-label" htmlFor="gpa">GPA*: </label>
                <input
                    type="number"
                    placeholder="1.0" 
                    step="0.01" 
                    min="0" 
                    max="10"
                    name="gpa"
                    ref={this.studentInputRef}
                    id="gpa"
                    value={gpa}
                    className="form-control text ui-widget-content"
                    onChange={this.handleChange}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary">Save</Button>
              <Button color="danger" onClick={this.clearFields}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </span>
    );
  }
}

AddDialog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  pathName: PropTypes.string,
  grade: PropTypes.string,
  pathId: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  createUnit: PropTypes.bool,
  sendData: PropTypes.func.isRequired
};

AddDialog.defaultProps = {
  createUnit: false,
  title: '',
  pathName: '',
  grade: '',
  pathId: 0
};

export default AddDialog;
