import React, { Component } from 'react';
import "./Header.css";
import logo from './img/logoR.png';

class Header extends Component { 
    constructor (props){
        super (props)
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
    

    render() {
        return (
            <header>
            <img class="imagenlogo" src= {logo} />

            <form className="form" method="get" onSubmit={(event)=>this.evitarDefault(event)}>
                <input onChange={(cambios)=>this.obtenerDatos(cambios)} className="input" type="text" placeholder= "Nombre de la canción" value={this.state.value}></input>
                <button className="button"  type="Submit"> Buscar </button>
            </form>
            <section class="colorfont">
                {!this.props.column?<i className="fas fa-th pico" onClick={()=>this.props.changeDirection()}></i>:<i className="fas fa-align-justify pico" onClick={()=>this.props.changeDirection()}></i>
            }
            </section>         
             
    </header>
        );
    }
}

export default Header;
