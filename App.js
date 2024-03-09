import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator intialRouteName='ProductPage'>
        <Stack.Screen name="ProductPage" component={ProductPage} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;