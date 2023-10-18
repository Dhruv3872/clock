import { Text, View, StyleSheet } from "react-native";

function BedtimeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the bedtime screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
});
export default BedtimeScreen;
