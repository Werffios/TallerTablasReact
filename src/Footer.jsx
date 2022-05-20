import React from "react";

export function  Footer() {
    const myFunction = () => {
    alert("Boton funciona");
  };
    return(
        <footer>
           <center>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
           </center>
       
        <div className="card">
            <div className="card-body">
                <ul>
                    <h1>
                    Creado y Editado Por:
                    </h1>
                    <li>Julio Cesar Fuelagan Carlosama</li>
                    <li>Nicolas Alonso Suarez Rodriguez</li>
                    <li>Luis Felipe Pulgar</li>
                    <li>Mateo Ramirez Maringit </li>
                <center>
                    <button type="button" className="btn btn-outline-success" onClick={myFunction}>Success</button>
                </center>

                </ul>
            </div>
            
        </div>

            
        <center>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
           </center>
    
       
        <br/>
        <a href="mailto:jfuelagan@unal.edu.co;nasuarezro@unal.edu.co?cc=nasuarezro@unal.edu.co&bcc=jfuelagan@unal.edu.co.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
            haz click aqui.
        </a>
      </footer>

    )
}