import { View, Text, Button } from 'react-native'
import React from 'react'

const Login = (props) => {
  return (
  <View style={{flex:1, alignItems:"center", justifyContent:"center",}}>
        <Text style={{fontSize:35}}>Login</Text>
        <Button title="Go To Login Page" onPress={() => props.navigation.navigate("Home")} />
  
      </View>
  )
}

export default Login