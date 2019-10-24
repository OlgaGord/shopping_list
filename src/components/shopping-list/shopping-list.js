//const items = ["Learn React", "Learn JavaScript"];
import React from "react";
import "./shopping-list.css";
import ShoppingListItem from "../shopping-list-item";
const ShoppingList = ({ shoppingDatas, onDeleted, onToggleImportant, onToggleBought }) => {
  const elements = shoppingDatas.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <ShoppingListItem {...itemProps}
          onDeleted={() =>

            onDeleted(id)
          }
          onToggleImportant={() => onToggleImportant(id)}
          onToggleBought={() => onToggleBought(id)}
        />
      </li>
    );
  });
  return <ul className="list-group shopping-list">{elements}</ul>;
};
export default ShoppingList;
