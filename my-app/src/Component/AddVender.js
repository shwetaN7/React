import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      className="form-control mb-3"
    />
  );
};

const Navbar = () => {
  const [formData, setFormData] = useState({
    VendorName: '',
    VendorContact: '',
    VendorEMail: '',
    VendorAddress: '',
    VendorRemark: '',
    UpdatedBy: '',
    Date: '',
    Action: ''
  });

  const [VendorName, setVendorName] = useState([]);
  const [filteredVendorName, setFilteredVendorName] = useState([]);

  useEffect(() => {
    setFilteredVendorName(VendorName);
  }, [VendorName]);

  const handleChange = (e, rowIndex, columnName) => {
    const { value } = e.target;
    const updatedVendor = VendorName.map((Vendor, index) => {
      if (index === rowIndex) {
        return {
          ...Vendor,
          [columnName]: value
        };
      }
      return Vendor;
    });
    setVendorName(updatedVendor);
    setFilteredVendorName(updatedVendor);
  };

  const handleAddRow = () => {
    setVendorName([...VendorName, formData]);
    setFormData({
      VendorName: '',
      VendorContact: '',
      VendorEMail: '',
      VendorAddress: '',
      VendorRemark: '',
      UpdatedBy: '',
      Date: '',
      Action: ''
    });
  };

  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm);
    const filteredVendors = VendorName.filter(Vendor => {
      return Object.values(Vendor).some(value =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    console.log("Filtered vendors:", filteredVendors);
    setFilteredVendorName(filteredVendors);
  };

  return (
    <div className='container-fluid'>
      <div className="row bg-primary text-white p-3">
        <div className="col">
          <h1>Vendor Add</h1>
        </div>
        <div className="col-auto d-flex align-items-center">
          <label htmlFor="languageSelect" className="mr-3 mb-0">Language:</label>
          <select id="languageSelect" className="form-select" style={{ width: '120px' }}>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <form className="row g-3 p-3">
            <div className="col-md-6">
              <label htmlFor="VendorName" className="form-label">Vendor Name:</label>
              <input type="text" id="VendorName" className="form-control" value={formData.VendorName} onChange={(e) => setFormData({ ...formData, VendorName: e.target.value })} />
            </div>
            <div className="col-md-6">
              <label htmlFor="VendorContact" className="form-label">Vendor Contact:</label>
              <input type="text" id="VendorContact" className="form-control" value={formData.VendorContact} onChange={(e) => setFormData({ ...formData, VendorContact: e.target.value })} />
            </div>
            <div className="col-md-6">
              <label htmlFor="VendorEMail" className="form-label">Vendor Email:</label>
              <input type="email" id="VendorEMail" className="form-control" value={formData.VendorEMail} onChange={(e) => setFormData({ ...formData, VendorEMail: e.target.value })} />
            </div>
            <div className="col-md-6">
              <label htmlFor="VendorAddress" className="form-label">Vendor Address:</label>
              <input type="text" id="VendorAddress" className="form-control" value={formData.VendorAddress} onChange={(e) => setFormData({ ...formData, VendorAddress: e.target.value })} />
            </div>
            <div className="col-md-6">
              <label htmlFor="VendorRemark" className="form-label">Vendor Remark:</label>
              <input type="text" id="VendorRemark" className="form-control" value={formData.VendorRemark} onChange={(e) => setFormData({ ...formData, VendorRemark: e.target.value })} />
            </div>
            <div className="col-md-12">
              <button className="btn btn-outline-success" type="button" onClick={handleAddRow}>Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className="row bg-primary text-white p-3">
        <div className="col">
          <h1>Vendor List</h1>
        </div>
        <div className="col-auto ms-auto">
          {/* Render the SearchBox component here */}
          <SearchBox handleSearch={handleSearch} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <table className="table table-bordered table-responsive">
            <thead>
              <tr>
                <th>Vendor Name</th>
                <th>Vendor Contact</th>
                <th>Vendor Email</th>
                <th>Vendor Address</th>
                <th>Vendor Remark</th>
                <th>Updated By</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through filteredVendorName and render each row */}
              {filteredVendorName?.map((Vendor, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.entries(Vendor).map(([columnName, value], colIndex) => (
                    <td key={colIndex}>
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleChange(e, rowIndex, columnName)}
                        className="form-control"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
