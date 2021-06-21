import React from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const propTypes = {
  loading: PropTypes.bool,
};

const defaultProps = {
  loading: false,
};

const Loader = props => {
  const {loading} = props;

  return (
    <Modal transparent={true} animationType="fade" visible={loading}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2E384D" />
      </View>
    </Modal>
  );
};

Loader.defaultProps = defaultProps;
Loader.propTypes = propTypes;

export default Loader;
