import React, { Component } from 'react';
import Card from '../Card/Card'
class Main extends Component { 
    constructor (){
        super ()
        this.state={
         listaTracks:[]                            //caracteristicas que van cambiando

        }
    }
    componentDidMount (){
        fetch ("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10")
    .then(response => response.json())
.then (lista => {
    console.log (lista)
    this.setState({
        listaTracks:lista.data
    })
}) 
}

    render() {
        return (
            <section className="card-container">
                {this.state.listaTracks.map((trackDetail,idx)=> <Card trackDetail={trackDetail} key={idx}/>)}
            </section>
        );
    }
}

export default Main;
