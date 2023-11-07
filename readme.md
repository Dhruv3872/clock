## Clock:

A react native app imitating the 'clock' screen of the Google Clock app  
alongwith its 'World clock' feature using [TimeAPI](https://www.timeapi.io/swagger/index.html).

### Changes introduced in this commit:

1. Added [Drawer navigation](https://reactnavigation.org/docs/drawer-navigator) to the app.
2. Added SearchScreen modal to the ClockScreen component instead of adding it  
   to the parent of ClockScreen.

### Changes in mind to be introduced in the near-future commits:

1. As of this commit, the development build size is 70 MB. We need to shrink it  
   to bring it under 30MB.
