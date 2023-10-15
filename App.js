import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CurrentTime from "./components/CurrentTime";
import LocalTime from "./components/LocalTime";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clock</Text>
      <StatusBar style="auto" />
      {/* <CurrentTime /> */}
      <LocalTime />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    marginTop: 50,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    margin: 8,
    fontSize: 30,
    fontWeight: "400",
  },
});
