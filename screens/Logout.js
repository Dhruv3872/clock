import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Logout() {
  return (
    <View style={styles.container}>
      <Text>This is the Logout screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
});
