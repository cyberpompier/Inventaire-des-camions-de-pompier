import React from 'react';

  function DisplayCards({ data, type }) {
    return (
      <div className="cards-container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <img src={item.photo} alt={`${type} photo`} className="card-photo" />
            <div className="card-details">
              {Object.entries(item).map(([key, value]) => (
                key !== 'photo' && <p key={key}><strong>{key}:</strong> {value}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  export default DisplayCards;
