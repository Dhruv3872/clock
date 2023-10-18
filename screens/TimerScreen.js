import { Text, View, StyleSheet } from "react-native";

function TimerScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the timer screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
});
export default TimerScreen;
