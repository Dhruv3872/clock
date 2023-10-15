## Clock:

A react native app imitating the 'clock' screen of the Google Clock app  
alongwith its 'World clock' feature using [TimeAPI](https://www.timeapi.io/swagger/index.html).

### Changes introduced in this commit:

1. This is the initial commit.
2. Added 'references' folder with 'images' subfolder to store a screenshot of  
   the 'Google Clock' app. Stored a screenshot in there.
3. Created 'LocalTime' component which uses Javascript Date object to obtain  
   the time local to the device. Then added it in the root component i.e. App component.
4. Created 'CurrentTime' component, which can call to the same TimeAPI  
   to obtain current time of any time zone specified for the text '?/?'  
   in 'url' variable of the file.
5. Applied style to all these components and their child components as deemed necessary.
