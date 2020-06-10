import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchField from 'react-search-field';
import { Button } from 'reactstrap';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import ActionIcon from './ActionIcon';

class TableContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  handleDetails = (id) => {
    const { handleDetails } = this.props;
    handleDetails(id);
  }

  handleDelete = (id, name) => {
    const { handleDelete } = this.props;
    handleDelete(id, name);
  }

  setSearchText = (text) => {
    this.setState({
      searchText: text
    });
  }

  filterContent = (students) => { 
    const { searchText } = this.state;
    return students.filter(
        student => (
        `${student.name}${student.grade}`.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      )
    );
  }

  render = () => {
    const { content } = this.props;
    let filteredContent = [];

    if (content) {
        filteredContent = this.filterContent(content);
    }

    const columns = [{
      id: 'firstname',
      Header: 'First Name',
      headerStyle: {
        textAlign: 'left',
        fontWeight: 600
      },
      accessor: 'firstname',
      resizable: false,
      Cell: row => (
        <Button
          color="link"
          className="link-button"
          onClick={() => this.handleDetails(row.original.id)}
        >
          {row.value}
        </Button>
      )
    }, {
      id: 'lastname',
      Header: 'Last Name',
      headerStyle: {
        textAlign: 'left',
        fontWeight: 600
      },
      accessor: 'lastname',
      minWidth: 40,
      resizable: false
    }, {
      id: 'address',
      Header: 'Street Number/Name',
      headerStyle: {
        textAlign: 'left',
        fontWeight: 600
      },
      accessor: 'address',
      minWidth: 40,
      resizable: false
    }, {
      id: 'city',
      Header: 'City',
      headerStyle: {
        textAlign: 'left',
        fontWeight: 600
      },
      accessor: 'city',
      minWidth: 50,
      resizable: false
    }, {
      id: 'phone',
      Header: 'Phone Number',
      headerStyle: {
        textAlign: 'left',
        fontWeight: 600
      },
      accessor: 'phone',
      resizable: false
    }, {
      id: 'gpa',
      Header: 'GPA',
      headerStyle: {
        textAlign: 'left',
        fontWeight: 600
      },
      accessor: 'gpa',
      minWidth: 50,
      resizable: false
    }, {
      id: 'actions',
      Header: 'Actions',
      headerStyle: {
        textAlign: 'left',
        fontWeight: 600
      },
      minWidth: 30,
      resizable: false,
      sortable: false,
      Cell: row => (
        <span>
          <ActionIcon
            key="row-icon-trash"
            className="fas fa-trash"
            handleAction={() => this.handleDelete(row.original.id)}
          />
        </span>
      )
    }];

    return (
      <div id="student-list">
        <SearchField
          placeholder="Search..."
          onChange={this.setSearchText}
          classNames=" searchbar"
        />
        <ReactTable
          data={filteredContent}
          columns={columns}
          showPagination={false}
          minRows={7}
          pageSize={filteredContent.length}
          noDataText="No Students Found"
          className="-striped -highlight units-table"
        />
      </div>
    );
  }
}

TableContainer.propTypes = {
  content: PropTypes.instanceOf(Object),
  handleDetails: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

TableContainer.defaultProps = {
  content: {}
};

export default TableContainer;
