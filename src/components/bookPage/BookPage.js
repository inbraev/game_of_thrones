import React, { Component } from "react";
import ItemList from "../itemList";
import ErrorMessage from "../errorMessage";
import GotService from "../services/service";
import { withRouter } from "react-router-dom";
class BookPage extends Component {
  gotService = new GotService();
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }
  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return (
      <ItemList
        onItemSelected={(itemId) => {
          this.props.history.push(itemId);
        }}
        getData={this.gotService.getAllBooks}
        renderItem={(item) => `${item.name} (${item.numberOfPages} sheets)`}
      />
    );
  }
}
export default withRouter(BookPage);
