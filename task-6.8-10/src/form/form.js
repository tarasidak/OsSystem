import React from 'react';

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            url: '',
        }
        this.clickButton = this.clickButton.bind(this);
        this.nameUpdate = this.nameUpdate.bind(this);
        this.urlUpdate = this.urlUpdate.bind(this);
    }

    nameUpdate(event){
        this.setState({name: event.target.value})
    }

    urlUpdate(event){
        this.setState({url: event.target.value})
    }

    clickButton(event){
        event.preventDefault();
        if(this.state.name === '' || this.state.url === ''){
            alert('Please fill this fields')
        } else {
            this.props.updateData(this.state.name, this.state.url)
        }
    }
    
    render(){
        
        return(
            <div className="jumbotron">
                <div>
                    <h2>Bookmark your favorite Sites</h2>
                </div>
                <form id="myForm" action="">
                    <div className="form-group">
                        <label for="">Site Name</label>
                        <input onChange={this.nameUpdate} type="text" className="form-control" id="siteName" placeholder="Website Name" />
                    </div>
                    <div className="form-group">
                        <label for="">Site URL</label>
                        <input onChange={this.urlUpdate} value={this.state.url} type="text" className="form-control" id="siteUrl" placeholder="Website URL" />
                    </div>
                    <button type="submit" onClick={this.clickButton} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
