import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const propTypes = {
  size: PropTypes.string,
};

const defaultProps = {
  size: 'large',
};

const Loader = props => {
  const {size} = props;

  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color="#2E384D" />
    </View>
  );
};

Loader.defaultProps = defaultProps;
Loader.propTypes = propTypes;

export default Loader;
