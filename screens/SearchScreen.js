import { StyleSheet, View, TextInput, Text } from "react-native";
import { useState } from "react";
import TimezoneList from "../components/TimezoneList";

function SearchScreen() {
  [chosenTimezone, setChosenTimezone] = useState("");
  //Not using this function to do anything meaningful just yet.
  function fetchTimezones(typedValue) {
    console.log(typedValue);
  }
  function passTimezoneValue(timeZone) {
    console.log("timezone: ");
    console.log(timeZone);
    setChosenTimezone(timeZone);
  }
  const timeZones = ["1", "2", "3", "4"];
  console.log(timeZones[0]);
  console.log("chosenTimezone: " + chosenTimezone);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchTimeZone}
        // onChangeText={fetchTimezones}
        placeholder="Search for a time zone"
        autoFocus={true}
        enterKeyHint="search"
        value={chosenTimezone}
      ></TextInput>
      <View style={styles.list}>
        <TimezoneList passTimezoneValue={passTimezoneValue} />
      </View>
      <Text>{chosenTimezone}</Text>
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  searchTimeZone: {
    marginTop: 50,
    fontSize: 18,
    marginLeft: 16,
    borderBottomWidth: 2,
    borderBottomColor: "blue",
  },
  list: {
    flex: 1,
  },
});
