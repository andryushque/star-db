import React from "react";

import "./header.css";

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex align-items-center">
      <h3>
        <a href="/">Star DB</a>
      </h3>
      <ul className="d-flex mb-0">
        <li>
          <a href="#/people">People</a>
        </li>
        <li>
          <a href="#/planets">Planets</a>
        </li>
        <li>
          <a href="#/starships">Starships</a>
        </li>
      </ul>

      <button className="btn btn-primary btn-sm" onClick={onServiceChange}>
        Change service
      </button>
    </div>
  );
};

export default Header;
