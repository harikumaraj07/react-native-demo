import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  text: 'No Data Found',
};

const NoData = props => {
  const {text} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

NoData.propTypes = propTypes;
NoData.defaultProps = defaultProps;

export default NoData;
