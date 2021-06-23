import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Routes from './configs/routes.config';
import Loader from './components/FullScreenLoader';

const propTypes = {
  fullScreenLoading: PropTypes.bool,
};

const defaultProps = {
  fullScreenLoading: false,
};

const App = props => {
  const {fullScreenLoading} = props;

  return (
    <>
      <Loader loading={fullScreenLoading} />
      <Routes />
    </>
  );
};

App.propTypes = propTypes;

App.defaultProps = defaultProps;

const mapStateToProps = state => ({
  fullScreenLoading: state.app.fullScreenLoading,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);