import React from "react";
import AppHeader from "../app-header";
import SearchBar from "../search-bar";
import ShoppingList from "../shopping-list";
import ItemStatusFilter from "../app-status-filter";
// import "index.css";

const App = () => {
    const shoppingData = [
        { label: "Milk", important: false, id: 1 },
        { label: "Apples", important: true, id: 2 },
        { label: "Chicken", important: false, id: 3 }
    ];

    return (
        <div className="wrapper">
            <AppHeader />
            <div>
                <SearchBar />
                <ItemStatusFilter />
            </div>

            <ShoppingList shoppingDatas={shoppingData} />

        </div>
    );
};
export default App;
