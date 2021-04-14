import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from "../sw-components";

import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";

import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
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

    const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
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
      <SwapiServiceProvider value={this.swapiService}>
        <div className="stardb-app container-fluid">
          <Header />

          {randomPlanet}
          {randomPlanetToggleButton}

          <div className="row mb-4">
            <div className="col-md-6">
              <PersonList />
            </div>
            <div className="col-md-6">
              <PersonDetails itemId={11} />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <PlanetList />
            </div>
            <div className="col-md-6">
              <PlanetDetails itemId={2} />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <StarshipList />
            </div>
            <div className="col-md-6">
              <StarshipDetails itemId={9} />
            </div>
          </div>
        </div>
      </SwapiServiceProvider>
    );
  }
}
