//This component sits in the Homescreen below the LocalTime component.
//Its purpose is to show the time and date of the timezones chosen by the user.

import { FlatList, Text, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

//Third-party components:
//for on-device storage:
import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";

//custom comonents: I will use this in the next commit.
import TimeCard from "./TimeCard";

const storage = new MMKVLoader().initialize();

function TimeList({ timezone }) {
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [timezones, setTimezones] = useMMKVStorage(
    "chosenTimezones",
    storage,
    []
  );
  //used useEffect to re-render this component whenever the minute changes:
  //This is necessary to update the timezone times whenever the minute changes:
  useEffect(() => {
    const interval = setInterval(() => {
      if (minute != new Date().getMinutes()) {
        setMinute(new Date().getMinutes());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let timezonesArrayEmpty = true;
  if (timezone !== undefined && timezone !== null) {
    if (!timezones.includes(timezone)) {
      timezones.push(timezone); //Pushing the value of 'timezone' in the variable
      // 'timezones', but this action does not set the variable in memory 'timezones'
      // with its previous values + the value of 'timezone'. We will have to set it
      // by adding the following line. I think that it's called 'spreading the
      // iterable'.
      setTimezones([...timezones]);
    }
    timezonesArrayEmpty = false;
  } else if (timezones == []) {
    // no need to do anything here as the default value of
    // 'timezonesArrayEmpty' is true.
  } else {
    timezonesArrayEmpty = false;
  }
  return (
    <View style={styles.container}>
      {!timezonesArrayEmpty && (
        <FlatList
          data={timezones}
          renderItem={(itemData) => {
            return <TimeCard timezone={itemData.item} minute={minute} />;
          }}
        />
      )}
    </View>
  );
}
export default TimeList;

const styles = StyleSheet.create({
  container: {
    height: "75%",
  },
});
