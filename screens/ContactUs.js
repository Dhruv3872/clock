import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ContactUS() {
  return (
    <View style={styles.container}>
      <Text>This is the Contact Us screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
});
