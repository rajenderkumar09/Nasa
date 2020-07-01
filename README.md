# Nasa
Assignment for React Native
    Create an application in React Native where the application will:
	    1.	Sign up in https://api.nasa.gov/ to get an API key.
	    2.	When the user opens the application, the user sees a form that contains one text input and a submit button. Use `Enter Asteroid ID` as a placeholder text in the text input form field. The user also sees another button called `Random Asteroid`
	    3.	The submit button is disabled if text input is empty.
	    4.	When the user enters an asteroid id in the input field and presses submit, make a call to https://api.nasa.gov/neo/rest/v1/neo/{{ENTER_ASTEROID_ID_HERE}}?api_key={{YOUR_API_KEY}}
	    5.	The user is taken to a screen that now displays the information about the asteroid. Display the following information: - name - nasa_jpl_url - is_potentially_hazardous_asteroid
	    6.	When the user clicks the `Random Asteroid` button, make a call to https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY. Select RANDOM asteroid id.    Pass ID to https://api.nasa.gov/neo/rest/v1/neo/{{ENTER_ASTEROID_ID_HERE}}?api_key={{YOUR_API_KEY}}
	    7.	The user is taken to a screen that now displays the information about the asteroid. Display the following information:  - name - nasa_jpl_url - is_potentially_hazardous_asteroid
	    8.	Style application using nativebase.io
	    9.	Generate APK and IPA files.

