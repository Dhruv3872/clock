## Clock:

A react native app imitating the 'clock' screen of the Google Clock app  
alongwith its 'World clock' feature using [TimeAPI](https://www.timeapi.io/swagger/index.html).

### Changes introduced in this commit:

1. Addition of 'Contact info' to the Profile Screen.
1. Addition of 'Edit profile Modal'.
1. Use of [react-native-mmkv-storage](https://github.com/ammarahm-ed/react-native-mmkv-storage)
   for local storage of user profile details since  
   [AsyncStorage](https://reactnative.dev/docs/asyncstorage) has been removed by React Native.
1. Use of [react-native-fast-image](https://www.npmjs.com/package/react-native-fast-image)
   for image loading from url.
1. Had to create a [development build](https://docs.expo.dev/develop/development-builds/create-a-build/) of the project as both of the above third-party libraries  
   do not work with Expo SDK as they are available outside of the Expo SDK.  
   I used [EAS Build](https://docs.expo.dev/build/introduction/) for the development build.
1. Added 'Profile-Screen.png' as a reference image, which I have referred to  
   to add 'Contact Info' to the 'ProfileScreen' and to create its edit view.
