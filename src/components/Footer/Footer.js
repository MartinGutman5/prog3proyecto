import React, { Component } from 'react';
import "./Footer.css"
class Footer extends Component { 
    constructor (){
        super ()
        this.state={}
    }
    render() {
        return (
            <footer>
            <p className="creditos">Desarrollado por: Martina Pawluk, Bruno Grecco y Martin Gutman</p> 
           </footer>
        );
    }
}

export default Footer;
