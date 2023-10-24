import { StyleSheet, View } from "react-native";
//custome-made components:
import LocalTime from "../components/LocalTime";
import PlusButton from "../components/PlusButton";

function HomeScreen({ onPlusPressed }) {
  return (
    <View style={styles.container}>
      <LocalTime />
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
