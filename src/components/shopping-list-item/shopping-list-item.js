import React from "react";
import "./shopping-list-item.css";
const ShoppingListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "black"
  };

  return <span style={style}>{label}</span>;
};

export default ShoppingListItem;
