import PropTypes from 'prop-types';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

import {users} from '../../utils/data.utils';
import styles from './styles';

const propTypes = {
  title: PropTypes.string,
  leftIcon: PropTypes.element,
  onPressLeftIcon: PropTypes.func,
  leftIconId: PropTypes.string,
  toolbarContainer: PropTypes.object,
  transparentBackground: PropTypes.bool,
  rightIcon: PropTypes.element,
  onPressRightIcon: PropTypes.func,
};

const defaultProps = {
  title: '',
  leftIcon: <Icon name="arrowleft" size={30} color="#FFFFFF" />,
  onPressLeftIcon: null,
  leftIconId: '',
  toolbarContainer: {},
  transparentBackground: false,
  rightIcon: null,
  onPressRightIcon: () => { },
};

const Header = props => {
  const navigation = useNavigation();

  const { activeUser, onChangeActiveUser, toolbarContainer, transparentBackground, leftIcon, leftIconId, leftIconName, title, onPressLeftIcon } = props;

  return (
    <View>
      <View
        style={[
          styles.toolbarContainer,
          toolbarContainer,
          transparentBackground ? styles.transparentBackground : {},
        ]}>
        {!!leftIcon && (
          <TouchableOpacity
            accessibilityLabel={leftIconId}
            testID={leftIconId}
            onPress={
              onPressLeftIcon
                ? onPressLeftIcon
                : () => {
                  navigation.goBack();
                }
            }>
            <View style={styles.leftIconContainer}>{leftIcon}</View>
          </TouchableOpacity>
        )}

        <View style={styles.middleContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              styles.toolbarTitle,
              leftIconName === '' ? styles.paddingLeft16 : {},
            ]}>
            {title}
          </Text>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={activeUser.id}
            onValueChange={onChangeActiveUser}>
            {users.map(user => <Picker.Item key={user.id} label={`${user.first_name} ${user.last_name}`} value={user.id} />)}
          </Picker>
        </View>
      </View>
    </View>
  );
};

Header.defaultProps = defaultProps;

Header.propTypes = propTypes;

export default Header;
