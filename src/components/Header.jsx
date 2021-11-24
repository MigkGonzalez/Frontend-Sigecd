import React, { Component } from "react";
import logo from "../assets/images/logo.png";

class Header extends Component {
  render() {
    return (
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
                <a href="linkContentMain">Inicio</a>
              </li>
              <li>
                <a href="#linkcontInfoUbicacion">Horario</a>
              </li>
              <li>
                <a href="#linkEntrenadores">Entrenadores</a>
              </li>
              <li>
                <a href="ingreso">Ingreso</a>
              </li>
              <li>
                <label id="registro" for="btn-modal" className="lbl-modal">
                  Inscripción
                </label>
              </li>
            </ul>
          </nav>
        </div>
        {/*Limpiar flotados*/}
        <div className="clearfix"></div>
      </header>
    );
  }
}

export default Header;
