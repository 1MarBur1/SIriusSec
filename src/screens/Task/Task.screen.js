import React from 'react';
import {Text, View} from 'react-native';

// styles
import styles from './Task.styles';

//components
import Plus from '../../components/Plus/Plus';

//nav
import {useNavigation} from '@react-navigation/native';

const Task = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Tasks</Text>
      <Plus onPress={() => navigation.navigate('root/create')} />
    </View>
  );
};

export default Task;
