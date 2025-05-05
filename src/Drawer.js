import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomeDrawer from './CustomeDrawer';
const Draw = createDrawerNavigator();

 const Home = ()=>{
    return(
        <View>
        <Text>home</Text>
      </View>
    )
 }

 const Login = ()=>{
    return(
        <View>
        <Text>Login</Text>
      </View>
    )
 }


const Drawer = () => {
  return (
   
    <Draw.Navigator drawerContent={(props) => <CustomeDrawer {...props} /> }>
      <Draw.Screen name="Home" component={Home} />
      <Draw.Screen name="Profile" component={Login} />
    </Draw.Navigator>
   
   
  )
}

const styles = StyleSheet.create({})

export default Drawer

