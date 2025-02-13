# MovieFetcherAPI-ReactDjango
Fetches OMDB Movie data through a React Front-End utilizing Context API and set up with a Django Rest Framework Back End. DRF captures the form data submission being sent through an Asynchronous function using a Promise. Compatible with MySQL, Sqlite3, and PostgreSQL databases. This version utilizes sqlite3 for quick build purposes. 


Some quick info about the main React components:

MovieProvider
 -fetches API data with useEffect and handles error responses
 -establishes state for movieData, query, loading, error
 -establishes context
 -exports above state data to MovieDetails child component

MoveDetails
   -receives state from MovieProvider
   -renderField transforms any object json data to array values
   -maps through the fetched api data and displays to user

Contact
 -Collects user information with validation 
 -sends from data to DRF API endpoint as POST request
 
CSS
 -Flexbox displays a Header and Navbar component, movie data is on a semi-transparent background over the Matrix wallper. 


#BACK END_Python_DRF
Quick Info about the Python Django Rest Framework Back End
  -Relatively simple approach
  -Generic views with Browsable API defined in urls.py
  -Contact model for Name, Email, Phone, Comment fields in the React form submission Contact component
  -Serializer for Contact model
  -CORS Middleware allows localhost:3000 to connect React
  
