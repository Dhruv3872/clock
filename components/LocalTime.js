import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

function LocalTime() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toDateString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  /* While the time value at the heart of a Date object is UTC,
    the basic methods to fetch the date and time or its components
    all work in the local (i.e. host system) time zone and offset.
    */
  return (
    <View style={styles.localTimeView}>
      <Text style={styles.time}>{time.toString()}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

export default LocalTime;

const styles = StyleSheet.create({
  time: {
    color: "white",
    fontSize: 60,
  },
  date: {
    color: "white",
    fontSize: 18,
  },
  localTimeView: {
    marginLeft: 16,
  },
});
