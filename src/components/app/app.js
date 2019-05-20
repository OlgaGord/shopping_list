import React from "react";
import AppHeader from "../app-header";
import SearchBar from "../search-bar";
import ShoppingList from "../shopping-list";
// import "index.css";

const App = () => {
    const shoppingData = [
        { label: "Milk", important: false, id: 1 },
        { label: "Apples", important: true, id: 2 },
        { label: "Chicken", important: false, id: 3 }
    ];

    return (
        <div>
            <AppHeader />
            <SearchBar />
            <ShoppingList shoppingDatas={shoppingData} />
        </div>
    );
};
export default App;
