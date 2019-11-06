import React from 'react';

export default class Task61 extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        names: [' Taras', ' Ivan', ' Katya', ' Alex', 'Marina', 'Kostya']
      } 
    }
    randomName(){
      const nameLength = this.state.names.length;
      const currentName = this.state.names[Math.floor((Math.random() * nameLength))];
      
      this.setState({currentName : currentName})
    }
    render(){
      return(
      <div>
        <h2>Task 6-1</h2>
        <button onClick={this.randomName.bind(this)}>
          Show random Name
         </button>
          {this.state.currentName}
      </div>
      ) 
    }  
  }