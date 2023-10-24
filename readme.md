## Clock:

A react native app imitating the 'clock' screen of the Google Clock app  
alongwith its 'World clock' feature using [TimeAPI](https://www.timeapi.io/swagger/index.html).

### Changes introduced in this commit:

1. Put components in their respective screen component folders. This will not affect  
   the components which will be used on different screens if any. We will keep them in  
   the 'components' folder.
1. Created 'TimeList' component using FlatList and Added it in the HomeScreen component to show a list of  
   timezones chosen by the customer. Later, we will call TimeAPI to obtain the date and time  
   values for these timezones and display them in place of the timezones.
