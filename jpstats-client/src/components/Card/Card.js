import React from 'react';
import './Card.css';

const Card = ({ className, title, children }) => {
    return (
      <div className={`card ${className}`}>
        {title && <div className="card-title">{title}</div>}
        <div className="card-content">{children}</div>
      </div>
    );
  };

export default Card;