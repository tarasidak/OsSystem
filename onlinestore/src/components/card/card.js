import React from 'react';
import './card.css'

let sneakers = require('../../sneaker.json');

export default class Card extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            sneakers: []
        }
    }

    componentDidMount(){
        const lsSneakers = localStorage.getItem('savedSneaker');
        console.log(lsSneakers);
        if(lsSneakers){
            this.setState({sneakers: JSON.parse(lsSneakers)})
        } else {
            const sneakersFromJson = JSON.stringify(sneakers);
            localStorage.setItem('savedSneaker', sneakersFromJson);
            this.setState({sneakers});
        }
    }

    handleDeleteElement = id => {
        this.setState(prevState => ({
          sneakers: prevState.sneakers.filter(sneak => sneak.id !== id),
        }));
        console.log(this.state);
        const store = localStorage.getItem('savedSneaker');
        let savedSneaker = JSON.parse(store);
        savedSneaker = savedSneaker.filter(sneak => sneak.id !== id);
        localStorage.setItem('savedSneaker', JSON.stringify(savedSneaker));   
      };

   render(){
    const { sneakers } = this.state;
       return(
            sneakers.map(sneak => (
                <div className="mySneak" key={sneak.id}>
                    <h3>{sneak.name}</h3>
                    <button className="deleteButton" onClick={() => { this.handleDeleteElement(sneak.id) }}><span>X</span></button>
                    <img src={sneak.link} alt={sneak.name}></img>
                    <p className="price">Price: {sneak.price}</p>
                    <p className="description">Description: {sneak.body}</p>
                </div>
                )
            )
       )
   }     
}


