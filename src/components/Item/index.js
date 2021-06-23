import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const propTypes = {
    item: PropTypes.object,
    editItem: PropTypes.func,
    deleteItem: PropTypes.func,
};

const defaultProps = {
    item: {},
    editItem: () => { },
    deleteItem: () => { },
};

const Item = props => {

    const { item, editItem, deleteItem } = props;

    return (
        <View>
            <View style={styles.container}>
                <View style={[styles.row, styles.alignItemsCenter]}>
                    <View style={styles.col}>
                        <Text style={styles.nameText}>{item.first_name} {item.last_name}</Text>
                        <Text style={styles.phoneText}>{item.phone}</Text>
                    </View>
                    <View>
                        <Text style={styles.companyNameText}>{item.company_name}</Text>
                    </View>
                    <View style={[styles.actionsCotnainer, styles.row]}>
                        <TouchableOpacity style={styles.iconContainer} onPress={() => { editItem(item); }}>
                            <Icon name="edit" size={15} color="#FFFFFF" />
                        </TouchableOpacity>
                        <View style={styles.horizontalDivider} />
                        <TouchableOpacity style={[styles.iconContainer, styles.bgRed]} onPress={() => { deleteItem(item); }}>
                            <Icon name="delete" size={15} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

Item.defaultProps = defaultProps;

Item.propTypes = propTypes;

export default Item;
