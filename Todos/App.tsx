// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBar from './app/screens/Appbar';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import NewScreen from './app/screens/NewTodo';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function NothingTodos() {
  return (
    <View>
    <Image source={require('./app/assets/box.png')} style={styles.box_image}/>
    <Text style={styles.text_youhavenothing}>
    You have nothing to-dos
  </Text> 
    </View>
  );
}

function Home({navigation}){
  return(
    
    <View style={styles.container}>
      <NothingTodos/>
      <TouchableOpacity
    style={styles.border_button}
    onPress={() => {
      navigation.navigate("New")
    }}
  >
    <View style={styles.container_icon_button}>
    <Image source={require('./app/assets/add.png')}  style={styles.icon_button}/>
    </View>
  </TouchableOpacity>

    </View>
  )
}

const Stack = createNativeStackNavigator();

const HelloWorldApp = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        title: "Todos",
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
      <Stack.Screen name='New' component={NewScreen} options={{
        title:"Add",
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  box_image:{
    background: "#000000",
    width: 105,
    height:100,
  },
  border_button:{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.2)',
      position: "absolute",
      width: 60,
      height: 60,
      right: 40,
      bottom: 50,
      backgroundColor: '#00B2FF',
      borderRadius: 100,
  },
  icon_button:{
    height:16,
    width:16,
  },
  container_icon_button:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text_youhavenothing:{
    fontSize: 16,
    height: 19,
    top:20,
  }
});
export default HelloWorldApp;