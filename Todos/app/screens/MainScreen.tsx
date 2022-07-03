import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function MainScreen(){
  return (
    <View style={styles.appBar}>
      <Text style={styles.heading}>Todo App</Text>
      {/* <TouchableOpacity
    style={{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      // width: 70,
      // position: 'absolute',
      // bottom: 10,
      // right: 10,
      // height: 70,
      backgroundColor: '#000000',
      borderRadius: 100,
    }}
  >
     <Image source={require('./app/assets/add.png')} />
  </TouchableOpacity> */}
    {/* <FloatingAction
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
  /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#ffffff",
    color: "white",
    width: "100%",
    height: 60,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  heading: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "500"
    
  }
});