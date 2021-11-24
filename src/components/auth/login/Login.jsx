import axios from "axios";
import React, { useRef } from "react";
import '../../../assets/css/login.css';

export default function Login(){

    const email = useRef();
    const pass = useRef();

    const signIn = async () => {
        let form = new URLSearchParams()
        form.append('email', email.current.value)
        form.append('password', pass.current.value)
        console.log(process.env.REACT_APP_API_URL)
        const data = await axios.post(process.env.REACT_APP_API_URL+'auth/login',form,{
            header:{'Accept': 'application/json'}
        } )
        console.log(data)
    }

    return (
        <div className="login">
            <h2>Inicio de sesión</h2>
            <label htmlFor="email">E-Mail</label>
            <input ref={email} type="email" name="" id="email" />
            <label htmlFor="pass">Contraseña</label>
            <input ref={pass} type="password" name="" id="pass" />
            <button onClick={signIn} type="submit" id="btn_ingreso">Ingresar</button>
        </div>
    )
}