import React from 'react';
import Navigation from '../navigation';
import './todos.css';

export default class Todos extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: [],
            allData: []
        }

        this.renderAll = this.renderAll.bind(this);
        this.renderComp = this.renderComp.bind(this);
        this.renderUnComp = this.renderUnComp.bind(this);
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(result => {
          this.setState({
            data: result,
            allData: result 
          })
        })
      }

      renderAll(){
          return this.setState({
              data: this.state.allData
          })
      }

      renderComp(){
          this.setState({
            data: this.state.allData.filter(myData => {
                return myData.completed
            })
          })
      }

      renderUnComp(){
        this.setState({
          data: this.state.allData.filter(myData => {
              return !myData.completed
          })
        })
    }

      render(){
          const {data} = this.state;
         
          return(
              <div>
                  <Navigation/> 
                  <button onClick={this.renderAll}>Все</button>
                  <button onClick={this.renderComp}>Выполененные</button>
                  <button onClick={this.renderUnComp}>Невыполненные</button>
                  {data.map(myData => 
                    <div key={myData.id} complete={myData.completed}>
                        <h3>id: {myData.id} </h3>
                        <p>title: {myData.title}</p>
                    </div>  
                )}
              </div>
          )
      }
}