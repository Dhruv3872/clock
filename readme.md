## Clock:

A react native app imitating the 'clock' screen of the Google Clock app  
alongwith its 'World clock' feature using [TimeAPI](https://www.timeapi.io/swagger/index.html).

### Changes introduced in this commit:

1. In Profile screen:
   1. Added visual feedback if email or phone number being entered is invalid.
   1. The phone number field is designed in such a way that Brackets and dashes appear  
      by defaul when the user is viewing in the saved view and also when they edit  
      the number in the edit view.
   1. A bug in the app: Upon restarting the app, when 'ProfileScreen' is rendered,  
      the default values of state variables 'isEmailValid' and 'isPhoneValid' are false.  
      Hence, after clicking on the 'Edit' button, if the user directly clicks on 'Save',  
      the logic as of the last commit wouldn't allow saving since the above two state variables  
      are false.- Fixed.
1. In 'HomeScreen':
   1. The chosen timezones are now stored in the form of an array in local storage.  
      Hence, upon a restarting the app, the user won't lose the timezones chosen by them  
      to be shown on the screen.

### Changes in mind to be introduced in the near-future commits:

1. In Home Screen: The timezones passed from the Search screen are supposed to be rendered on  
   this screen with their time, date, and city name.
1. There should be an 'x' button to delete a timezone from this screen.
