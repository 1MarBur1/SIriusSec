import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

//styles
import styles from './Plus.styles';

//icons
import Entypo from 'react-native-vector-icons/Entypo';

const Plus = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Entypo name="plus" size={30} color="#000000" />
    </TouchableOpacity>
  );
};

export default Plus;
