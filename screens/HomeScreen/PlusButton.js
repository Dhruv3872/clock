import { Pressable, View, Text, StyleSheet } from "react-native";

function PlusButton({ onPressed }) {
  return (
    <View style={styles.buttonView}>
      <Pressable style={styles.buttonInnerContainer} onPress={onPressed}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
}

export default PlusButton;

const styles = StyleSheet.create({
  buttonView: {
    // margin: 4,
    // borderColor: "white",
    // overflow: "hidden",
  },
  buttonInnerContainer: {
    borderRadius: 70,
    backgroundColor: "blue",
    // padding: 8,
    margin: 4,
    // flex: 1,
    width: 75,
    // elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 50,
    textAlign: "center",
  },
});
