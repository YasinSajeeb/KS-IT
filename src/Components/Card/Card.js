import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {logo, name, id} = card;
    return (
        <div>
            <div className="card w-85 bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions justify-end">
        <Link to={`/quiz/${id}`}><button className="btn btn-primary">Start Now</button></Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;