import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import styles from './styles';

const propTypes = {
  label: PropTypes.string,
  data: PropTypes.array,
  id: PropTypes.any,
  disabled: PropTypes.bool,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
};

const defaultProps = {
  label: '',
  data: [],
  id: '',
  disabled: false,
  labelKey: 'label',
  valueKey: 'value',
};

const ListPicker = props => {
  const {
    id,
    label,
    data,
    disabled,
    labelKey,
    valueKey,
    field: {value, name},
    form: {handleChange},
  } = props;
  const renderPickerItems = () => {
    const _data = [{[labelKey]: 'Select', [valueKey]: ''}, ...data];
    return _data.map((item, index) => {
      return (
        <Picker.Item
          key={index}
          label={item[labelKey]}
          value={item[valueKey]}
        />
      );
    });
  };

  return (
    <View style={styles.listPickerContainer}>
      <Text style={styles.labelText}>{label}</Text>
      <Picker
        style={styles.listPickerStyle}
        accessibilityLabel={id}
        testID={id}
        selectedValue={value}
        onValueChange={handleChange(name)}
        enabled={!disabled}>
        {renderPickerItems()}
      </Picker>
    </View>
  );
};

ListPicker.defaultProps = defaultProps;

ListPicker.propTypes = propTypes;

export default ListPicker;
