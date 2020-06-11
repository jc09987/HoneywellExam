import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchContent, addStudent, deleteStudent } from './actions/containerActions';
import TableContainer from 'components/Table/TableContainer';
import AddDialog from 'components/Dialog/AddDialog';
import Alert from 'components/Alert/Alert';

import '../../../css/global.css';

class Container extends PureComponent {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(fetchContent());
  }

  sendNewStudent = (student) => { 
    const { dispatch } = this.props;
    dispatch(addStudent(student)).then(() => {
      if (process.env.RR_ENV === 'production') {
        dispatch(fetchStudents());
      }
    });
  }

  studentDetails= (id) => {
    const { showDetails } = this.props;
    showDetails(id);
  }

  sendDeletedStudent = (id) => {
    const { dispatch } = this.props;
    // eslint-disable-next-line no-alert
    if (window.confirm(`Are you sure you want to delete [${id}]?`)) {
      dispatch(deleteStudent(id)).then(() => {
        if (process.env.RR_ENV === 'production') {
          dispatch(fetchStudents());
        }
      });
    }
  }

  render = () => {
    const { error, loading, content } = this.props;
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
      <div id="main-container">
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
        <TableContainer
          id="students-list"
          content={content}
          handleDelete={this.sendDeletedStudent}
          handleDetails={this.studentDetails}
        />
        <AddDialog sendData={this.sendNewStudent} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: state.content.content,
  loading: state.content.loading,
  error: state.content.error
});

Container.propTypes = {
  content: PropTypes.instanceOf(Object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Object),
  dispatch: PropTypes.func.isRequired,
  showDetails: PropTypes.func.isRequired
};

Container.defaultProps = {
  content: {},
  error: {}
};

export default connect(mapStateToProps)(Container);
