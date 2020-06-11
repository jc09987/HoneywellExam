import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { fetchStudent } from './actions/detailActions';
import styles from "./styles/details.module.scss";
import Alert from 'components/Alert/Alert';

import '../../../css/global.css';

class DetailsContainer extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { studentId, dispatch } = this.props;
    dispatch(fetchStudent(studentId));
  }

  render = () => {
    const { error, loading, student } = this.props;
    if (loading) {
      return (
        <Alert
          id="error-alert"
          className="alert alert-info"
          title="Loading..."
          text="Fetching data..."
        />
      );
    }

    return (
    <div id="student-details" className={styles.studentDetails}>
      <div id="student-photo" className={styles.studentPhoto}>
        <img 
            src="http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Student-3-icon.png" 
            alt="student">
        </img>
      </div>
      <div id="details-container" className={styles.detailsContainer}>
        {error
          && (
          <Alert
            id="error-alert"
            className="alert alert-danger"
            title="Error!"
            text={error.message}
          />
          )
        }
        <div className={styles.field}>
            <label id="details-firstname" className="dialog-form-label" htmlFor="firstname">First Name: </label>
            <input
                type="text"
                name="firstname"
                id="firstname"
                value={student.firstname}
                className="form-control text ui-widget-content"
                disabled
            />
        </div>
        <div className={styles.field}>
            <label id="detailslastname" className="dialog-form-label" htmlFor="lastname">Last Name: </label>
            <input
                type="text"
                name="lastname"
                id="lastname"
                value={student.lastname}
                className="form-control text ui-widget-content"
                disabled
            />
        </div>
        <div className={styles.field}>
            <label id="details-address" className="dialog-form-label" htmlFor="address">Street Name/Number: </label>
            <input
                type="text"
                name="address"
                id="address"
                value={student.address}
                className="form-control text ui-widget-content"
                disabled
            />
        </div>
        <div className={styles.field}>
            <label id="details-city" className="dialog-form-label" htmlFor="city">City: </label>
            <input
                type="text"
                name="city"
                id="city"
                value={student.city}
                className="form-control text ui-widget-content"
                disabled
            />
        </div>
        <div className={styles.field}>
            <label id="details-phone" className="dialog-form-label" htmlFor="phone">Phone Number: </label>
            <input
                type="text"
                name="phone"
                id="phone"
                value={student.phone}
                className="form-control text ui-widget-content"
                disabled
            />
        </div>
        <div className={styles.field}>
            <label id="details-gpa" className="dialog-form-label" htmlFor="gpa">GPA: </label>
            <input
                type="number"
                name="gpa"
                id="gpa"
                value={student.gpa}
                className="form-control text ui-widget-content"
                disabled
            />
        </div>
        <div className={styles.field}>
            <Link to="/">
                <Button className={styles.backButton}>Back</Button>
            </Link>
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  student: state.student.student,
  loading: state.student.loading,
  error: state.student.error
});

DetailsContainer.propTypes = {
  student: PropTypes.instanceOf(Object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Object),
  dispatch: PropTypes.func.isRequired,
  showDetails: PropTypes.func.isRequired
};

DetailsContainer.defaultProps = {
  student: {},
  error: {}
};

export default connect(mapStateToProps)(DetailsContainer);
