import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {


    state = {
        label: ''

    }

    onLabelChange = (e) => {

        this.setState({
            label: e.target.value
        })
        console.log(e.target.value);
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
    }

    render() {

        return (
            <div className='addItem'>
                <form className='itemAddForm d-flex'
                    onSubmit={this.onSubmit}>
                    {/* {this.state.label} */}
                    <input type="text"
                        className="form-control"
                        onChange={this.onLabelChange}
                        placeholder="Input the products to buy" />

                    <button className="btn btn-outline-secondary btnAddItem">Add Item</button>
                </form>

            </div>

        )
    }



}