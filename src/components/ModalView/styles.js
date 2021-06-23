import { StyleSheet } from 'react-native';
import { heightPercent, widthPercent } from '../../utils/display.utils';

export default StyleSheet.create({
    container: {
        height: heightPercent(100),
        width: widthPercent(100),
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        paddingHorizontal: 15,
    },
    content: {
        marginTop: heightPercent(5),
        borderRadius: 5,
        maxHeight: heightPercent(100),
        backgroundColor: '#ffffff',
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        alignItems: 'flex-end',
    },
    addButton: {
        backgroundColor: '#2E384D',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addText: {
        color: '#ffffff',
        marginLeft: 5,
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: '#aaaaaa',
        borderRadius: 50,
        padding: 5,
    },
});
