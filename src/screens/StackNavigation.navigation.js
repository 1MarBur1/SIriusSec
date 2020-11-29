import React from 'react';

//screens
import Main from './Main/Main.screen';
import Task from './Task/Task.screen';
import Create from './Create/Create.screen';

//nav
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator initialRouteName="root/main">
    <Stack.Screen
      name="root/main"
      component={Main}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="root/task"
      component={Task}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="root/create"
      component={Create}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default StackNavigation;
