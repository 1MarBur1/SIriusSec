import React from 'react';
import {Text, View} from 'react-native';

//styles
import styles from './Create.styles';

//components
import Input from '../../components/Input/Input';
import CustomButton from '../../components/CustomButton/CustomButton';

const Create = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>New task</Text>
      <Text style={styles.text}>Task name</Text>
      <Input header="Enter task name..." />
      <CustomButton header="Create" />
    </View>
  );
};

export default Create;
