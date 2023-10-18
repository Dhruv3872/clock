import { Text, View, StyleSheet } from "react-native";

function StopwatchScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the stopwatch screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
});
export default StopwatchScreen;
