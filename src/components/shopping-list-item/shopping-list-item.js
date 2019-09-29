import React, { Component } from "react";
import "./shopping-list-item.css";

export default class ShoppingListItem extends Component {

  state = {
    done: false
  };
  onLabelClick = () => {
    this.setState({
      done: true
    });
  };

  render() {

    const { label, important = false } = this.props;
    const { done } = this.state;

    let className = "shopping-list-item";
    if (done) {
      className += 'done';
    }

    const style = {
      color: important ? "stealblue" : "black",
      fontWeight: important ? 'bold' : 'normal'
    };
    return (

      <span className="shopping-list-item">
        <span className="shopping-list-item-label"
          style={style}
          onClick={this.onLabelClick}
        >{label}</span>

        <button type="button" className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>

    );
  };

}






