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
            this.createItem('Meat'),
            this.createItem('Orange'),
            this.createItem('Eggs'),
        ],
        foundItem: ''
    };

    createItem(label) {
        return {
            label,
            important: false,
            bought: false,
            id: this.maxID++
        }
    }

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

        const newItem = this.createItem(text);

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

    itemSearched = (items, foundItem) => {

        return items.filter((item) => {

            if (foundItem.length === 0) {
                return items;
            }

            return item.label.toLowerCase().indexOf(foundItem.toLowerCase()) > -1
        });

    };

    searchResult = (foundItem) => {
        this.setState({ foundItem });
    };

    toggleProperty(arr, id, propName) {

        const ind = arr.findIndex((el) => el.id === id);
        const oldItem = arr[ind];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [

            ...arr.slice(0, ind),
            newItem,
            ...arr.slice(ind + 1)
        ];

    }

    onToggleImportant = (id) => {

        this.setState(({ shoppingData }) => {

            return {
                shoppingData: this.toggleProperty(shoppingData, id, 'important')
            };
        });
    };

    onToggleBought = (id) => {

        this.setState(({ shoppingData }) => {

            return {
                shoppingData: this.toggleProperty(shoppingData, id, 'bought')
            };
        });
    };

    render() {

        const { shoppingData, foundItem } = this.state;

        const itemsToShow = this.itemSearched(shoppingData, foundItem);

        const boughtCount = shoppingData
            .filter((el) => el.bought).length;

        const toBuyCount = shoppingData.length - boughtCount;

        return (
            <div className="wrapper" >
                <AppHeader bought={boughtCount} toBuy={toBuyCount} />
                <div>
                    <SearchBar onSearchChange={this.searchResult} />
                    <ItemStatusFilter />
                </div>

                <ShoppingList shoppingDatas={itemsToShow}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleBought={this.onToggleBought}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );

    }

};
