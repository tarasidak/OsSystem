import React from 'react';

import './index.css';

function Nature(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img
        src={props.nature.img}
        alt={props.nature.name}/>
        <h3>{props.nature.name}</h3>
      </div>
    </div>
  );
}



export default Nature;

