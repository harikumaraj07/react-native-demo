import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Login from '../../templates/login.template';

const propTypes = {
  login: PropTypes.func,
};

const defaultProps = {
  login: () => {},
};

const LoginContainer = props => {
  const {login} = props;

  const onSubmit = () => {
    login();
  };

  return <Login {...props} onSubmit={onSubmit} />;
};

LoginContainer.defaultProps = defaultProps;

LoginContainer.propTypes = propTypes;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: token => dispatch({type: 'USER_LOGGEDIN', payload: token}),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
