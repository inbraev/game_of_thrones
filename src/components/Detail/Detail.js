import React, { Component } from "react";
import "./Detail.css";
export const Field = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};
export class Detail extends Component {
  state = {
    item: null,
  };
  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }
  updateItem() {
    const { itemId } = this.props;

    if (!itemId) {
      return;
    }
    this.props.getData(itemId).then((item) => {
      this.setState({
        item,
      });
    });
  }

  render() {
    if (!this.state.item) {
      return <span className="select-error">Please select an item</span>;
    }
    const { item } = this.state;
    const { name } = item;
    return (
      <div className="details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    );
  }
}

export default Detail;
