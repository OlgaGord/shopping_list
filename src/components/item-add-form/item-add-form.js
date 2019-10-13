import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {

    render() {

        return (
            <div className='itemAddForm'>

                <button className="btn btn-outline-secondary"
                    onClick={() =>


                        this.props.onItemAdded('Hello my friend!')}>Add Item</button>

            </div>
        )
    }



}