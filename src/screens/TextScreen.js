import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
  const [state, setState] = useState({
    name: "",
    password: "",
    validationText: ""
  });
  const { name, password, validationText } = state;

  const validation = newPassword => {
    let password = newPassword.split("");
    return password.length < 5
      ? setState({
          validationText: "More than 5 characters, you bitch!"
        })
      : setState({ validationText: "" });
  };

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
        onChangeText={newPassword => validation(newPassword)}
      />
      <Text>{validationText}</Text>
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
