
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text,Button } from 'react-native';
import Login from './src/components/Login';
import Home from './src/components/Home';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        
        <Stack.Screen name="Home" component={Home}  options={{
    // headerTitle: (props) => <Button title="Click"  />,
    headerRight:(props)=> <Button title="Click"  /> ,
    headerStyle: { backgroundColor: "blue" },
    headerTintColor: "pink",
  }} />
        <Stack.Screen name="Login" component={Login} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}