import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

import currency from '../../utility/currency.utils';
import styles from './styles';

const propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
};

const defaultProps = {
    data: [],
    isLoading: false,
};

export default props => {

    const { item, onItemPress } = props;

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => { onItemPress(item); }}
        >
            <View style={[styles.container, styles.row]}>
                <Image
                    source={{
                        uri: item.artworkUrl60,
                    }}
                    style={styles.image}
                />
                <View style={[styles.col, styles.content]}>
                    <Text style={[styles.text, styles.title]}>{item.artistName}</Text>
                    <Text numberOfLines={2} style={styles.text}>{item.collectionName}</Text>
                    <Text style={styles.text}>Released on {moment(item.releaseDate).format('DD MMM YYYY')}</Text>
                    <Text style={[styles.text, styles.price]}>{item.trackPrice || item.collectionPrice} {currency[item.currency]}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}