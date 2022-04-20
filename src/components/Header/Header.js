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
    

    render() {
        return (
            <header>
    
                <img className="imagenlogo" src= {logo}  />
                
                <section className="colorfont">
                    <i className="fas fa-th pico"></i>
                    <i className="fas fa-align-justify pico"></i>
                </section>         
             
            </header>
        );
    };
};


export default Header;
