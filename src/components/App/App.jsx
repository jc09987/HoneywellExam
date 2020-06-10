import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

import Container from 'components/Container/Container';

/**
 * Root component of the tree.
 */
class App extends PureComponent {
  render = () => (
    <div>
      <Switch>
        <Route
          path="/"
          render={
              () => (
                <Container />
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

