import { StyleSheet } from 'react-native';
import {widthPercent} from '../../utility/display.utils';

export default StyleSheet.create({
    container: {
        marginHorizontal: 15,
        paddingVertical: 19,
        alignItems: 'center',
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
    }
})