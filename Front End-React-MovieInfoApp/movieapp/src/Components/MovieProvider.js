//Parent component to fetch and export the API data to children and handle errors
import React, { createContext, useState, useEffect } from 'react';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movieData, setMovieData] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => { //runs when query state changes as defined by the dependency array
    const searchMovie = async () => { //creates Promise object
      setLoading(true);
      setError(null);
      setMovieData([]);
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=72ceb6dc&t=${query}`);
        const data = await response.json();
        if (data.Response === 'False') {
          throw new Error(data.Error); //create error instance, triggers catch block
        }
        setMovieData([data]); //updates movie data if successful
      } catch (err) { //recieves error object type from OMDB
        setError(err); //stores error message in state
      } finally {
        setLoading(false); //loading state set to false irregardless of a success or failure to reset
      }
    };

    if (query) { //searchMovie repeats/runs if a search/query value exists from the user
      searchMovie();
    }
  }, [query]);

  
  
  
  //CONTEXT API
  //we are returning the OMDB data, loading state, error message, and search status
  return (
    <MovieContext.Provider value={{ movieData, loading, error, setQuery }}>
      {children}
    </MovieContext.Provider>
  );
};

//Exporting the fetched movie data to the child component MovieDetails
export { MovieContext, MovieProvider };
