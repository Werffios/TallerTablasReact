import React from "react";

export function  Tabla() {
    return(
        <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombret</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mateo</td>
            <td>Ramirez Marin</td>
            <td>maramirezma@unal.edu.co</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Julio Cesar</td>
            <td>Fuelagan Carlosama</td>
            <td>jfuelagan@unal.edu.co</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Nicolas Alonso</td>
            <td>Suarez Rodriguez</td>
            <td>nasuarezro@unal.edu.co</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Felipe</td>
            <td>Pulgar</td>
            <td>lpulgarp@unal.edu.co</td>
          </tr>
        </tbody>
      </table>
    )
}


