import FastImage from "react-native-fast-image";

const ProfileImage = () => (
  <FastImage
    style={{ width: 100, height: 100 }}
    source={{
      uri: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png",
    }}
    resizeMode={FastImage.resizeMode.contain}
  />
);

export default ProfileImage;
