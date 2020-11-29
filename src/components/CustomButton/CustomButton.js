import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './CustomButton.styles';

const CustomButton = ({header, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{header}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
