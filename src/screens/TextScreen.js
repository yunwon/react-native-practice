import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
  const [state, setState] = useState({
    name: "",
    password: ""
  });
  const { name, password } = state;
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        value={name}
        onChangeText={newText => setState({ name: newText })}
      />
      <Text>Hello, My name is {name}</Text>
      <Text>Enter Password:</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        value={password}
        onChangeText={newPassword => setState({ password: newPassword })}
      />
      {password.length < 5 ? (
        <Text>Password should be more than 4 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10
  }
});

export default TextScreen;
