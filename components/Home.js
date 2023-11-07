//Screens accessible through bottom tab navigation
// have been accommodated in this component:
import { React } from "react";

//Tab-Navigator:
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Third-party components:
// expo/vector-icons:
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

//custome-made components:
//tab navigation and related screens:
import ClockScreen from "../screens/ClockScreen/ClockScreen";
import AlarmScreen from "../screens/AlarmScreen";
import TimerScreen from "../screens/TimerScreen";
import StopwatchScreen from "../screens/StopwatchScreen";
import BedtimeScreen from "../screens/BedtimeScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

function Home() {
  return (
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
            icon = <FontAwesome name={iconName} size={size} color={color} />;
          }
          return icon;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Alarm" component={AlarmScreen} />
      <Tab.Screen name="Clock" component={ClockScreen} />
      <Tab.Screen name="Timer" component={TimerScreen} />
      <Tab.Screen name="Stopwatch" component={StopwatchScreen} />
      <Tab.Screen name="Bedtime" component={BedtimeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default Home;
