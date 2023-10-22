import { useState, useEffect } from "react";
import { FlatList, Pressable, Text } from "react-native";

function TimezoneList({ passTimezoneValue }) {
  const [timezoneList, setTimezoneList] = useState([]);
  //API endpoint to get the entire list of time zones.
  const url = "https://www.timeapi.io/api/TimeZone/AvailableTimeZones";
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setTimezoneList(json))
      .catch((error) => console.error(error));
  }, []);
  console.log(timezoneList);
  return (
    <FlatList
      data={timezoneList}
      renderItem={(itemData) => {
        return (
          <Pressable
            onPress={() => {
              selectedTimezone = itemData.item;
              console.log(itemData.item);
              console.log(selectedTimezone);
              passTimezoneValue(selectedTimezone);
            }}
          >
            <Text>{itemData.item}</Text>
          </Pressable>
        );
      }}
    />
  );
}

export default TimezoneList;
