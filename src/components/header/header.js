import React from "react";

import { Link } from "react-router-dom";

import "./header.css";

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex align-items-center">
      <h3>
        <Link to="/">Star Wars DB</Link>
      </h3>
      <ul className="d-flex mb-0">
        <li>
          <Link to="/people/">People</Link>
        </li>
        <li>
          <Link to="/planets/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
        </li>
      </ul>

      <button className="btn btn-primary btn-sm" onClick={onServiceChange}>
        Change service
      </button>
    </div>
  );
};

export default Header;
