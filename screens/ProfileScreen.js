import { Text, View, StyleSheet } from "react-native";

//custom components:
import ProfileImage from "../components/ProfileImage";
//lazy loading:
//?

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ProfileImage />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Dhruv Dave</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "orange",
  },
  imageContainer: {
    flex: 1,
  },
  nameContainer: {
    flex: 3,
    marginTop: 24,
  },
  name: {
    fontSize: 28,
  },
});
export default ProfileScreen;
