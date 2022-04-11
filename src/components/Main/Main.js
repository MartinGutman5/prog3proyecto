import React, { Component } from 'react';
import Card from '../Card/Card'
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
            <section className="card-container">
                {this.state.listaTracks.map((trackDetail,idx)=> <Card trackDetail={trackDetail} key={idx} delete={(id)=>this.deleteTrack(id)}/>)}
            </section>
        );
    }
}

export default Main;
