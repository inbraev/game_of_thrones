import React, { Component } from "react";
import Detail, { Field } from "../Detail/Detail";
import GotService from "../services/service";

export class BookItem extends Component {
  gotService = new GotService();

  render() {
    return (
      <Detail
        itemId={this.props.selectedBook}
        getData={this.gotService.getBook}
      >
        <Field field="publisher" label="Publisher" />
        <Field field="numberOfPages" label="Number of Pages" />
        <Field field="released" label="Released" />
      </Detail>
    );
  }
}

export default BookItem;
