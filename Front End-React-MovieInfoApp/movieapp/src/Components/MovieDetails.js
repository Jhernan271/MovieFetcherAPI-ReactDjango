import React, { useContext, useState } from 'react';
import { MovieProvider, MovieContext } from './MovieProvider';


//Begin MovieDetails Child Component
const MovieDetails = () => {
  const { movieData, loading, error, setQuery } = useContext(MovieContext);
  const [query, setQueryState] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(query);
  };

  const renderField = (key, value) => { 
    if (typeof value === 'object' && !Array.isArray(value)) { 
        return ( 
        <div key={key}><strong>{key}:</strong> {
            Object.entries(value).map(([k, v]) => 
                renderField(k, v))} 
        </div> 
        ); 
    } 
    if (Array.isArray(value)) { 
        return ( 
          <div key={key}><strong>{key}:</strong>
            {value.map((item, index) => (
                <div key={index}> {
                    typeof item === 'object' ? Object.entries(item).map(([k, v]) => 
                    renderField(k, v)) : item} 
              </div> 
            ))} 
          </div> 
          ); 
        } 
        return ( 
        <p key={key}> 
        <strong>{key}:</strong> {value} 
        </p> 
        ); 
    };

  return (
    <div>
      <form onSubmit={handleSearch}>
       {/*add div to style*/}
        <input 
          type="text"
          value={query}
          onChange={(e) => setQueryState(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit" disabled={loading}>Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!movieData.length && !loading && <p>No data available</p>}
      {movieData.length > 0 && (
        <div>
          {movieData.map((movie) => (
            <div key={movie.imdbID}>
                <div className="image">
                <img src={movie.Poster} alt={movie.Title} />
                </div>
              {Object.entries(movie).map(([key, value]) => 
                renderField(key, value))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
//End MovieDetails Component
 
 
//Subscribing components consume all state and data produced by MovieProvider component
const ContextAPIMovies = () => (
  <MovieProvider>
    <div className="container">
      <div className="overlay">
      <h1>Movie Search</h1>
      <h4>Type in a movie title to use the search engine and find detailed movie information.</h4>
      <MovieDetails />
    </div>
    </div>
  </MovieProvider>
);

export default ContextAPIMovies;

