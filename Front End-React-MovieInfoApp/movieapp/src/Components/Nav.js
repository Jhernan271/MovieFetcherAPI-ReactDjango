import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="Nav">
        <ul>
          <li><Link to="/" /*eslint-disable-line jsx-a11y/anchor-is-valid */>Home</Link></li>
          <li><Link to="/about" /*eslint-disable-line jsx-a11y/anchor-is-valid */>About</Link></li>
          <li><Link to="contact" /*eslint-disable-line jsx-a11y/anchor-is-valid */>Contact Us</Link></li>
          <li><Link to="gallery" /*eslint-disable-line jsx-a11y/anchor-is-valid */>Movie Gallery</Link></li>
          
        </ul>
    </div>
  );
};

