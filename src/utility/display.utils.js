import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const heightPercent = percentage => windowHeight * (percentage / 100);
export const widthPercent = percentage => windowWidth * (percentage / 100);
