import React from 'react';
import {Text, View} from 'react-native';
import uuid from 'uuid-random';

// styles
import styles from './Task.styles';

//components
import Plus from '../../components/Plus/Plus';
import TodoList from '../../components/Todo/TodoList';
//nav
import {useNavigation} from '@react-navigation/native';

const Task = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Tasks</Text>
      <TodoList />
      <Plus onPress={() => navigation.navigate('root/create')} />
    </View>
  );
};

export default Task;
