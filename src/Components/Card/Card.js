import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {logo, name, id} = card;
    return (
        <div>
            <div className="card w-85 shadow-xl">
  <figure className=' bg-indigo-500'><img src={logo} alt="logos"/></figure>
  <div className="card-body bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <h2 className="card-title text-white font-bold">{name}</h2>
    <div className="card-actions justify-end">
        <Link to={`/quiz/${id}`}><button className="btn btn-primary">Start Now</button></Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;