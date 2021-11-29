import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/auth/login/Login';
import ErrorPage from './components/ErrorPage';
import Register from "./components/Register";

class Rutas extends Component{

    render(){
        return(
            
            <Router>
            {/*configurar rutas y paginas*/}
            <Routes>
                <Route path="/" element={<Home />}/>  
                <Route path="/login" element={<Login />}/>  
                <Route path="/register" element={<Register />}/>  
                <Route path="*" element={<ErrorPage />}/>
           </Routes>
           </Router>

        );

    }
}
export default Rutas;