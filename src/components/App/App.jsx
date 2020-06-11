import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

import Container from 'components/Container/Container';
import DetailsContainer from 'components/Details/DetailsContainer';

/**
 * Root component of the tree.
 */
class App extends PureComponent {
  showStudentDetails = (id) => {
    const { history } = this.props;
    const url = `/student/${id}`;

    history.push({
      pathname: url
    });
  }

  render = () => (
    <div>
      <Switch>
        <Route
          path="/student/:id"
          render={
              ({ match }) => {
                const { id } = match.params;
                if (!id) {
                  return null;
                }
                return (
                  <DetailsContainer studentId={id} />
                );
              }
            }
        />
        <Route
          path="/"
          render={
              () => (
                <Container showDetails={this.showStudentDetails} />
              )
            }
        />
      </Switch>
    </div>
  )
}

App.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired
};
 
export default withRouter(App);

