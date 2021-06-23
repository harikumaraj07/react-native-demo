import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Item from '../../components/Item';
import ContactInput from './contactForm';
import styles from './styles';

const propTypes = {
  contacts: PropTypes.array,
};

const defaultProps = {
  contacts: [],
};

const HomeTemplate = props => {
  const { contacts } = props;

  return (
    <View style={styles.wrapper}>
      <Header title="Contacts" leftIcon={null} {...props} />
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={<ContactInput {...props} />}
          contentContainerStyle={styles.content}
          keyExtractor={key => key.phone}
          data={contacts}
          renderItem={data => <Item {...data} {...props} />}
        />
      </View>
    </View>
  );
};

HomeTemplate.defaultProps = defaultProps;

HomeTemplate.propTypes = propTypes;

export default HomeTemplate;
