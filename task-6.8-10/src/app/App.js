import React from 'react';
import Header from '../header';
import Form from '../form';
import Result from '../result';
import Footer from '../footer';


export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        sites: []
    }

    this.deleteSite = this.deleteSite.bind(this);
  }

  deleteSite(url){
    this.setState({
      sites: this.state.sites.filter((el) => el.url !== url)
    })  
}

  updateData = (name, url) => {
    this.setState({
      sites: [
        ...this.state.sites,
        {
          name: name,
          url: url,
        }
      ]
    })
  }

  render(){
    return(
      <div className="container">
        <Header/>
        <Form updateData={this.updateData}/>
        <Result data={this.state.sites} deleteSite={this.deleteSite}/>
        <Footer/>
      </div>
    )
  }
}

