import React from 'react';

export default class Task64 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            min: 5,
            max: 28
        };
    }

    componentDidMount(){
        let currentNumber = Math.floor(Math.random() * (this.state.max - this.state.min + 1)) + this.state.min;
        if( currentNumber %2 === 0){
            this.setState({currentNumber : currentNumber});
        } else if (currentNumber === this.state.max && this.state.max % 2 === 1){
            this.setState({currentNumber: currentNumber - 1});
        } else {
            this.setState({currentNumber: currentNumber + 1});
        }
    }

    render(){
        return(
            <div>
                <h2>Task 6-4</h2>
                <button onClick={this.componentDidMount.bind(this)}>
                Show random number
                </button>
                {this.state.currentNumber}
            </div>
        )
    }
}