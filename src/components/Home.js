import { View, Text, Button } from 'react-native'
import React from 'react'
import Dropdwon from '../DropDwon/Dropdwon'

const Home = (props) => {
  return (
    // <View style={{flex:1, alignItems:"center", justifyContent:"center",}}>
    //      <Text style={{fontSize:35}}>Home</Text>
    //      <Button title="Go To Login Page" onPress={() => props.navigation.navigate("Login")} />
    //    </View>



    <View>
      <Dropdwon />
    </View>

  )
}

export default Home