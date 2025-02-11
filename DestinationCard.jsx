import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', width: '250px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
      <img src={destination.image} alt={destination.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <div style={{ padding: '15px' }}>
        <h3>{destination.name}</h3>
        <p><strong>{destination.location}</strong></p>
        <p>{destination.description}</p>
        <p><strong>Price:</strong> {destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;