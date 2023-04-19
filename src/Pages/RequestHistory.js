import React, { useState, useEffect } from 'react';
import './RequestHistory.css';

const DonationDetails = () => {
  const [donationData, setDonationData] = useState({});

  useEffect(() => {
    // Fetch data from back-end API and set it in state
    fetch('/api/donationDetails')
      .then(response => response.json())
      .then(data => setDonationData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="donation-details-container">
      <form className="donation-details-form">
        <label htmlFor="donatedBy">Donated By:</label>
        <input id="donatedBy" type="text" value={donationData.donatedBy} />

        <label htmlFor="date">Date:</label>
        <input id="date" type="text" value={donationData.date} />

        <label htmlFor="location">Location:</label>
        <input id="location" type="text" value={donationData.location} />
      </form>
    </div>
  );
}

export default DonationDetails;
