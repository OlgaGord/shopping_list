//const items = ["Learn React", "Learn JavaScript"];
import React from "react";
import ShoppingListItem from "./shopping-list-item";
const ShoppingList = () => {
  return (
    <ul>
      {/* <li>{items[0]}</li>
      <li>{items[1]}</li> */}
      <li>
        <ShoppingListItem />
      </li>
      <li>Learn React</li>
      <li>Learn C#</li>
    </ul>
  );
};
export default ShoppingList;
