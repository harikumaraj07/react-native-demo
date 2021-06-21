import {StyleSheet} from 'react-native';
import {heightPercentage} from '../../utility';

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  headingContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headingWrapper: {
    height: heightPercentage(6),
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 5,
  },
  tableRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flexDirection: 'row',
  },
  tableCol: {
    height: heightPercentage(6),
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 5,
  },
  headingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2E384D',
  },
  colText: {
    fontSize: 12,
    color: '#2E384D',
  },
  colHighlight: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2E384D',
  },
});

export default styles;
