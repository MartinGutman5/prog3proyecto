import React, { Component } from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header'
import "./Main.css"
class Main extends Component { 
    constructor (){
        super ()
        this.state={
         listaTracks:[],                         //caracteristicas que van cambiando
         filteredTracks:[] 
        }   
    }
    componentDidMount (){
        fetch ("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10")
    .then(response => response.json())
.then (lista => {
    console.log (lista)
    this.setState({
        listaTracks:lista.data,
        filteredTracks:lista.data
    })
}) 
}
deleteTrack(id){
    const newTracks=this.state.listaTracks.filter(track=>track.id !== id)
    this.setState({
        listaTracks:newTracks,
        filteredTracks:newTracks
    })
}
    render() {
        return (
            <div>
                <Header/>
               {this.state.listaTracks.length === 0?
               <h3 className= 'cargando'> Cargando... </h3> :
               <section className="card-container">
                {this.state.listaTracks.map((trackDetail,idx)=> <Card trackDetail={trackDetail} key={idx} delete={(id)=>this.deleteTrack(id)}/>)}
               </section>}
               <button class="T-button" type="button">Cargar más tarjetas</button>

          </div>
        );
    }
}

export default Main;

