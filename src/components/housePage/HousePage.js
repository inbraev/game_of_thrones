import React, { Component } from "react";
import RowBlock from "../RowBlock/index";
import ItemList from "../itemList";
import ErrorMessage from "../errorMessage";
import GotService from "../services/service";
import Detail, { Field } from "../Detail/Detail";

export default class HousePage extends Component {
  gotService = new GotService();
  state = {
    selectedHouse: 130,
    error: false,
  };
  onItemSelected = (id) => {
    this.setState({ selectedHouse: id });
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
        getData={this.gotService.getAllHouses}
        renderItem={(item) => `${item.name} (${item.region})`}
      />
    );
    const houseDetail = (
      <Detail
        itemId={this.state.selectedHouse}
        getData={this.gotService.getHouse}
      >
        <Field field="region" label="Region" />
        <Field field="words" label="Words" />
        <Field field="titles" label="Titles" />
        <Field field="ancestralWeapons" label="AncestralWeapons" />
      </Detail>
    );
    return <RowBlock left={itemList} right={houseDetail} />;
  }
}
