import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalculator, faDollarSign, faUserCheck } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  return (
     <div className='container' style={{ alignItems: 'center', backgroundColor: 'white' }}>
    <div style={{ height: '10vh',backgroundColor: '#5DADE2 '}}>
    <div className="icon larger-icon" style={{ fontSize: '36px',fontStyle:'Bold' }}>🏫/📚  <h>Account Management</h></div>
    
</div>

<div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center' }}>
                {/* First Box */}
                <div
    className='Data-Exploration'
    style={{
        color: 'black',
        height: 'auto',
        width: '50vmin',
        padding: '10px',
        fontSize: '20px',
        borderBottom: '1px solid #02133805',
        boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        background: 'linear-gradient(to right, #F4D03F, #E6E6FA)',
        position: 'relative',
        overflow: 'hidden' ,
        transition: 'background-color 0.3s ease', // Added transition for smooth color change
        marginLeft: '50px', // Add margin between the boxes
    }}
>
 
<div className="icon larger-icon" style={{ fontSize: '56px' }}>💵</div> 
 
        <h3>Fees management</h3>
    </div>
 
  {/* second Box */}
  <div
    className='Data-Exploration'
    style={{
        color: 'black',
        height: 'auto',
        width: '50vmin',
        padding: '10px',
        fontSize: '20px',
        borderBottom: '1px solid #02133805',
        boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        background: 'linear-gradient(to right, #A3E4D7, #E6E6FA)',
        position: 'relative',
        overflow: 'hidden' ,
        transition: 'background-color 0.3s ease', // Added transition for smooth color change
        marginLeft: '50px', // Add margin between the boxes
    }}
>
 
<div className="icon larger-icon" style={{ fontSize: '56px' }}>📒</div>
 
 
        <h3>Account/Journals</h3>
    </div>
    </div>
    </div>
 );
 };
 export default Navbar;