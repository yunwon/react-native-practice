import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const MyName = <Text style={styles.textStyle}>I'm Yun</Text>;
  return (
    <View>
      <Text style={styles.headerStyle}>This is the components screen</Text>
      {MyName}
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45
  },
  textStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
