## Clock:

A react native app imitating the 'clock' screen of the Google Clock app  
alongwith its 'World clock' feature using [TimeAPI](https://www.timeapi.io/swagger/index.html).

### Changes introduced in this commit:

1. SearchScreen:
   1. TimezoneList is now rendered using locally saved array using react-native-mmkv-storage library.  
      At the first instance, the data is fetched from the TimeAPI.
   1. Tried to add props to the FlatList component of TimezoneList to optimize performance scrolling  
      without significant success as still a lot better understanding of these props is needed.
   1. Made the TimezoneList searchable using the TextInput placed above it.

### Changes in mind to be introduced in the near-future commits:

1. Incorporating stack navigation by adding Hamburger icon to the home screen.
