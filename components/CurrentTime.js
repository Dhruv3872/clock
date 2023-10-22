import { View } from "react-native";
import { useEffect, useState } from "react";

function CurrentTime() {
  const [data, setData] = useState([]);
  const now = new Date();
  /* While the time value at the heart of a Date object is UTC,
  the basic methods to fetch the date and time or its components
  all work in the local (i.e. host system) time zone and offset.
  */
  const time = now.getTime();
  console.log(now.getHours() + ":" + now.getMinutes());
  const url = "https://www.timeapi.io/api/Time/current/zone?timeZone=?/?";
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  // console.log(data);
  return <View>{/* <Text>{data["time"]}</Text> */}</View>;
}

export default CurrentTime;
