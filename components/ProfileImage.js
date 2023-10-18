import { View, Image } from "react-native";

function ProfileImage() {
  return (
    <View>
      <Image
        height={100}
        width={100}
        source={{
          uri: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png",
        }}
      />
    </View>
  );
}

export default ProfileImage;
