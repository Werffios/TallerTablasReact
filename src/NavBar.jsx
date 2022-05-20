import React from "react";

export function  NavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Inicio</a>
                <a className="navbar-brand" href="#">Acerca de</a>
                <a className="navbar-brand" href="#">Features</a>
                <a className="navbar-brand" href="#">Pricing</a>
            </div>
        </nav>

    )
}