import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function AppBar(){
  return (
    <View style={styles.appBar}>
      <Text style={styles.heading}>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    position: "absolute",
    width: 360,
    height: 60,
    left: 15,
    top: 20,
    background: "#FFFFFF",
    shadowColor: 'rgba(18, 14, 66, 0.05)',
    // shadowOffset: {
    //   width: 20,
    //   height: 5,
      
    // },
    // shadowOpacity: 0.41,
    // shadowRadius: 9.11,
    elevation: 14,
  },
  heading: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "500",
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
});