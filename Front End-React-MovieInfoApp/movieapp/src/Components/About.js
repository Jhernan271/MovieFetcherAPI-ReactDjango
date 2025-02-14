import React from 'react';
import person from '../images/person.png';


export default function AboutMe () {
  return (
    <div className="AboutMe">
        <h1>About Me Page</h1>
        <img src={person} alt="person icon"/>
    </div>
    );
};