import React from "react";
import {Formulario} from './Formulario';
import {Tabla} from "./Tabla";
import {NavBar} from "./NavBar";
import { Footer } from "./Footer";


export function Aplicacion(){
    return(
        <React.Fragment>
            <NavBar/>
            <Tabla/>
            <Formulario/>
            <Tabla/>
            <Tabla/>
            <Footer/>
        </React.Fragment>
    )
}