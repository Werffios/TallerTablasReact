import React from "react";

export function  Formulario() {
    return(
        <form>
            <div class="form-group">
                <label for="exampleInputEmaul">Correo</label>
                <input type="email" class="form-text text-muted" placeholder="Enter email"/>
                <small id="emailHelp" >We'll </small>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    )
}