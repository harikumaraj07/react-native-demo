import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  inputComponentStyles: {
    flexDirection: 'row',
    borderRadius: 100,
    backgroundColor: '#2E384D',
  },
  labelText: {
    ...theme.text.titleSize,
    ...theme.text.textColor,
    ...theme.headWeight,
  },
  switch: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  activeSwitch: {
    backgroundColor: '#ffbf4c',
    borderRadius: 100,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  activeLabel: {
    color: '#2E384D',
  },
});

export default styles;
