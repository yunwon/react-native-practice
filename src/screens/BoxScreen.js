import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 300
  },
  textOneStyle: {
    backgroundColor: "blue",
    height: 100,
    width: 100
  },
  textTwoStyle: {
    backgroundColor: "yellow",
    height: 100,
    width: 100,
    top: 100
  },
  textThreeStyle: {
    backgroundColor: "red",
    height: 100,
    width: 100
  }
});
export default BoxScreen;
