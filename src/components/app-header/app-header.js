import React from "react";
import "./app-header.css";
const AppHeader = ({ toBuy, bought }) => {
  return (
    <div className="app-header">
      <h1 className="app-header-main">Shopping list</h1>
      <h4 className="app-header-bought">
        {toBuy} to buy, {bought} bought
      </h4>
    </div>
  );
};

export default AppHeader;
