import { StyleSheet, View } from "react-native";
//custome-made components:
import LocalTime from "./LocalTime";
import PlusButton from "./PlusButton";
import TimeList from "./TimeList";

function HomeScreen({ onPlusPressed, timesArray }) {
  return (
    <View style={styles.container}>
      <LocalTime />
      <TimeList timesArray={timesArray} />
      <View style={styles.buttonContainer}>
        <PlusButton onPressed={onPlusPressed} />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  text: {
    color: "white",
    margin: 8,
    fontSize: 30,
    fontWeight: "400",
  },
  buttonContainer: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 16,
  },
});
