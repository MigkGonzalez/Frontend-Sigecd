import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div id="slider">
        <h1>Bienvenido al Club Palma Real</h1>
        <h3>“Si trabajas, los resultados vendrán solos. No hago las cosas a medias, porque sé que si lo hago entonces sólo puedo esperar tener resultados a medias” - Michael Jordan"</h3>
        <h3>Que esperas para ponerte en forma y disfrutar de la pasion del deporte, date la oportunidad de entrenar con nosotros! </h3>
        <a href="registro" id="registro" className="btn-white">Inscribete</a>
        <div className="clearfix"></div>
      </div>
    );
  }
}
export default Slider;
