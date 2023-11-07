import { Text, View, StyleSheet } from "react-native";

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Settings screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
});
export default SettingsScreen;
