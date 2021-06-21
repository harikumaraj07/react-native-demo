import {StyleSheet} from 'react-native';
import {widthPercentage, heightPercentage} from '../../utility';

const styles = StyleSheet.create({
  inputComponentStyles: {
    borderBottomColor: '#dfdfdf',
    borderBottomWidth: 1,
  },
  labelText: {
    color: '#2E384D',
  },
  dateStyle: {
    paddingVertical: 14,
    color: '#2E384D',
  },
  calender: {
    height: widthPercentage(8),
    width: widthPercentage(8),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: heightPercentage(6),
  },
  flex1: {
    flex: 1,
  },
});

export default styles;
