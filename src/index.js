import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import StackNavigation from './screens/StackNavigation.navigation';

//nav
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
