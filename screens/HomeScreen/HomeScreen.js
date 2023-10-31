import { StyleSheet, View } from "react-native";
//custome-made components:
import LocalTime from "./LocalTime";
import PlusButton from "./PlusButton";
import TimeList from "./TimeList";

function HomeScreen({ onPlusPressed, timezone }) {
  return (
    <View style={styles.container}>
      <LocalTime style={styles.localTime} />
      <TimeList style={styles.timeList} timezone={timezone} />
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
  buttonContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 16,
  },
});
