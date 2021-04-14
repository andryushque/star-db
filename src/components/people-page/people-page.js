import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import Row from "../row/row";
import ItemDetails from "../item-details/item-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import ErrorBoundry from "../error-boundry/error-boundry";
import SwapiService from "../../services/swapi-service";
import "./people-page.css";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails
          itemId={this.state.selectedPerson}
          getData={this.swapiService.getPerson}
        />
      </ErrorBoundry>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
