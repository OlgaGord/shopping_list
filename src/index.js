import React from "react";
import ReactDOM from "react-dom";
const ShoppingList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Learn C#</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>Shopping list</h1>;
};

const SearchBar = () => {
  return <input placeholder="Search" />;
};

const el = (
  <div>
    <AppHeader />
    <SearchBar />
    <ShoppingList />
  </div>
);
ReactDOM.render(el, document.getElementById("root"));
