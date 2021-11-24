import React, {Component} from "react";
import Ubicacion from "./Ubicacion";
import Horario from "./Horario"
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/containerHorUbi.css";

class ContainerHorUbi extends Component{
    state = {
        tituloContainerUbiHor: "HORARIOS Y UBICACIÓN",
        
    }
    render(){
        return (
        <div id="linkcontInfoUbicacion">
        <div id="titlecontInfoUbi">
            <span><h2 className="title fs-1 py-4 bg-warning text-wrap" lh-lg> { this.state.tituloContainerUbiHor } </h2></span>
            <Container fluid="sm, md, lg, xl, xxl" id="containerUbicacion">
            <Row xs={1} md={2} className="g-2">
               <Col>
                    <Ubicacion/>
               </Col> 
               <Col>
                    <Horario/>
               </Col>
                              
            </Row>
          </Container>
        <div className="clearfix"></div>
        </div>
        </div>
        )}

}

export default ContainerHorUbi;