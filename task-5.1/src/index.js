import React from 'react';
import ReactDOM from 'react-dom';
import Nature from './Nature';

import './index.css';
//import { returnStatement } from '@babel/types';

class App extends React.Component{
    state = {
        nature: [ 
            {name:'forest', img:'https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344__340.jpg'},
            {name:'lake', img:'https://cdn.pixabay.com/photo/2019/09/19/19/05/tree-4490071__340.jpg'},
            {name:'mountain', img:'https://cdn.pixabay.com/photo/2019/10/05/09/57/landscape-4527525__340.jpg'},
            {name:'desert', img:'https://cdn.pixabay.com/photo/2014/03/05/21/12/desert-279862_960_720.jpg'}
        ]
    }
    render(){
        return(
            <div className="nature">
                <div className="list">
                    {this.state.nature.map(nature =>{
                        return(
                            <Nature nature={nature} key={nature.name}/>
                        )
                        
                    })}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />
    ,document.getElementById('root')
);

 