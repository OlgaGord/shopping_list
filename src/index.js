import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header";
import SearchBar from "./components/search-bar";
import ShoppingList from "./components/shopping-list";

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchBar />
      <ShoppingList />
    </div>
  );
};

// const el = (
//     <App />
// );
ReactDOM.render(<App />, document.getElementById("root"));
