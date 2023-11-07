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
  buttonView: {},
  buttonInnerContainer: {
    borderRadius: 70,
    backgroundColor: "blue",
    margin: 4,
    width: 75,
  },
  buttonText: {
    color: "white",
    fontSize: 50,
    textAlign: "center",
  },
});
