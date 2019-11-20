import React from 'react';

export default class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return( 
            <div className="header clearfix">
                <nav></nav>
                <h3 className="text-muted">My Bookmarker</h3>
                <hr/>
            </div>
        )
    }
}