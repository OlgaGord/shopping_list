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
            // { label: "Milk", important: false, id: 1 },
            // { label: "Apples", important: true, id: 2 },
            // { label: "Chicken", important: false, id: 3 }
        ]
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
        // label: text,
        // important: false,
        // id: this.maxID++
        // };

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

    toggleProperty(arr, id, propName) {

        const ind = arr.findIndex((el) => el.id === id);
        const oldItem = arr[ind];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [

            ...arr.slice(0, ind),
            newItem,
            ...arr.slice(ind + 1)
        ];

        // return {
        //     shoppingData: newShoppingData
        // };

    }

    onToggleImportant = (id) => {
        // console.log('Toggle Important', id);
        this.setState(({ shoppingData }) => {

            return {
                shoppingData: this.toggleProperty(shoppingData, id, 'important-')
            };
        });
    };

    onToggleBought = (id) => {

        this.setState(({ shoppingData }) => {
            // const ind = shoppingData.findIndex((el) => el.id === id);
            // const oldItem = shoppingData[ind];
            // const newItem = { ...oldItem, bought: !oldItem.bought }

            // const newShoppingData = [

            //     ...shoppingData.slice(0, ind),
            //     newItem,
            //     ...shoppingData.slice(ind + 1)
            // ];

            return {
                shoppingData: this.toggleProperty(shoppingData, id, 'bought')
            };
        });
        // console.log('Toggle Bought', id);
    };

    render() {

        const { shoppingData } = this.state;

        const boughtCount = shoppingData
            .filter((el) => el.bought).length;

        const toBuyCount = shoppingData.length - boughtCount;

        return (
            <div className="wrapper" >
                <AppHeader bought={boughtCount} toBuy={toBuyCount} />
                <div>
                    <SearchBar />
                    <ItemStatusFilter />
                </div>

                <ShoppingList shoppingDatas={shoppingData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleBought={this.onToggleBought}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );

    }

};
