import React, { Component } from "react";
import Item from "./Item";

export default class ItemList extends Component {
  render() {
    const { lista } = this.props;
    console.table(this.props)
    return (
      <div>
        {lista.map((item, index) => {
          return <Item key={item.id} dataDelItem={item} />;
        })}
      </div>
    );
  }
}

