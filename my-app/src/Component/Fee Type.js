import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  // State variables for the checkboxes
  const [isFeeTypeChecked, setIsFeeTypeChecked] = useState(false);
  const [isWaiverTypeChecked, setIsWaiverTypeChecked] = useState(false);

  // Function to handle fee type checkbox change
  const handleFeeTypeChange = () => {
    setIsFeeTypeChecked(!isFeeTypeChecked);
  };

  // Function to handle waiver type checkbox change
  const handleWaiverTypeChange = () => {
    setIsWaiverTypeChecked(!isWaiverTypeChecked);
  };

  return (
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      <div style={{ color: 'black', textAlign: 'left', backgroundColor: '#5DADE2 ', height: '10vh' }}>
        <h1>Account Management</h1>
        <a className="nav-link" href="" style={{ position: 'absolute', left: 0, top: 0 }}>
          <FontAwesomeIcon icon={faHome} style={{ background: 'none', height: '26px', marginTop: '35px', marginLeft: '1450px' }} />
        </a>
      </div>
      <div style={{ display: 'flex', gap: '80px' }}>
        <h2>Home</h2>     
        <h2>Account Management</h2>
        <h2>Fee Management</h2>
      </div>
      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />
      <div style={{ display: 'flex', gap: '80px' }}>
        <h>Fee Types</h>
        <h>Fee Structure</h>
        <h>Fee Details</h>
        <h>Scholarship Config</h>
      </div>
      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />
   
      {/* Checkboxes for Fee type and Waiver type */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <input
            type="checkbox"
            checked={isFeeTypeChecked}
            onChange={handleFeeTypeChange}
          />
          <label htmlFor="feeType">Fee Type</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={isWaiverTypeChecked}
            onChange={handleWaiverTypeChange}
          />
          <label htmlFor="waiverType">Waiver Type</label>
        </div>
      </div>
      <div>
        <h2>Generic Fee Types</h2>
        <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />
        <div style={{ display: 'flex', gap: '80px' }}>
          <h>Generic Fee Type</h>
          <h>Fee Type Alias</h>
          <h>Description</h> 
        </div>
        <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />

        {/* Footer Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <button className="btn btn-primary" style={{ marginRight: '10px' }}>Save</button>
          <button className="btn btn-secondary" style={{ marginRight: '10px' }}>Edit</button>
          <button className="btn btn-danger">Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
