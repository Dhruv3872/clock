## Clock:

A react native app imitating the 'clock' screen of the Google Clock app  
alongwith its 'World clock' feature using [TimeAPI](https://www.timeapi.io/swagger/index.html).

### Changes introduced in this commit:

1. Added a 'TimezoneList' custom component to show the list of time zones fetched from the TimeAPI. Then I used the component by importing it into the 'SearchScreen' component.
2. Added a Modal at the root of the app to show the search screen when the + button is clicked from the home screen.
