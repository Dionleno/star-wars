import React, { Component } from "react";
import logo from "../../assets/images/star-wars-logo.svg";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";
import "./planets.css";
const API_URL = "https://swapi.co/api";
class Planets extends Component {
  state = {
    count: 61,
    perPage: 10,
    loading: false,
    planet: {
      name: "",
      population: "",
      climate: "",
      terrain: "",
      films: []
    }
  };
  componentDidMount() {
    this.getPlanets();
  }
  getPlanets = () => {
    let page = this.getRandomCount(1, this.state.count);
    this.setState({
      loading: true
    });

    fetch(`${API_URL}/planets?page=${page}`)
      .then(res => res.json())
      .then(res => {
        let planetIndex = Math.floor(Math.random() * res.results.length);

        this.setState({
          count: res.count,
          loading: false,
          planet: res.results[planetIndex]
        });
      })
      .catch(err => {
        this.setState({
          loading: false
        });
      });
  };
  getRandomCount = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random() * (max - min)) / this.state.perPage) + min;
  };

  planetStart = () => {
    this.getPlanets();
  };
  render() {
    const {
      planet: { name, population, climate, terrain, films },
      loading
    } = this.state;
    return (
      <div className="App">
        <div
          className="boxloading"
          style={{ visibility: loading ? "visible" : "hidden" }}
        >
          <CircularProgress
            className={"progress"}
            style={{ color: "#FFFFFF" }}
            thickness={7}
          />
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span style={{ marginTop: 30 }}>Planet name</span>
          <h1>{name}</h1>

          <ul class="list-group">
            <li class="list-group-item">Population: {population} </li>
            <li class="list-group-item">Climate: {climate}</li>
            <li class="list-group-item">Terrain: {terrain}</li>
          </ul>

          <p>Featured in {films.length} films</p>
          <Button
            variant="contained"
            size="large"
            onClick={() => this.planetStart()}
          >
            Next
          </Button>
        </header>
      </div>
    );
  }
}

export default Planets;
