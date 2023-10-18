import { StyleSheet, View, TextInput } from "react-native";

function SearchScreen() {
  function searchTimeZone(typedValue) {
    console.log(typedValue);
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchTimeZone}
        onChangeText={searchTimeZone}
        placeholder="Search for a time zone"
        autoFocus={true}
      ></TextInput>
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
  },
});
