import React, { Component } from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header'
import "./Main.css"
class Main extends Component { 
    constructor (){
        super ()
        this.state={
         listaTracks:[],                         //caracteristicas que van cambiando
         filteredTracks:[] , 
         column:true
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
changeDirection(){
if(this.state.column){
    this.setState({
        column:false
    })
} else {
    this.setState ({
        column:true
    })
}
}
    render() {
        return (
            <div>
                <Header column={this.state.column} changeDirection ={()=>this.changeDirection()} />
               {this.state.listaTracks.length === 0?
               <h3 className= 'cargando'> Cargando... </h3> :
               <section className={this.state.column?"card-container-column":"card-container-row"}>
                {this.state.listaTracks.map((trackDetail,idx)=> <Card trackDetail={trackDetail} key={idx} delete={(id)=>this.deleteTrack(id)}column={this.state.column}/>)}
               </section>}
               <button class="T-button" type="button">Cargar más tarjetas</button>

          </div>
        );
    }
    
}

export default Main;
