import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import styles from './styles';

const propTypes = {
  onPressLeftIcon: PropTypes.func,
};

const defaultProps = {
  onPressLeftIcon: () => {},
};

const HomeTemplate = props => {
  const {onPressLeftIcon} = props;

  return (
    <View style={styles.wrapper}>
      <Header title="Home" onPressLeftIcon={onPressLeftIcon} />
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </View>
  );
};

HomeTemplate.defaultProps = defaultProps;

HomeTemplate.propTypes = propTypes;

export default HomeTemplate;
