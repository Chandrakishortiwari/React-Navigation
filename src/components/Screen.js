import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
const Stack = createStackNavigator();


const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const Screen = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />

    </Stack.Navigator>

  </NavigationContainer>
  )
}

export default Screen;



  const Login = () => {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  };