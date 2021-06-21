import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Routes from './configs/routes.config';
import Loader from './components/FullScreenLoader';

const propTypes = {
  isLoggedIn: PropTypes.bool,
  fullScreenLoading: PropTypes.bool,
};

const defaultProps = {
  isLoggedIn: false,
  fullScreenLoading: false,
};

const App = props => {
  const {isLoggedIn, fullScreenLoading} = props;

  return (
    <>
      <Loader loading={fullScreenLoading} />
      <Routes isLoggedIn={isLoggedIn} />
    </>
  );
};

App.propTypes = propTypes;

App.defaultProps = defaultProps;

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  fullScreenLoading: state.app.fullScreenLoading,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);