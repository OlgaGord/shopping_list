import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchBar from "../search-bar";
import ShoppingList from "../shopping-list";
import ItemStatusFilter from "../app-status-filter";
import ItemAddForm from '../item-add-form';
import "./app.css";
// import "index.css";

export default class App extends Component {

    maxID = 4;

    state = {
        shoppingData: [
            this.createItem('Meat'),
            this.createItem('Oranges'),
            this.createItem('Eggs'),
        ],
        foundItem: '',
        filterItem: 'all'
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

    onFilter = (filterItem) => {
        this.setState({ filterItem })
    }

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
    doFilter(items, filterItem) {
        switch (filterItem) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.bought);

            case 'bought':
                return items.filter((item) => item.bought);

            default:
                return items;
        }
    }
    render() {

        const { shoppingData, foundItem, filterItem } = this.state;

        const itemsToShow = this.doFilter(
            this.itemSearched(shoppingData, foundItem), filterItem);

        const boughtCount = shoppingData
            .filter((el) => el.bought).length;

        const toBuyCount = shoppingData.length - boughtCount;



        return (
            <div className="wrapper" >
                <AppHeader bought={boughtCount} toBuy={toBuyCount} />
                <div className="searchPanel">
                    <SearchBar onSearchChange={this.searchResult} />
                    <ItemStatusFilter filterItem={filterItem}
                        onFilter={this.onFilter} />
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
