import React from 'react';
import FilmPopcorn from '../images/FilmPopcorn.png';


export default function Header () {
  return (
    <div className="header">
       <img src={FilmPopcorn} alt="Movie Film"/>
       <div className="title-container">
        <h1>Movie Finder</h1>
       </div>
    </div>
    );
};

