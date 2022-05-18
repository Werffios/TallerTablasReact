import React from "react";
import {Formulario} from './Formulario';
import {Tabla} from "./Tabla";
import {NavBar} from "./NavBar";


export function Aplicacion(){
    return(
        <React.Fragment>
            <NavBar/>
            <Tabla/>
            <Formulario/>
        </React.Fragment>
    )
}