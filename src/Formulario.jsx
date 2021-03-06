import React from "react";

export function  Formulario() {
    return(
        <form>
            <div className="container">
                <div className="row justify-content-evenly">
                    <div className="col-4">
                        <label htmlFor="nameinput">Ingrese su nombre</label>
                        <input type="text" className="form-control" placeholder="Enter name" id="nameinput" required/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="apellidoinput">Ingrese su apellido</label>
                        <input type="text" className="form-control" placeholder="Enter apellido" id="apellidoinput" required/>
                    </div>
                </div>
            </div>
            <p></p>
            <div className="container">
                    <div className="text-center">
                        <button type="submit" className="btn btn-success">Enviar</button>
                    </div>
            </div>
            <p></p>
        </form>
    )
}