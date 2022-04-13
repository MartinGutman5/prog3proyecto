import React, { Component } from 'react';
import "./Header.css"
class Header extends Component { 
    constructor (){
        super ()
        this.state={
        }
    }
    
    

    render() {
        return (
            <header>
            <h1 class="titulo">nombre</h1>
            <form class="form" method="get">
                <label class="colorfont" type="text"> Buscar canción</label>
                <input class="input" type="text" placeholder="buscar cancion"></input>
                <button type="Submit"> ir </button>
            </form>
            <img class="imagenlogo" src="data:image/png;base64,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"/>
            <section class="colorfont">
                <i className="fas fa-th pico"></i>
                <i className="fas fa-align-justify pico"></i>
               <form action=""></form>
            </section>
            <button class="button" type="button">Cargar más tarjetas</button>
    </header>
        );
    }
}

export default Header;
