import React, { Component } from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header'
import Filtro from "../Filtro/Filtro"
import "./Main.css"
class Main extends Component { 
    constructor (){
        super ()
        this.state={
         listaTracks:[],                         //caracteristicas que van cambiando
         filteredTracks:[] , 
         column:true,
         contador: 0,
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

filtrarCanciones(textoAFiltrar){ //pasar a header
    let cancionesFiltradas = [];
    cancionesFiltradas = this.state.listaTracks.filter( unaCancion => unaCancion.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
    this.setState({
        listaTracks: cancionesFiltradas,
        filteredTracks: cancionesFiltradas
    })
}
deleteTrack(id){
    const newTracks=this.state.listaTracks.filter(track=>track.id !== id)
    this.setState({
        listaTracks:newTracks,
        filteredTracks:newTracks
    })
}

cargarMas(){
    this.setState({
    contador: this.state.contador + 10
},()=> fetch (`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&index=${this.state.contador}&limit=10`)
    .then(response => response.json())
.then (lista => {
    console.log (lista)
    this.setState({
        listaTracks: this.state.listaTracks.concat(lista.data),
        filteredTracks:this.state.filteredTracks.concat(lista.data)
    })
}) )
   
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
                <Filtro filtrarCanciones= {(textoAFiltrar)=> this.filtrarCanciones(textoAFiltrar)}/>
                
                <section className={this.state.column?"card-container-column":"card-container-row"}>
                   {this.state.listaTracks.length === 0?
                   <section className="section-cargando">
                        <div className="spinner"></div>
                        <h3 className="cargando">Cargando... </h3>
                    </section> :
                   this.state.listaTracks.map((trackDetail,idx)=> <Card trackDetail={trackDetail} key={idx} delete={(id)=>this.deleteTrack(id)}column={this.state.column}/>)}
                </section>

               <button className="T-button" onClick={()=>this.cargarMas()} type="button">Cargar más tarjetas</button>

          </div>
        )
    }
    
}

export default Main;

