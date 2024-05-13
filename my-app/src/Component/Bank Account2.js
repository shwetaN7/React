import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div className='container' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      <div className='bg-primary text-white d-flex align-items-center justify-content-between' style={{ height: '10vh' }}>
        <h1 className='m-0 px-3'>Account Management</h1>
        <a className="nav-link" href="/">
          <FontAwesomeIcon icon={faHome} style={{ height: '26px' }} />
        </a>
      </div>
      <div className='d-flex flex-wrap gap-3'>
        <h2>Home</h2>
        <h2>Account Management</h2>
        <h2>Account/Journals</h2>
      </div>
      <hr className='my-4' />
      <div className='d-flex flex-wrap gap-3'>
        <h>Bank Account</h>
        <h>Journal Entry</h>
        <h>Tax Config</h>
      </div>
      <hr className='my-4' />
      <div className='d-flex gap-3 align-items-center'>
        <h2>Institution Account Details</h2>
        <FontAwesomeIcon icon={faPlusCircle} size="lg" style={{ color: 'green' }} />
      </div>
      <hr className='my-4' />
      <div className='d-flex flex-wrap gap-3 align-items-center'>
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
      <hr className='my-4' />
      <div className='text-center mt-4'>
        <button className="btn btn-primary me-2">Save Account Details</button>
        <button className="btn btn-primary">Clear</button>
      </div>
      <hr className='my-4' />
      <div className='d-flex gap-3 align-items-center'>
        <h2>SMS Account Details</h2>
        <FontAwesomeIcon icon={faPlusCircle} size="lg" style={{ color: 'green' }} />
      </div>
      <hr className='my-4' />
      <div className='d-flex flex-wrap gap-3 align-items-center'>
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
      <hr className='my-4' />
      <div className='text-center mt-4'>
        <button className="btn btn-primary me-2">Save Account Details</button>
        <button className="btn btn-primary">Clear</button>
      </div>
    </div>
  );
};

export default Navbar;
