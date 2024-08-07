// TradingAppBox.js
import React from 'react';
import './TradingAppBox.css'; // Import CSS for styling

const TradingAppBox = ({ app }) => {
  return (
    <div className="trading-app-box">
      <h2>{app.name}</h2>
      <div className="rating">Rating: <span style={{color:'gold'}}>{app.rating}</span></div>
      <div className="charges">A/C Opening Charge:<span style={{color:'gold'}}> {app.openingCharge}</span> </div>
      <div className="charges">Equity Delivery Brokerage Charges:<span style={{color:'gold'}}>{app.deliveryBrokerage}</span> </div>
      <div className="downloads">Android Downloads: <span style={{color:'gold'}}> {app.downloads}</span> </div>
      <div className="active-users">Active Users: <span style={{color:'gold'}}>{app.activeUsers}</span></div>
      <div className="pros-cons">
        <h3>Pros:</h3>
        <ul className="pros">
          {app.pros.map((pro, index) => (
            <li key={index}>+ {pro}</li>
          ))}
        </ul>
        <h3>Cons:</h3>
        <ul className="cons">
          {app.cons.map((con, index) => (
            <li key={index}>- {con}</li>
          ))}
        </ul>
      </div>
      <div className="suitability">
        <h3>Suitable For:</h3>
        <p>{app.suitableFor}</p>
      </div>
      <div className="links">
        <h3>Links</h3>
        <a href={app.webLink} target="_blank" rel="noopener noreferrer">Website</a>
        <a href={app.playStoreLink} target="_blank" rel="noopener noreferrer">Play Store</a>
      </div>
    </div>
  );
};

export default TradingAppBox;
