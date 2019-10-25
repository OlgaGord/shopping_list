import React, { Component } from "react";
import './app-status-filter.css';

export default class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'bought', label: 'Bought' }
  ]



  render() {

    const { filterItem, onFilter } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {

      const isActive = filterItem === name;

      const classButton = isActive ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button type="button" className={`btn ${classButton}`}
          key={name}
          onClick={() =>
            onFilter(name)}>
          {label}</button>
      )

    })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}


