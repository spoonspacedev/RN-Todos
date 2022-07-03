import React from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Image } from "react-native";
import AppBar from "./Appbar";

export default function NewScreen(){
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.appBar}>
          <TextInput
        // onChangeText={onChangeNumber}
        // value={number}
        // placeholder="Title"
        placeholder="Title"
      />
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
});