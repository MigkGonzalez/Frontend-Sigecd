import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Router>
      <header id="header">
        <div className="logo-menu-container">
          {/*Logo*/}
          <div id="logo">
            <img src={logo} className="app-logo" alt="logotipo"></img>
          </div>

          {/*Menu Navegacion*/}
          <nav id="menu">
            <ul>
              <li>
              <Link to="/"> Home </Link>
              </li>
              <li>
                <a href="#linkcontInfoUbicacion"> Horario </a>
              </li>
              <li>
                <a href="#linkEntrenadores"> Entrenadores </a>
              </li>
              <li>
                <Link to="/login"> Ingreso </Link>
              </li>
              <li>
              <Link to="/register"> Inscripción </Link>
                            
              </li>
            </ul>
          </nav>
        </div>
        {/*Limpiar flotados*/}
        <div className="clearfix"></div>
      </header>
      </Router>
    );
  }
}

export default Header;
