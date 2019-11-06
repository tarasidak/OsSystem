import React, { Component } from 'react';
import '../task6-6/style.css';

export default class Task66 extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      error : ''
    };
  }

  componentDidMount() {
    fetch('https://github.com/kkmkkkkk')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch((error) => {
        this.setState({ error })
        console.log('some error')})     
  }
 
  render(){

    if(this.setState.error === ''){
      return(
        <div>
          Нет ошибки
        </div>)    
    } else {
      return(
        <div>
          <h1 className='heading'>ERROR</h1>
          <p className="ourError">Мы работаем над ошибкой. Скоро исправим</p>
        </div>
      ) 
    }
       
  }
}


