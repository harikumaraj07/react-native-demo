import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Home from '../../templates/home.template';

const propTypes = {
  logout: PropTypes.func,
};

const defaultProps = {
  logout: () => {},
};

const HomeContainer = props => {
  const {logout} = props;

  const onPressLeftIcon = () => {
    logout();
  };

  return <Home {...props} onPressLeftIcon={onPressLeftIcon} />;
};

HomeContainer.defaultProps = defaultProps;

HomeContainer.propTypes = propTypes;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({type: 'LOGOUT_USER'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
