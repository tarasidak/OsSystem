import React, { Component } from 'react';

export default class Task65 extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: [
        {
          userId: null,
          id: null,
          title: null,
          body: null
        }
      ] 
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ users: data}));
  }
 
  render(){

    
      return(
        <div>
            <h2>Task 6-5</h2>
              <pre>{JSON.stringify(this.state.users, undefined, 4)}</pre>
            
        </div>)     
  }
}


