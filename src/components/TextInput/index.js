import PropTypes from 'prop-types';
import React from 'react';
import {TextInput, Text, View} from 'react-native';

import styles from './styles';

const propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  keyboardType: PropTypes.string,
};

const defaultProps = {
  id: '',
  label: '',
  disabled: false,
  keyboardType: 'default',
};

const Input = props => {
  const {
    id,
    label,
    disabled,
    keyboardType,
    field: {value, name},
    form: {handleChange, errors, submitCount},
  } = props;

  return (
    <View>
      <View style={styles.inputComponentStyles}>
        <Text style={styles.labelText}>{label}</Text>
        <TextInput
          testID={id}
          accessibilityLabel={id}
          style={styles.inputTextBoxStyle}
          onChangeText={handleChange(name)}
          value={`${value}`}
          editable={!disabled}
          keyboardType={keyboardType}
        />
      </View>
      {!!errors[name] && submitCount > 0 && <Text style={styles.error}>{errors[name]}</Text>}
    </View>
  );
};

Input.defaultProps = defaultProps;

Input.propTypes = propTypes;

export default Input;
