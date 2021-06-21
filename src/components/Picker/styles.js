import {StyleSheet} from 'react-native';

import theme from '../../theme';
import {heightPercentage} from '../../utility';

const styles = StyleSheet.create({
  labelWrapper: {
    flexDirection: 'row',
  },
  labelText: {
    ...theme.text.titleSize,
    ...theme.text.textColor,
    ...theme.headWeight,
  },
  caretStyle: {
    position: 'absolute',
    bottom: 6,
    right: 8,
  },
  listPickerContainer: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  listPickerStyle: {
    width: '100%',
    padding: 0,
    ...theme.text.textColor,
    height: heightPercentage(6),
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
  },
  iconContainer: {
    height: '100%',
    justifyContent: 'center',
  },
});

export default styles;
