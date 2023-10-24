import { StatusBar } from "expo-status-bar";
import { View, Modal, StyleSheet } from "react-native";
//react-navigation:
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";

// expo/vector-icons:
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

//custome-made components:
//screens:
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import AlarmScreen from "./screens/AlarmScreen";
import TimerScreen from "./screens/TimerScreen";
import StopwatchScreen from "./screens/StopwatchScreen";
import BedtimeScreen from "./screens/BedtimeScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

export default function App() {
  //State array variable to pass an array of timezones to the HomeScreen component,
  // which in turn passes the array to TimeList component, which passes the array
  // to the data prop of the Flatlist it uses to display the list of timezones
  // selected by the user.
  const [timesArray, setTimesArray] = useState([]);
  const [plusPressed, setPlusPressed] = useState(false);
  //Navigator:
  const Tab = createBottomTabNavigator();
  function plusButtonHandler() {
    setPlusPressed(true);
  }
  function timezoneValueHandler(timezone) {
    console.log("timezone: " + timezone);
    setTimesArray((timesArray) => [...timesArray, timezone]);
    console.log(timesArray); //When we log the value of a state variable in
    // on console after setting its value using the set method, it apparently logs
    // the last value of the variable, not the latest value, but the state of the variable
    // is updated fine, and the updated value is passed when we pass the variable using curly
    // braces.
    setPlusPressed(false);
  }
  return (
    <View style={styles.navigationContainerView}>
      <NavigationContainer style={styles.container}>
        <StatusBar style="auto" />
        <Tab.Navigator
          initialRouteName="Clock"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let icon;
              if (route.name === "Clock") {
                iconName = focused ? "clockcircle" : "clockcircleo";
                icon = <AntDesign name={iconName} size={size} color={color} />;
              } else if (route.name === "Alarm") {
                iconName = focused ? "alarm" : "alarm-outline";
                icon = <Ionicons name={iconName} size={size} color={color} />;
              } else if (route.name === "Timer") {
                iconName = focused ? "timer-sand-full" : "timer-sand";
                icon = (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Stopwatch") {
                iconName = focused ? "md-stopwatch" : "md-stopwatch-outline";
                icon = <Ionicons name={iconName} size={size} color={color} />;
              } else if (route.name === "Bedtime") {
                iconName = focused ? "bed" : "bed-outline";
                icon = (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Profile") {
                iconName = focused ? "user-circle" : "user-circle-o";
                icon = (
                  <FontAwesome name={iconName} size={size} color={color} />
                );
              }
              return icon;
            },
          })}
        >
          <Tab.Screen name="Alarm" component={AlarmScreen} />
          <Tab.Screen
            name="Clock"
            children={() => (
              <HomeScreen
                onPlusPressed={plusButtonHandler}
                timesArray={timesArray}
              />
            )}
          />
          <Tab.Screen name="Timer" component={TimerScreen} />
          <Tab.Screen name="Stopwatch" component={StopwatchScreen} />
          <Tab.Screen name="Bedtime" component={BedtimeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <Modal
        animationType="slide"
        transparent={false}
        visible={plusPressed}
        onRequestClose={() => setPlusPressed(false)}
      >
        <SearchScreen
          style={styles.modalContainer}
          passChosenTimezone={timezoneValueHandler}
        />
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  navigationContainerView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
  },
});
