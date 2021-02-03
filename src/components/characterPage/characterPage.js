import React, { Component } from "react";
import RowBlock from "../RowBlock/index";
import ItemList from "../itemList";
import ErrorMessage from "../errorMessage";
import GotService from "../services/service";
import Detail from "../Detail/Detail";
import { Field } from "../Detail/Detail";
export default class CharacterPage extends Component {
  gotService = new GotService();
  state = {
    selectedChar: 130,
    error: false,
  };
  onItemSelected = (id) => {
    this.setState({ selectedChar: id });
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
    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllCharacters}
        renderItem={(item) => `${item.name} (${item.gender})`}
      />
    );
    const charDetail = (
      <Detail
        itemId={this.state.selectedChar}
        getData={this.gotService.getCharacter}
      >
        <Field field="gender" label="Gender" />
        <Field field="born" label="Born" />
        <Field field="died" label="Died" />
        <Field field="culture" label="Culture" />
      </Detail>
    );
    return <RowBlock left={itemList} right={charDetail} />;
  }
}
