import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

//react-navigation:
import { NavigationContainer } from "@react-navigation/native";
//drawer-navigation:
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./components/CustomDrawer";

//drawer navigation screens:
import Home from "./components/Home";
import SettingsScreen from "./screens/SettingsScreen";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import Logout from "./screens/Logout";

export default function App() {
  const drawer = createDrawerNavigator();
  return (
    <View style={styles.navigationContainerView}>
      <NavigationContainer style={styles.container}>
        <StatusBar style="auto" />
        <drawer.Navigator
          drawerContent={(props) => <CustomDrawer {...props} />}
        >
          {/* The Home screen now holds all the tabs using
           Bottom tab navigator. */}
          <drawer.Screen name="Home" component={Home} />
          <drawer.Screen name="Settings" component={SettingsScreen} />
          <drawer.Screen name="About Us" component={AboutUs} />
          <drawer.Screen name="Contact Us" component={ContactUs} />
          <drawer.Screen name="Logout" component={Logout} />
        </drawer.Navigator>
      </NavigationContainer>
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
