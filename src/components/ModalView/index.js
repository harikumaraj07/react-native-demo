import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';

const propTypes = {
    children: PropTypes.element,
};

const defaultProps = {
    children: <Text>Children</Text>,
};

const ModalView = props => {

    const { modalVisible, children, toggleModalVisible } = props;

    return (
        <>
            <TouchableOpacity onPress={toggleModalVisible}>
                <View style={styles.buttonContainer}>
                    <View style={styles.addButton}>
                        <Icon name="plus" size={25} color="#ffffff" />
                        <Text style={styles.addText}>Add New</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={toggleModalVisible}
            >
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={styles.content}>
                        <TouchableOpacity style={styles.closeButton} onPress={toggleModalVisible}>
                            <Icon name="cross" size={25} color="#444444" />
                        </TouchableOpacity>
                        {children}
                    </ScrollView>
                </View>
            </Modal>
        </>
    )
}

ModalView.defaultProps = defaultProps;

propTypes.propTypes = propTypes;

export default ModalView;
