import React from 'react';

import './information.css'

let sneakers = require('../../sneaker.json');

export default class Information extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            sneakers: [],
            totalAmount: 0,
            totalCost: 0,
            avgPrice: 0
        }
        
        this.totalAmount = this.totalAmount.bind(this);
    }

    totalAmount(){
        return sneakers.length;
    }

    render(){
        const {totalAmount} = this.state;

        return(
            <div className="information">
                <div className="totalAmount">Total Amount: {totalAmount} </div>
                <div className="totalCost">Total Cost: </div>
                <div className="averagePrice">Average Price: </div>
                <button className="clear">Clear</button>
            </div>
        )
    }
}