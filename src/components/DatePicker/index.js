import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';

import {iconCalender} from '../../assets';
import styles from './styles';

const propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  mode: PropTypes.string,
};

const defaultProps = {
  id: '',
  label: '',
  mode: 'date',
};

const DateTimePickerComponent = props => {
  const {
    mode,
    id,
    label,
    field: {value, name},
    form: {setFieldValue},
  } = props;

  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    console.log(
      selectedDate,
      moment(selectedDate).format(),
      moment.utc(selectedDate).format(),
    );
    setFieldValue(name, selectedDate);
  };

  const openPicker = () => {
    setShow(true);
  };

  const displayDateFormatter = () => {
    if (value) {
      return moment(value).format(mode === 'date' ? 'DD-MM-YYYY' : 'hh:mm A');
    }
    return '';
  };

  return (
    <TouchableOpacity
      style={styles.inputComponentStyles}
      activeOpacity={0.2}
      onPress={openPicker}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.row}>
        <View style={styles.flex1}>
          <Text style={styles.dateStyle}>{displayDateFormatter()}</Text>
        </View>
        <Image style={styles.calender} source={iconCalender} />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={
            value ||
            moment().subtract(5, 'hours').subtract(30, 'minutes').toDate()
          }
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}
    </TouchableOpacity>
  );
};

DateTimePickerComponent.propTypes = propTypes;
DateTimePickerComponent.defaultProps = defaultProps;

export default DateTimePickerComponent;
