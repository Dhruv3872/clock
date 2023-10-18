## Clock:

A react native app imitating the 'clock' screen of the Google Clock app  
alongwith its 'World clock' feature using [TimeAPI](https://www.timeapi.io/swagger/index.html).

### Changes introduced in this commit:

1. New components:
   1. PlusButton: The button that takes the user to the 'SearchScreen'.
   1. ProfileImage: The component containing the image for the profile image  
      shown on the 'ProfileScreen'.
2. Navigation: Used react native's tab navigator to imitate the following screens  
   of the Google Clock app:
   1. Alarm
   1. Clock
   1. Timer
   1. Stopwatch
   1. Bedtime
3. ProfileScreen: This is an addition, which is not present in the original Clock app.  
   It contains a profile image which is just an image fetched from a web url for now.
   The idea is to fetch this image using lazy loading hopefully in the next commit.
