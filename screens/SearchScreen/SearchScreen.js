import { StyleSheet, View, TextInput, Text } from "react-native";
import { useState } from "react";
import TimezoneList from "./TimezoneList";

function SearchScreen({ passChosenTimezone }) {
  const [chosenTimezone, setChosenTimezone] = useState("");
  //Not using this function to do anything meaningful just yet.
  function fetchTimezones(typedValue) {
    console.log(typedValue);
  }
  function passTimezoneValue(timezone) {
    setChosenTimezone(timezone);
    passChosenTimezone(timezone);
  }
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
