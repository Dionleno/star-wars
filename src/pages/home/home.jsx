import React, { Component } from "react";
import { Link } from "react-router-dom";
import Panel from "../../ui/panel/panel";
import { Button } from "@material-ui/core";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="box">
        <Panel>
          <p>Está pronto para conhecer mais sobre nossos planetas?</p>
          <p>Bem vindo ao jogo Star Wars!</p>
        </Panel>

        <Link to="/planets">
          <Button variant="contained" size="large">
            Começar
          </Button>
        </Link>
      </div>
    );
  }
}
export default Home;
