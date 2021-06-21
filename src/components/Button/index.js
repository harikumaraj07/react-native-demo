import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  rounded: PropTypes.bool,
  onPress: PropTypes.func,
};

const defaultProps = {
  title: 'Button',
  color: '#2E384D',
  textColor: '#FFFFFF',
  rounded: false,
  onPress: () => {},
};

const Button = props => {
  const {title, onPress, color, rounded, textColor} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: color},
        rounded ? styles.rounded : {},
      ]}
      activeOpacity={0.8}>
      <Text style={[styles.title, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = defaultProps;

Button.propTypes = propTypes;

export default Button;
