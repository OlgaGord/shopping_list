import React from "react";
import "./search-bar.css";
const SearchBar = () => {
  const searchStyle = {
    fontSize: "25px"
  };
  return <input style={searchStyle} placeholder="Search" />;
};
export default SearchBar;
