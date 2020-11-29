import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

//styles
import styles from './TodoEl.styles';

const TodoEl = ({header, style}) => {
  return (
    <View style={style}>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.text}>29 november 2020</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

TodoEl.defaultProps = {
  header: 'Без названия',
};

export default TodoEl;
