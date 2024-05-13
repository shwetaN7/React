import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      <div style={{ color: 'black', textAlign: 'left', backgroundColor: '#5DADE2 ', height: '7vh' }}>
        <h1>Account Management</h1>
        <a className="nav-link" href="" style={{ position: 'absolute', left: 0, top: 0 }}>
          <FontAwesomeIcon icon={faHome} style={{ background: 'none', height: '10px', marginTop: '20px', marginLeft: '1450px' }} />
        </a>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <h2>Home</h2>
        <h2>Account Management</h2>
        <h2>Account/Journals</h2>
      </div>
      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '5px 0' }} />
      <div style={{ display: 'flex', gap: 'px' }}>
        <h>Bank Account</h>
        <h>Journal Entry</h>
        <h>Tax Config</h>
      </div>
      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '5px 0' }} />
      <div style={{ display: 'flex', gap: '0px', alignItems: 'center' }}>
        <h2>Institution Account Details</h2>
        <FontAwesomeIcon icon={faPlusCircle} size="lg" style={{ color: 'green' }} />
      </div>
      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        <h>Account Type</h>
        <h>Bank Name</h>
        <h>Branch Name</h>
        <h>Holder Name</h>
        <h>A/C Number</h>
        <h>IFSC Code</h>
        <h>Merchant Key</h>
        <h>Salt Key</h>
        <h>Bank Address</h>
        <h>Action</h>
      </div>
      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button className="btn btn-primary" style={{ marginRight: '10px' }}>Save Account Details</button>
        <button className="btn btn-primary">Clear</button>
      </div>
      <hr style={{ width: '100%', height: '1px', backgroundColor: 'black', margin: '10px 0' }} />
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <h2>SMS Account Details</h2>
        <FontAwesomeIcon icon={faPlusCircle} size="lg" style={{ color: 'green' }} />
      </div>
      <hr style={{ width: '100%', height: '1px', backgroundColor: 'black', margin: '10px 0' }} />
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        <h>User Name</h>
        <h>Password</h>
        <h>Url Mask</h>
        <h>URL</h>
        <h>Response</h>
        <h>Available SMS Account</h>
        <h>SMS Provider</h>
        <h>Is Opted</h>
        <h>Action</h>
      </div>
      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="btn btn-primary" style={{ marginRight: '10px' }}>Save Account Details</button>
        <button className="btn btn-primary">Clear</button>
      </div>
    </div>
  );
};

export default Navbar;
