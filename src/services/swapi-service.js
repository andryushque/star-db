export default class SwapiService {
  _apiBase = "https://swapi.dev/api";

  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._apiBase}${url}, recieved ${res.status}`
      );
    }

    const body = await res.json();
    return body;
  }

  // people
  async getAllPeople() {
    const res = await this.getResourse("/people/");
    return res.results;
  }

  async getPerson(id) {
    const person = await this.getResourse(`/people/${id}`);
    return this._transformPerson(person);
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
    };
  }

  // planets
  async getAllPlanets() {
    const res = await this.getResourse("/planets/");
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResourse(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }

  // starships
  async getAllStarships() {
    const res = await this.getResourse("/starships/");
    return res.results;
  }

  async getStarship(id) {
    const starship = await this.getResourse(`/starships/${id}`);
    return starship;
  }

  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  }

  // helpers
  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = item.url.match(idRegExp)[1];
    return id;
  }
}
