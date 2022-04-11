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
            <ul className="team">
                <li>Bruno Grecco</li>
                <li>Martin Gutman</li>
                <li>Martina Pawluk</li>
            </ul>
        </footer>
        );
    }
}

export default Footer;
