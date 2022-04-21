import React, { Component } from 'react';
import "./Header.css";
import logo from './img/logo.png';

class Header extends Component { 
    constructor (props){
        super (props)
        this.state={
            value: '',
        }
    }
    

    render() {
        return (
            <header className="header">
    
                <img className="imagenlogo" src= {logo}  />
                
                <section className="colorfont">
                 {!this.props.column?<i className="fas fa-th pico" onClick={()=>this.props.changeDirection()}></i>:<i className="fas fa-align-justify pico" onClick={()=>this.props.changeDirection()}></i>
             }
                </section>         
             
            </header>
        );
    };
};


export default Header;
