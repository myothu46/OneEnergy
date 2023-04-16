import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/navigation/Login';
import HomePage from './src/navigation/HomePage';
import TabsPage from './src/navigation/BottomTabNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginPage} options={{ headerShown: false, title: 'Login' }} />
        <Stack.Screen name="home" component={TabsPage} options={{ headerShown: false, title: 'Tabs' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;