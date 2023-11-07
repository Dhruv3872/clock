import { StyleSheet, View, Modal } from "react-native";
import { useState } from "react";
//custome-made components:
import LocalTime from "./LocalTime";
import PlusButton from "./PlusButton";
import TimeList from "./TimeList";

//modal:
import SearchScreen from "../SearchScreen/SearchScreen";

function ClockScreen() {
  const [timezone, setTimezone] = useState();
  const [plusPressed, setPlusPressed] = useState(false);

  function plusButtonHandler() {
    setPlusPressed(true);
  }

  function timezoneValueHandler(passedTimezone) {
    setTimezone(passedTimezone);
    setPlusPressed(false);
  }

  return (
    <View style={styles.container}>
      <LocalTime />
      <TimeList timezone={timezone} />
      <View style={styles.buttonContainer}>
        <PlusButton onPressed={plusButtonHandler} />
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={plusPressed}
        onRequestClose={() => setPlusPressed(false)}
      >
        <SearchScreen
          style={styles.modalContainer}
          passChosenTimezone={timezoneValueHandler}
        />
      </Modal>
    </View>
  );
}

export default ClockScreen;

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
  modalContainer: {
    flex: 1,
  },
});
