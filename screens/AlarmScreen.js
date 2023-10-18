import { Text, View, StyleSheet } from "react-native";

function AlarmScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the alarm screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
});
export default AlarmScreen;
