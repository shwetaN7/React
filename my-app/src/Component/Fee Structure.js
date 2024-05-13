
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

// MatrixTable component definition
const MatrixTable = () => {
  // Sample data representing class names and corresponding payment particulars
  const classData = [
    {
      className: 'Class 1',
      paymentParticulars: [
        { name: 'No of Payments', amount: 2500 },
        { name: 'Payment from Date', type :"date" ,amount: "02-04-2023" }, 
        { name: 'Payment To Date', type :"date" ,amount:"02-05-2024" },   
        { name: 'Book Fee', amount: "1200" },
        { name: 'Management Fee', amount: "1000" },
        { name: 'Security Deposit', amount: "1500" },
        { name: 'Stationary Fee', amount: "500" },
        { name: 'Transportation Fee', amount: "1000" },
        { name: 'Taxes', amount: "" },
        { name: 'Total', amount: 0 } // Initialize total to 0
      ]
    },
    // Add more class objects as needed
  ];

  // Function to calculate total
  const calculateTotal = (paymentParticulars) => {
    let total = 0;
    for (let particular of paymentParticulars) {
      if (particular.name !== 'Total') { // Exclude the 'Total' itself from the calculation
        total += particular.amount ? parseInt(particular.amount) : 0; // Parse amount to integer
      }
    }
    return total;
  };

  // Update total amount in classData
  classData.forEach(classItem => {
    const totalParticular = classItem.paymentParticulars.find(particular => particular.name === 'Total');
    if (totalParticular) {
      totalParticular.amount = calculateTotal(classItem.paymentParticulars);
    }
  });

  // Logic to render the table using the classData array
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Class Name</th>
            {classData[0].paymentParticulars.map((particular, index) => (
              <th key={index}>{particular.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {classData.map((classItem, idx) => (
            <tr key={idx}>
              <td>{classItem.className}</td>
              {classItem.paymentParticulars.map((particular, index) => (
                <td key={index}>{particular.amount}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Navbar = () => {
  // State variables for the form inputs
  const [curriculumCode, setCurriculumCode] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Function to handle changes in the curriculum code input
  const handleCurriculumCodeChange = (event) => {
    setCurriculumCode(event.target.value);
  };

  // Function to handle changes in the selected year dropdown
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
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
      </div>
      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />
      

      {/* Curriculum Code input and Academic Year dropdown in a single line */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div>
          <label htmlFor="curriculumCode">Curriculum Code : </label>
          <input
            type="text"
            id="curriculumCode"
            value={curriculumCode}
            onChange={handleCurriculumCodeChange}
          />
        </div>
        <div>
          <label htmlFor="academicYear">Academic Year : </label>
          <select
            id="academicYear"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="">Select Academic Year</option>
            <option value="2022-2023">2022-2023</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2024-2025">2024-2025</option>
          </select>
        </div>
      </div>
      <div>
        <h2>Fee Particulars (INR)</h2>
        <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <MatrixTable />
      {/* Footer Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button className="btn btn-primary" style={{ marginRight: '10px' }}>Save</button>
        <button className="btn btn-secondary" style={{ marginRight: '10px' }}>Edit</button>
        <button className="btn btn-danger">Clear</button>
      </div>
    </div>
  );
};

export default App;