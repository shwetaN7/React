// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import your CSS file for styling
 
function Sidebar() {
  return (
<aside className="sidebar">
<div className="sidebar-header">
<h2>My Sidebar</h2>
</div>
<nav className="sidebar-nav">
<ul>
<li>
<Link to="/" className="sidebar-link">
              Home
</Link>
</li>
<li>
<Link to="/about" className="sidebar-link">
              About
</Link>
</li>
<li>
<Link to="/contact" className="sidebar-link">
              Contact
</Link>
</li>
</ul>
</nav>
</aside>
  );
}
 
export default Sidebar;