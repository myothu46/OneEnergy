import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/Login';
import HomePage from './pages/HomePage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginPage} options={{ headerShown: false, title: 'Login' }} />
        <Stack.Screen name="home" component={HomePage} options={{ title: 'Home' }} />
        {/* <Stack.Screen name="Detail" component={DetialScreen} options={{ title: 'Second Screen' }}
          initialParams={{ itemId: 42 }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;