import React, { useReducer } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, num: state.num + action.payload };
    case "decrease":
      return { ...state, num: state.num - action.payload };
    default:
      return state.num;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { num: 0 });
  const { num } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increase", payload: 10 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease", payload: 10 })}
      />
      <View>
        <Text style={styles.counterText}>Current Count:{num}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterText: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 30
  }
});

export default CounterScreen;
