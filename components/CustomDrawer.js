import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

function CustomDrawer(props) {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <DrawerItem
        label="Settings"
        onPress={() => {
          navigation.navigate("Settings");
        }}
      />
      <DrawerItem
        label="About Us"
        onPress={() => {
          navigation.navigate("About Us");
        }}
      />
      <DrawerItem
        label="Contact Us"
        onPress={() => {
          navigation.navigate("Contact Us");
        }}
      />
      <DrawerItem
        label="Logout"
        onPress={() => {
          navigation.navigate("Logout");
        }}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
