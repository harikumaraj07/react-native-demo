import PropTypes from 'prop-types';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string,
  leftValue: PropTypes.string,
  rightValue: PropTypes.string,
};

const defaultProps = {
  id: '',
  label: '',
  disabled: false,
  leftLabel: 'Off',
  rightLabel: 'On',
  leftValue: 'off',
  rightValue: 'on',
};

const Input = props => {
  const {
    id,
    leftLabel,
    rightLabel,
    disabled,
    leftValue,
    rightValue,
    field: {value, name},
    form: {setFieldValue},
  } = props;

  const toggle = () => {
    setFieldValue(name, value === leftValue ? rightValue : leftValue);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.2}
      disabled={disabled}
      onPress={toggle}
      style={[styles.inputComponentStyles]}>
      <View
        style={[styles.switch, value === leftValue ? styles.activeSwitch : {}]}>
        <Text
          style={[styles.label, value === leftValue ? styles.activeLabel : {}]}>
          {leftLabel}
        </Text>
      </View>
      <View
        style={[
          styles.switch,
          value === rightValue ? styles.activeSwitch : {},
        ]}>
        <Text
          style={[
            styles.label,
            value === rightValue ? styles.activeLabel : {},
          ]}>
          {rightLabel}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

Input.defaultProps = defaultProps;

Input.propTypes = propTypes;

export default Input;
