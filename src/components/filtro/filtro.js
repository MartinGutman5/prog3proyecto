import React, {Component} from 'react';
import './Filtro.css'

class Filtro extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    capturarDatos(datos){
        this.setState({
                value: datos.target.value
            },
            ()=>this.props.filtrarCanciones(this.state.value))
    }

    render(){
        console.log(this.props)
        return(
            <form className= 'form'>
                <input className= 'input' onChange={(datos)=>this.capturarDatos(datos)} type="text" value={this.state.value} placeholder="Buscar canción" />
            </form>
        )
    }

}

export default Filtro;