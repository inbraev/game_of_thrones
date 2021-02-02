import React, { Component } from "react";
import Spinner from "../spinner";
import "./itemList.css";

export default class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    this.props.getData().then((itemList) => {
      this.setState({ itemList });
    });
  }
  renderItems(itemList) {
    return itemList.map((item, index) => {
      return (
        <li
          key={index}
          className="list-group-item"
          onClick={() => this.props.onCharSelected(41 + index)}
        >
          {item.name}
        </li>
      );
    });
  }
  render() {
    const { itemList } = this.state;
    if (!itemList) {
      return <Spinner />;
    }
    const items = this.renderItems(itemList);
    return <ul className="item-list list-group">{items}</ul>;
  }
}
