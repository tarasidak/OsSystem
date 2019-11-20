import React from 'react';
import './result.css'

export default class Result extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            url:''
        }
    }
    
    render(){
        const {data, deleteSite} = this.props;
        return(
            <div className="row marketing">
                <div className="col-lg-12">
                    <div id="bookmarksResult">
                        {data.map((el) =>(
                        <div> 
                            {el.name} <a className="visitButton" href={`https://${el.url}`}>Visit</a>
                            <button className="delButton" onClick={() => deleteSite(el.url)} type="button">Delete</button>  
                        </div>))}
                    </div>
                </div>
            </div>
        )
    }
}