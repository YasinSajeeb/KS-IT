import React from 'react';

const Card = ({card}) => {
    const {logo, name} = card;
    return (
        <div>
            <div className="card w-85 bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Start Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;