import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
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
        <h2>Account/Journals</h2>
      </div>
      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />
      <div style={{ display: 'flex', gap: '80px' }}>
        <h>Bank Account</h>
        <h>Journal Entry</h>
        <h>Tax Config</h>
      </div>
      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />

      <div style={{ marginBottom: '10px' }}>
          <div style={{ marginBottom: '10px' }}>State</div>
          <select
            placeholder="State"
            name="State"
            id="State"
            required
            style={{
              width: 'calc(0px + 50vmin)',
              height: '40px',
              padding: '10px',
              borderBlock: '50px',
              borderRadius: '10px',
              backgroundColor: '#E5E8E8 ',
              resize: 'none',
              fontSize: '16px',
              color: 'black',
              fontFamily: 'Arial, sans-serif',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            <option value="" disabled selected>Select your topic</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Telangana">Telangana</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Haryana">Haryana</option>
          </select>
        </div>


      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />
      <div style = {{}}>
        <h2>Tax Config </h2>
      </div>
      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />
      <div style={{ display: 'flex', gap: '80px' }}>
        <h>State</h>
        <h>Total Tax Pct</h>
        <h>Tax Description</h>
        <h>Action</h>
      </div>
      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />
    </div>
  );
};

export default Navbar;
