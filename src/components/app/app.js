import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { StarshipDetails } from "../sw-components";

import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

import "./app.css";

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app container-fluid">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Route
                path="/"
                render={() => (
                  <h2 className="mb-4">Welcome to Star Wars DataBase!</h2>
                )}
                exact
              />
              <Route
                path="/people/"
                render={() => <h2 className="mb-4">People</h2>}
              />
              <Route
                path="/planets/"
                render={() => <h2 className="mb-4">Planets</h2>}
                exact
              />
              <Route
                path="/starships/"
                render={() => <h2 className="mb-4">Starships</h2>}
                exact
              />
              <Route path="/people/:id?" component={PeoplePage} exact />
              <Route path="/planets/" component={PlanetsPage} exact />
              <Route path="/starships/" component={StarshipsPage} exact />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
                exact
              />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
