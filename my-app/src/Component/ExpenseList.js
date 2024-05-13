import React, { useState, useEffect } from 'react';

const SearchBox = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

const Navbar = () => {
  const [formData, setFormData] = useState({
    PaymentMode: '',
    ExpenseFromDate: '',
    ExpenseToDate: '',
    ExpenseAccount: '',
    ExpenseBy: '',
    ExpenseHead: '',
    VendorName: '',
    OrderBy: ''
  
  });

  const [ExpenseName, setExpenseName] = useState([]);
  const [filteredVendorName, setFilteredVendorName] = useState([]);

  useEffect(() => {
    setFilteredVendorName(ExpenseName);
  }, [ExpenseName]);

  const handleChange = (e, rowIndex, columnName) => {
    const { value } = e.target;
    const updatedExpenseName = ExpenseName.map((Expense, index) => {
      if (index === rowIndex) {
        return {
          ...Expense,
          [columnName]: value
        };
      }
      return Expense;
    });
    setExpenseName(updatedExpenseName);
    setFilteredVendorName(updatedExpenseName);
  };

  const handleAddRow = () => {
    setExpenseName([...ExpenseName, formData]);
    setFormData({
        PaymentMode: '',
        ExpenseFromDate: '',
        ExpenseToDate: '',
        ExpenseAccount: '',
        ExpenseBy: '',
        ExpenseHead: '',
        VendorName: '',
        OrderBy: ''
    });
  };

  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm);
    const filteredExpenseName = ExpenseName.filter(Expense => {
      return Object.values(Expense).some(value =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    console.log("Filtered ExpenseName:", filteredExpenseName);
    setFilteredVendorName(filteredExpenseName);
  };

  const expenseHeadOptions = ['Option 1', 'Option 2', 'Option 3'];
  const paymentModeOptions = ['Cash', 'Credit Card', 'Debit Card', 'Net Banking', 'UPI'];
  const VendorNameOptions = ['Vendor 1', 'Vendor 2', 'Vendor 3']; // Added VendorName options

  return (
    <div className='containerStyle' style={{ backgroundColor: 'white' }}>
      <div className="header" style={{ color: 'black', backgroundColor: '#5DADE2', height: '10vh', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'left' }}>
          <h1 style={{ margin: 0 }}>Expense List Filter</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <label htmlFor="languageSelect" style={{ marginRight: '20px', marginBottom: 0 }}>Language:</label>
          <select id="languageSelect" style={{ height: '20%', marginRight: '20px' }}>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
        <a className="nav-link" href="/" style={{ position: 'absolute', left: 0, top: 0 }}>
          {/* Home Icon */}
        </a>
      </div>

      <div style={{ padding: '20px' }}>
        <form style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <label htmlFor="PaymentMode">PaymentMode<span style={{ color: 'red' }}>*</span> : </label>
              <select id="Expense Head" name="Expense Head" value={formData.ExpenseHead} onChange={(e) => setFormData({ ...formData, ExpenseHead: e.target.value })}>
                <option value="">ExpenseFromDate</option>
                {expenseHeadOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
              <label htmlFor="Expense Name">Expense Name<span style={{ color: 'red' }}>*</span> : </label>
              <input type="text" id="Expense Name" name="Expense Name" value={formData.ExpenseName} onChange={(e) => setFormData({ ...formData, ExpenseName: e.target.value })} />
              <label htmlFor="Expense Date">ExpenseToDate<span style={{ color: 'red' }}>*</span> : </label>
              <input type="text" id="Expense Date" name="Expense Date" value={formData.ExpenseDate} onChange={(e) => setFormData({ ...formData, ExpenseDate: e.target.value })} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <label htmlFor="Expense Amount">ExpenseAccount<span style={{ color: 'red' }}>*</span> : </label>
              <input type="text" id="Expense Amount" name="Expense Amounts" value={formData.ExpenseAmount} onChange={(e) => setFormData({ ...formData, ExpenseAmount: e.target.value })} />
              <label htmlFor="Expense By">ExpenseBy : </label>
              <input type="text" id="Expense By" name="Expense By" value={formData.ExpenseBy} onChange={(e) => setFormData({ ...formData, ExpenseBy: e.target.value })} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <label htmlFor="Vendor Name">ExpenseHead<span style={{ color: 'red' }}>*</span> : </label>
              <select id="Vendor Name" name="Vendor Name" value={formData.VendorName} onChange={(e) => setFormData({ ...formData, VendorName: e.target.value })}>
                <option value="">Select VendorName</option>
                {VendorNameOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
              <label htmlFor="Payment Mode">Payment Mode<span style={{ color: 'red' }}>*</span> : </label>
              <select id="Payment Mode" name="Payment Mode" value={formData.PaymentMode} onChange={(e) => setFormData({ ...formData, PaymentMode: e.target.value })}>
                <option value="">Select OrderBy</option>
                {paymentModeOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginBottom: '15px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <label htmlFor="Bill Number">Bill Number<span style={{ color: 'red' }}>*</span> : </label>
              <input type="text" id="Bill Number" name="Bill Number" value={formData.BillNumber} onChange={(e) => setFormData({ ...formData, BillNumber: e.target.value })} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <label htmlFor="Bill">Bill<span style={{ color: 'red' }}>*</span> : </label>
              <input type="text" id="Bill" name="Bill" value={formData.Bill} onChange={(e) => setFormData({ ...formData, Bill: e.target.value })} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <label htmlFor="Expense Detail">Expense Detail : </label>
              <input type="text" id="Expense Detail" name="Expense Detail" value={formData.ExpenseDetail} onChange={(e) => setFormData({ ...formData, ExpenseDetail: e.target.value })} />
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button className="btn btn-outline-success" type="button" onClick={handleAddRow}>Submit</button>
          </div>
        </form>
      </div>

      <div className="header" style={{ backgroundColor: '#5DADE2', height: '10vh', display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
        <h1 style={{ margin: 0 }}>Expense List</h1>
      </div>

      <div className="search-box" style={{ padding: '20px', textAlign: 'right' }}>
        <SearchBox handleSearch={handleSearch} />
      </div>

      <div className="table-responsive" style={{ padding: '20px' }}>
        <table className="table" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>ExpenseDate</th>
              <th>ExpenseBy</th>
              <th>ExpenseAmount</th>
              <th>ExpenseHead</th>
              <th>ExpenseDetail</th>
              <th>PaymentMode</th>
              <th>PaymentDetail</th>
              <th>BillNumber</th>
              <th>Bill</th>
              <th>VendorName</th>
              <th>UpdatedBy</th>
              <th>Date</th>
              <th>Payment Receipt</th>
              <th>Delete</th>

              
            </tr>
          </thead>
          <tbody>
            {filteredVendorName?.map((Expense, rowIndex) => (
              <tr key={rowIndex}>
                {Object.entries(Expense).map(([columnName, value], colIndex) => (
                  <td key={colIndex}>
                    <div className="form-group">
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleChange(e, rowIndex, columnName)}
                        className="form-control"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Navbar;
