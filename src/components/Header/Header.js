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
            <h1>Título/ Nombre de la app</h1>
            <form class="form" method="get">
                <label type="text"> Buscar canción</label>
                <input type="text " placeholder="buscar cancion"></input>
                <button type="Submit"> ir </button>
            </form>
            <section>
                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>
               <form action=""></form>
    </section>
            <button type="button">Cargar más tarjetas</button>
    </header>
        );
    }
}

export default Header;
