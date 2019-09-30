import React, { Component } from "react";
import "./shopping-list-item.css";

export default class ShoppingListItem extends Component {

  constructor() {
    super();
    this.state = {
      bought: false,
      important: false
    };

  }
  onLabelClick = () => {
    // console.log(`Bought:${this.props.label}`);
    this.setState(({ bought }) => {
      return {
        bought: !bought
      }

    });
  };

  onImportant = () => {
    this.setState(({ important }) => {

      return {
        important: !important
      };

    })
  }
  render() {

    const { label, onDeleted } = this.props;
    const { bought, important } = this.state;

    let className = "shopping-list-item";
    if (bought) {
      className += ' bought';
    }

    if (important) {
      className += ' important';
    }

    return (

      <span className={className}>
        <span className="shopping-list-item-label"
          onClick={this.onLabelClick}
        >{label}</span>

        <button type="button" className="btn btn-outline-success btn-sm float-right"
          onClick={this.onImportant}>
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm float-right"

          onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>

    )
  };
};







