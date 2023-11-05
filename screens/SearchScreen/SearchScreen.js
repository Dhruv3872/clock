import { StyleSheet, View, TextInput, Text } from "react-native";
import { useState } from "react";
import TimezoneList from "./TimezoneList";

function SearchScreen({ passChosenTimezone }) {
  const [chosenTimezone, setChosenTimezone] = useState("");
  const [typedValue, setTypedValue] = useState("");

  // The function responsible for passing value typed in the text input
  // to the 'TimezoneList' component.
  function passTypedText(input) {
    setTypedValue(input);
  }
  function passTimezoneValue(timezone) {
    setChosenTimezone(timezone);
    passChosenTimezone(timezone);
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchTimeZone}
        placeholder="Search for a timezone"
        autoFocus={true}
        enterKeyHint="search"
        onChangeText={passTypedText}
      ></TextInput>
      <View style={styles.list}>
        <TimezoneList
          passTimezoneValue={passTimezoneValue}
          typedText={typedValue}
        />
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
