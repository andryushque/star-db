class SwapiService {
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
    return res.results; // => [{...}, {...}, ...]
  }

  getPerson(id) {
    return this.getResourse(`/people/${id}`);
  }

  // planets
  async getAllPlanets() {
    const res = await this.getResourse("/planets/");
    return res.results;
  }

  getPlanet(id) {
    return this.getResourse(`/planets/${id}`);
  }

  // starships
  async getAllStarships() {
    const res = await this.getResourse("/starships/");
    return res.results;
  }

  getStarship(id) {
    return this.getResourse(`/starships/${id}`);
  }
}

// test
const swapi = new SwapiService();
swapi.getAllPeople().then((body) => console.log("All people:", body));
swapi.getAllPlanets().then((body) => console.log("All planets:", body));
swapi.getAllStarships().then((body) => console.log("All starships:", body));
