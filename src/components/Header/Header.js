import React, { Component } from 'react';
import "./Header.css";
//import Filtro from ""
import logo from './img/logoR.png';

class Header extends Component { 
    constructor (){
        super ()
        this.state={
            value: '',
        }
    }
    
    evitarDefault(accionDefault){
        accionDefault.preventDefault();
    }

    obtenerDatos(datos){
        this.setState({
            value: datos.target.value
        }, () => console.log(this.state.value))
        
    }
    //filtarPersonajes(textoAFiltrar){ //pasar a header
        //let personajesFiltrados = [];
        //personajesFiltrados = this.state.personajes.filter( unPersonaje => unPersonaje.name.toLowerCase().includes(textoAFiltrar.toLowerCase()))
        
        //this.setState({
            //personajes: personajesFiltrados
       // })





    render() {
        return (
            <header>
            
                <img class="imagenlogo" src= {logo} />

                <form className="form" method="get" onSubmit={(event)=>this.evitarDefault(event)}>
                    <input onChange={(cambios)=>this.obtenerDatos(cambios)} className="input" type="text" placeholder= "Nombre de la canción" value={this.state.value}></input>
                    <button className="button" type="Submit"> Buscar </button>
                </form>
                <section class="colorfont">
                    <i className="fas fa-th pico"></i>
                    <i className="fas fa-align-justify pico"></i>
                </section>         
             
            </header>
        );
    };
};


export default Header;
