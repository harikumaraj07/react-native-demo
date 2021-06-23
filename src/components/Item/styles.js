import { StyleSheet } from 'react-native';
import {widthPercent} from '../../utils/display.utils';

export default StyleSheet.create({
    container: {
        marginHorizontal: 5,
        paddingVertical: 19,
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#2E384D',
    },
    row: {
        flexDirection: 'row'
    },
    image: {
        height: widthPercent(25),
        width: widthPercent(25),
    },
    col: {
        flex: 1
    },
    content: {
        paddingLeft: 10,
        justifyContent: 'center',
    },
    text: {
        color: '#999999',
        marginTop: 5,
    },
    title: {
        color: '#2E384D',
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2E384D',
    },
    alignItemsCenter: {
        alignItems: 'center',
    },
    nameText: {
        color: '#888888',
    },
    phoneText: {
        color: '#2E384D',
        fontWeight: 'bold'
    },
    companyNameText: {
        fontSize: 14,
        color: '#444444',
    },
    iconContainer: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#2784d6',
    },
    actionsCotnainer: {
        marginLeft: 10,
    },
    horizontalDivider: {
        width: 10,
    },
    bgRed: {
        backgroundColor: '#c9303b',
    }
})