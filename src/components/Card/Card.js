import React, { Component } from 'react';
import "./Card.css"
class Card extends Component {
    constructor (props){
    super (props)
    this.state={
        text:"ver mas",
        showing:false,
        display:"hidden"
    }
}
showDescription(){
    if (!this.state.showing) {
        this.setState({
            text:"ver menos",
            showing:true,
            display:"show"
        })
    }else{
        this.setState({
            text:"ver más",
            showing:false,
            display:"hidden"
        })
    }
}

    render() {
        return (
            <article className={this.props.column?"card-column articlebackround":"card-row articlebackround"}>
            <section className="navigation">
                
                <i className="far fa-window-close" 
                onClick={()=>this.props.delete(this.props.trackDetail.id)}></i>
            </section>
            <main>
                <img className="imagen" src={this.props.trackDetail.album.cover} alt=""/>
                <div className="infocard">
                <h3 className="desc">{this.props.trackDetail.title}</h3>
                <p className="description">{this.props.trackDetail.artist.name}</p>
                <section className={this.state.display}>
                    <p>Duration : {this.props.trackDetail.duration}</p>
                    <p>Album : {this.props.trackDetail.album.title}</p>
                    <p>Ranking : {this.props.trackDetail.rank}</p>
                </section>
                <a className="ver" onClick={()=>this.showDescription()}>{this.state.text}</a>
                </div>
                
            </main>
        </article>
        );
    }
}

export default Card;
