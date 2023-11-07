//This comonent is passed to the 'TimeCard' component.

import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

function CurrentTime({ timezone, minute }) {
  //json response from TimeAPI will be stored in this state variable:
  const [data, setData] = useState([]);
  //state variable to store and show day of the week in the format of
  //3 letters only: Mon, Tue, etc:
  const [day, setDay] = useState("");
  const url =
    "https://www.timeapi.io/api/Time/current/zone?timeZone=" + timezone;
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        setData(json);
        setDay(json["dayOfWeek"].slice(0, 3));
      })
      .catch((error) => console.error(error));
  }, [minute]);
  const indextOfForwardSlash = timezone.indexOf("/");
  const part1 = timezone.slice(0, indextOfForwardSlash);
  const part2 = timezone.slice(indextOfForwardSlash + 1);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text20}>{part2}</Text>
        <Text>{part1}</Text>
      </View>
      <View style={styles.timeView}>
        <View style={styles.timeText}>
          <Text style={[styles.whiteText, styles.text24]}>{data["time"]}</Text>
        </View>
        <View style={styles.dayAndDate}>
          <Text style={styles.whiteText}>{day} </Text>
          <Text style={styles.whiteText}>{data["date"]} </Text>
        </View>
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
  timeText: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  whiteText: {
    color: "white",
  },
  text20: {
    fontSize: 20,
  },
  text24: {
    fontSize: 24,
  },
  timeView: {
    // flex: 1,
    justifyContent: "center",
  },
  dayAndDate: {
    flexDirection: "row",
  },
});
