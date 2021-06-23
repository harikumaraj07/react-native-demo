import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUserFromId, dataBluePrint } from '../../utils/data.utils';
import { generateId } from '../../utils/general.utils';
import Home from '../../templates/home.template';
import { loadDataAction, addContactAction, updateContactAction, removeContactAction, setActiveUserAction } from '../../actions/app.actions';

const propTypes = {
  contacts: PropTypes.array,
  activeUser: PropTypes.object,
  loadData: PropTypes.func,
  addContact: PropTypes.func,
  updateContact: PropTypes.func,
  removeContact: PropTypes.func,
};

const defaultProps = {
  contacts: [],
  activeUser: {},
  loadData: () => { },
  addContact: () => { },
  updateContact: () => { },
  removeContact: () => { },
};

const HomeContainer = props => {

  const { addContact, updateContact, removeContact, setActiveUser, activeUser } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const [initialValues, setInitialValues] = useState(dataBluePrint);

  const toggleModalVisible = () => {
    if (modalVisible) {
      setInitialValues(dataBluePrint);
    }
    setModalVisible(val => !val);
  }

  const onChangeActiveUser = id => {
    setActiveUser(getUserFromId(id));
  };

  const editItem = (item) => {
    setInitialValues(item);
    toggleModalVisible();
  };

  const onSubmit = (values) => {

    const payload = {
      ...values,
    };

    if (values.id) {
      updateContact(payload);
    } else {
      payload.id = generateId();
      payload.userId = activeUser.userId;
      addContact(payload);
    }
    toggleModalVisible();
  };

  const deleteItem = (item) => {
    console.log(item);
    removeContact(item);
  };

  return (
    <Home
      {...props}
      onChangeActiveUser={onChangeActiveUser}
      editItem={editItem}
      deleteItem={deleteItem}
      modalVisible={modalVisible}
      toggleModalVisible={toggleModalVisible}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  );
};

HomeContainer.defaultProps = defaultProps;

HomeContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  contacts: state.app.contacts,
  activeUser: state.app.activeUser,
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadDataAction()),
  addContact: data => dispatch(addContactAction(data)),
  updateContact: data => dispatch(updateContactAction(data)),
  removeContact: data => dispatch(removeContactAction(data)),
  setActiveUser: user => dispatch(setActiveUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
