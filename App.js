
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text,Button } from 'react-native';


const Stack = createStackNavigator();
const Home = (props) => {
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center",}}>
      <Text style={{fontSize:35}}>Home</Text>
      <Button title="Go To Login Page" onPress={() => props.navigation.navigate("Login")} />
    </View>
   
  );
};



const Login = (props) => {
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center",}}>
      <Text style={{fontSize:35}}>Login</Text>
      <Button title="Go To Login Page" onPress={() => props.navigation.navigate("Home")} />

    </View>
   
  );
};




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}