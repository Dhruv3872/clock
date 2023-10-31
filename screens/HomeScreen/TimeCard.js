//This component is responsible for showing time, date, and
// city of the chosen timezone on the 'HomeScreen' in the
// form of a card. It will be rendered iteratively as a
// Flatlist for each of the chosen timezones.
// It is meant to be passed to the 'TimeList' component.

import { View } from "react-native";
import CurrentTime from "../../components/CurrentTime";

function TimeCard({ timezone }) {
  return (
    <View>
      <View>
        {/* <Text>{timezone}</Text> */}
        <CurrentTime timezone={timezone} />
      </View>
    </View>
  );
}

export default TimeCard;
