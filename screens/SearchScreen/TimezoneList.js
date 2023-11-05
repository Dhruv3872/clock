import { useEffect, useCallback } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

//Third-party components:
//for on-device storage:
import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";

const storage = new MMKVLoader().initialize();

function TimezoneList({ passTimezoneValue, typedText }) {
  const [timezoneList, setTimezoneList] = useMMKVStorage(
    "timezoneList",
    storage,
    []
  );
  //The parameter 'timezone' will be passed to this method since this function
  //  is passed as an argument to the filter function of the array 'timezoneList'.
  function includesTypedText(timezone) {
    return timezone.toLowerCase().includes(typedText.toLowerCase());
  }
  const filteredTimezoneList = timezoneList.filter(includesTypedText);
  if (timezoneList.length == 0) {
    //API endpoint to get the entire list of timezones.
    const url = "https://www.timeapi.io/api/TimeZone/AvailableTimeZones";
    useEffect(() => {
      fetch(url)
        .then((resp) => resp.json())
        .then((json) => setTimezoneList([].concat(json)))
        .catch((error) => console.error(error));
    }, []);
  }
  //This constant is introduced for performance improvement of the Flatlist.
  //Not sure how much success we have got with this though.
  const pressableTimezone = useCallback((itemData) => {
    return (
      <View style={styles.timezoneContainer}>
        <Pressable
          onPress={() => {
            selectedTimezone = itemData.item;
            passTimezoneValue(selectedTimezone);
          }}
        >
          <Text style={styles.timezoneText}>{itemData.item}</Text>
        </Pressable>
      </View>
    );
  });
  return (
    <FlatList
      style={styles.timezoneListContainer}
      data={filteredTimezoneList}
      extraData={typedText}
      renderItem={pressableTimezone}
      //for performance improvement of this flatlist:
      removeClippedSubviews={true}
      maxToRenderPerBatch={100}
      updateCellsBatchingPeriod={10}
      initialNumToRender={25}
      windowSize={51}
      getItemLayout={(data, index) => ({
        length: 32,
        offset: 0,
        index: index,
      })}
    />
  );
}

const styles = StyleSheet.create({
  timezoneListContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
  },
  timezoneContainer: {
    flex: 1,
    margin: 2,
    paddingVertical: 4,
    backgroundColor: "#ff8533",
    borderRadius: 4,
    paddingLeft: 15,
  },
  timezoneText: {
    fontSize: 20,
  },
});

export default TimezoneList;
