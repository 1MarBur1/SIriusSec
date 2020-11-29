import React from 'react';
import {ScrollView} from 'react-native';
import TodoEl from './TodoEl';
//styles
import styles from './TodoList.styles';

const TodoList = () => {
  return (
    <ScrollView style={styles.container}>
      <TodoEl header="Study Eglish" style={styles.fir} />
      <TodoEl header="Do a workout" style={styles.sec} />
      <TodoEl header="Wash the dishes" style={styles.fir} />
      <TodoEl header="Eat" style={styles.sec} />
      <TodoEl header="Do the homework" style={styles.fir} />
      <TodoEl header="Drink some tea" style={styles.sec} />
      <TodoEl header="Go to school" style={styles.fir} />
      <TodoEl header="Feed cat" style={styles.sec} />
      <TodoEl header="Feed dog" style={styles.fir} />
      <TodoEl header="Go shopping" style={styles.sec} />
      <TodoEl header="Buy milk" style={styles.fir} />
      <TodoEl header="Learn a poem" style={styles.sec} />
      <TodoEl header="Pass exams" style={styles.fir} />
      <TodoEl header="Solve a task" style={styles.sec} />
      <TodoEl header="Play PC games" style={styles.fir} />
      <TodoEl header="Study France" style={styles.sec} />
      <TodoEl header="Wash the car" style={styles.fir} />
      <TodoEl header="Сlean the floor" style={styles.sec} />
      <TodoEl header="Water the plants" style={styles.fir} />
      <TodoEl header="Sleep" style={styles.sec} />
    </ScrollView>
  );
};

export default TodoList;
