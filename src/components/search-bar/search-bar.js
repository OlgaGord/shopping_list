import React, { Component } from "react";
import "./search-bar.css";


export default class SearchBar extends Component {

  state = {
    foundItem: ''

  };

  onSearchChange = (e) => {
    const foundItem = e.target.value;
    this.setState({ foundItem });
    this.props.onSearchChange(foundItem);

    // console.log(e.target.value);
  };

  render() {
    return (
      <input type="text"
        className="form-control searchItem"
        onChange={this.onSearchChange}
        placeholder="Search item"
        value={this.state.foundItem} />

    )

  }
}

