import React from 'react';
import {Text, View} from 'react-native';

// styles
import styles from './Main.styles';

//components
import Input from '../../components/Input/Input';
import CustomButton from '../../components/CustomButton/CustomButton';

//nav
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Welcome to a todo app</Text>
      <Text style={styles.text}>Email</Text>
      <Input header="Enter email..." />
      <Text style={[styles.text, {marginTop: 34}]}>Password</Text>
      <Input header="Enter password..." />
      <CustomButton
        header="Login"
        onPress={() => navigation.navigate('root/task', {userName: ''})}
      />
    </View>
  );
};

export default Main;
