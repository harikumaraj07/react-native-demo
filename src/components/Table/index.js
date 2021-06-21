import PropTypes from 'prop-types';
import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {widthPercentage} from '../../utility';

import styles from './styles';

const propTypes = {
  heading: PropTypes.array,
  data: PropTypes.array,
  highlightLastColumn: PropTypes.bool,
};

const defaultProps = {
  heading: [],
  data: [],
  highlightLastColumn: false,
};

const Table = props => {
  const {heading, data, highlightLastColumn} = props;

  const getWidth = col => {
    switch (col) {
      case 1:
        return '100%';
      case 2:
        return '50%';
      case 3:
        return '33.33%';
      default:
        return widthPercentage(30);
    }
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          {heading.map((_heading, index) => (
            <View
              style={[styles.headingWrapper, {width: getWidth(heading.length)}]}
              key={`heading-${index}`}>
              <Text numberOfLines={2} style={styles.headingText}>
                {_heading}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.contentContainer}>
          {data.map((row, rowIndex) => (
            <View style={styles.tableRow} key={`row-${rowIndex}`}>
              {row.map((col, colIndex) => (
                <View
                  style={[styles.tableCol, {width: getWidth(row.length)}]}
                  key={`row-${rowIndex}-col-${colIndex}`}>
                  <Text
                    numberOfLines={2}
                    style={[
                      styles.colText,
                      highlightLastColumn && data.length - 1 === rowIndex
                        ? styles.colHighlight
                        : {},
                    ]}>
                    {col}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

Table.defaultProps = defaultProps;

Table.propTypes = propTypes;

export default Table;
