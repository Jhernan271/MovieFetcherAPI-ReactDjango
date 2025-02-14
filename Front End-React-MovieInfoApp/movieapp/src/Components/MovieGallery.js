import React from 'react';
import camera from '../images/camera.png';


export default function MovieGallery() {
  return (
    <div className="MovieGallery">
        <h1>Movie Gallery</h1>
        <p>Potential CSS Grid system of favorite movie pics and videos.</p>
        <img src={camera} alt="movie camera"/>
    </div>
    );
};