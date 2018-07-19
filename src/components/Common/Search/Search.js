import React from "react";
import "./Search.css";

const Search = ({ props }) => (
  <div className="searchWrapper">
    <input {...props} type="search" placeholder="type..." />
  </div>
);

export default Search;
