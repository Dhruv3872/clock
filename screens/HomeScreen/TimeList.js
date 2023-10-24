import { FlatList, Text, View } from "react-native";

function TimeList({ timesArray }) {
  return (
    <View>
      <FlatList
        data={timesArray}
        renderItem={(itemData) => {
          return <Text>{itemData.item}</Text>;
        }}
      />
    </View>
  );
}

export default TimeList;
