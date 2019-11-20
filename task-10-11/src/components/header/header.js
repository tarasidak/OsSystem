import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../navigation';
import './header.css';

const Photo = props => <img src={props.image} className="photoDivChild" />;

export default class Header extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      photos: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos?albumId=1')
    .then(res => res.json())
    .then(result => {
      this.setState({
        photos: result 
      })
    })
  }

  render(){
    const {photos} = this.state;
    return (
      
      <div>
        <Navigation/> 
        <div className="photoDiv">
          {photos.map(photo => 
            <Photo key={photo.key} image={photo.thumbnailUrl}/>
          )
          }
        </div>
      </div>
    );
  } 
};

