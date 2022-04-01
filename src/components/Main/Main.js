import React, { Component } from 'react';
import Card from '../Card/Card'
class Main extends Component { 
    constructor (){
        super ()
        this.state={
            //caracteristicas que van cambiando

        }
    }
    render() {
        return (
            <section className="card-container">
                <Card/>
            </section>
        );
    }
}

export default Main;
