import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const propTypes = {
  checked: PropTypes.bool,
  title: PropTypes.string,
  onPress: PropTypes.func,
  id: PropTypes.string,
  checkBoxAtRight: PropTypes.bool,
  disabled: PropTypes.bool,
};

const defaultProps = {
  checked: false,
  title: '',
  onPress: () => {},
  id: '',
  checkBoxAtRight: false,
  disabled: false,
};

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.checked !== prevProps.checked) {
      this.setState({checked: this.props.checked});
    }
  }

  onPress = () => {
    this.setState(prevState => {
      this.props.onPress(!prevState.checked);
      return {checked: !prevState.checked};
    });
  };

  render() {
    const {checkBoxAtRight, title, id, disabled} = this.props;
    return (
      <View>
        <TouchableOpacity
          accessibilityLabel={id}
          testID={id}
          onPress={this.onPress}
          style={[
            styles.container,
            checkBoxAtRight ? styles.checkBoxAtRight : {},
          ]}
          disabled={disabled}>
          {!checkBoxAtRight && (
            <Icon
              name={
                this.state.checked
                  ? 'radio-button-checked'
                  : 'radio-button-unchecked'
              }
              size={25}
              type="material-community"
              color={disabled ? '#666666' : '#FF5F72'}
            />
          )}
          <Text style={styles.checkBoxTitle}>{title}</Text>
          {checkBoxAtRight && (
            <Icon
              name={
                this.state.checked
                  ? 'radio-button-checked'
                  : 'radio-button-unchecked'
              }
              size={25}
              type="material-community"
              color={disabled ? '#666666' : '#FF5F72'}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

CheckBox.defaultProps = defaultProps;

CheckBox.propTypes = propTypes;

export default CheckBox;
