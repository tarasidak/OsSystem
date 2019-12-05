import React from 'react';
import Card from '../card/index';

import './mainCard.css';

export default class MainCard extends React.Component{
    render(){
        return(
            <div className="mainCard">
                <Card />
            </div>
        )
    }
}