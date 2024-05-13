import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserPlus, faEnvelope, faSearch, faCalendar, faStickyNote, faCalculator } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      <div style={{ color: 'black', textAlign: 'left', backgroundColor: '#5DADE2', height: '10vh' }}>
        <h1>Account Management</h1>
        <a className="nav-link" href="" style={{ position: 'absolute', left: 0, top: 0 }}>
          <FontAwesomeIcon icon={faHome} style={{ background: 'none', height: '26px', marginTop: '35px', marginLeft: '1450px' }} />
        </a>
      </div>

      <div style={{ display: 'flex', gap: '80px' }}>
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

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '10px' }}>
        <div style={{ marginRight: '30px' }}>
          <div style={{ marginBottom: '5px' }}>From Date</div>
          <input className="form-control me-2" type="date" placeholder="From Date" aria-label="From Date" />
        </div>

        <div style={{ marginRight: '30px' }}>
          <div style={{ marginBottom: '5px' }}>To Date</div>
          <input className="form-control me-2" type="date" placeholder="To Date" aria-label="To Date" />
        </div>

        <div style={{ marginRight: '10px' }}>
          <div style={{ marginBottom: '5px' }}>Account Type</div>
          <select
            placeholder="Account Type"
            name="Account Type"
            id="Account Type"
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
            <option value="Saving Account">Saving Account</option>
            <option value="Checking">Checking</option>
            <option value="Investment">Investment</option>
          </select>
        </div>

        <div style={{ marginBottom: '5px', marginRight: '10px' }}>
          <div style={{ marginBottom: '5px' }}>Debit/Credit</div>
          <select
            placeholder="Debit/Credit"
            name="Debit/Credit"
            id="Debit/Credit"
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
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>

        <div style={{ marginBottom: '5px', marginRight: '10px' }}>
          <div style={{ marginBottom: '5px' }}>Transaction From Account</div>
          <select
            placeholder="Transaction From Account"
            name="Transaction From Account"
            id="TransactionFromAccount"
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
            {/* Add options for Transaction From Account */}
          </select>
        </div>

        <div style={{ marginBottom: '5px' }}>
          <div style={{ marginBottom: '5px' }}>Transaction To Account</div>
          <select
            placeholder="Transaction To Account"
            name="Transaction To Account"
            id="TransactionToAccount"
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
            {/* Add options for Transaction To Account */}
          </select>
        </div>

        <button className="btn btn-outline-success" type="submit">
          <i className="bi bi-search"></i>
        </button>
      </div>

      <div>
        <h2>Account Journal (INR)</h2>
      </div>

      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />

      <div style={{ display: 'flex', gap: '80px' }}>
        <h>Transaction Date</h>
        <h>Transaction From</h>
        <h>Transaction To</h>
        <h>Transaction Amount</h>
        <h>Narration</h>
        <h>Invoive</h>
        <h>Action</h>
      </div>

      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />
    </div>
  );
};

export default Navbar;
