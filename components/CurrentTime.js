//This comonent is meant to be passed to the 'TimeCard' component.

import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

function CurrentTime({ timezone }) {
  const [data, setData] = useState([]);
  const url =
    "https://www.timeapi.io/api/Time/current/zone?timeZone=" + timezone;
  console.log("url: " + url);
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  const indextOfForwardSlash = timezone.indexOf("/");
  const part1 = timezone.slice(0, indextOfForwardSlash);
  const part2 = timezone.slice(indextOfForwardSlash + 1);
  console.log("part2: " + part2);
  console.log("part1: " + part1);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{part2}</Text>
        {/* //style={styles.city} */}
        <Text>{part1}</Text>
      </View>
      <View style={styles.time}>
        {/* <Text>Hi</Text> */}
        <Text>{data["time"]}</Text>
      </View>
    </View>
  );
}

export default CurrentTime;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ff8533",
    margin: 8,
    padding: 16,
    borderRadius: 16,
  },
  text: {
    color: "white",
  },
  city: {
    // font
  },
  time: {
    // flex: 1,
    justifyContent: "center",
  },
});
