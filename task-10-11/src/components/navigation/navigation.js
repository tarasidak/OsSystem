import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';


 export default class Navigation extends React.Component{
    render(){
        return (
          <div>
            <div className="header d-flex">
              <h3>
                <Link to="/"> MainPage </Link>
              </h3>
              <ul className="d-flex">
                <li>
                  <Link to="/todos">Todos</Link>
                </li>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        );
      } 
    };
 


 

