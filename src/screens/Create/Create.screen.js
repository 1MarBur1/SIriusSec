import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import uuid from 'uuid-random';

//styles
import styles from './Create.styles';

//components
import CustomButton from '../../components/CustomButton/CustomButton';

//nav
import {useNavigation} from '@react-navigation/native';

const Create = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>New task</Text>
      <Text style={styles.text}>Task name</Text>

      <TextInput
        style={{height: 61, width: 307, marginTop: 29}}
        placeholder="Enter task name..."
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <CustomButton
        header="Create"
        onPress={() => navigation.navigate('root/task', {userName: name})}
      />
    </View>
  );
};

export default Create;
