import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = props => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.text}>Image Score:{props.imageScore}</Text>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16
  }
});

export default ImageDetail;
