import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchBar from "../search-bar";
import ShoppingList from "../shopping-list";
import ItemStatusFilter from "../app-status-filter";
import ItemAddForm from '../item-add-form';
// import "index.css";

export default class App extends Component {

    maxID = 4;

    state = {
        shoppingData: [
            { label: "Milk", important: false, id: 1 },
            { label: "Apples", important: true, id: 2 },
            { label: "Chicken", important: false, id: 3 }
        ]
    };

    deleteItem = (id) => {
        // console.log(id);
        this.setState(({ shoppingData }) => {

            const ind = shoppingData.findIndex((el) => el.id === id);

            const newShoppingData = [

                ...shoppingData.slice(0, ind),
                ...shoppingData.slice(ind + 1)
            ]

            return {
                shoppingData: newShoppingData
            }
        });
    };

    addItem = (text) => {

        const newItem = {
            label: text,
            important: false,
            id: this.maxID++
        };

        this.setState(({ shoppingData }) => {

            const newShoppingData = [
                ...shoppingData,
                newItem
            ];

            return {
                shoppingData: newShoppingData
            };

        });

    };
    render() {
        return (
            <div className="wrapper" >
                <AppHeader />
                <div>
                    <SearchBar />
                    <ItemStatusFilter />
                </div>

                <ShoppingList shoppingDatas={this.state.shoppingData}
                    onDeleted={this.deleteItem}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );

    }

};
