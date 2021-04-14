import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
// import ItemList from "../item-list/item-list";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={this.swapiService.getPerson}
        getImageUrl={this.swapiService.getPersonImage}
      >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={this.swapiService.getStarship}
        getImageUrl={this.swapiService.getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    const randomPlanetToggleButton = (
      <div className="row mb-4 button-row">
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <ErrorButton />
      </div>
    );

    return (
      <div className="stardb-app container-fluid">
        <Header />
        {planet}

        {randomPlanetToggleButton}

        <PeoplePage />
        <Row left={personDetails} right={starshipDetails} />

        {/* <div className="row mb-2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
            >
              {(i) => (
                <span>
                  {i.name} <button>!</button>
                </span>
              )}
            </ItemList>
          </div>
          <div className="col-md-6">
            <ItemDetails
              personId={this.state.selectedPerson}
              getData={this.swapiService.getPerson}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
            >
              {(i) => `${i.name} (${i.model})`}
            </ItemList>
          </div>
          <div className="col-md-6">
            <ItemDetails
              personId={this.state.selectedPerson}
              getData={this.swapiService.getPerson}
            />
          </div>
        </div> */}
      </div>
    );
  }
}
