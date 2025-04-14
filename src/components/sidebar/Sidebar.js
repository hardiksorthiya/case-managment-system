import React from 'react';
import { NavLink } from 'react-router-dom';

// Dummy inline SVGs (replace with your own later)
const icons = {
    dashboard: (
        <svg viewBox="0 0 24 24" className="icon">
            <path fill="currentColor" d="M3 13h8V3H3v10zm10 8h8v-6h-8v6zM3 21h8v-6H3v6zm10-8h8V3h-8v10z" />
        </svg>
    ),
    cases: (
        <svg viewBox="0 0 24 24" className="icon">
            <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14h2V5h14V3zM21 7H9c-1.1 0-2 .9-2 2v12h12c1.1 0 2-.9 2-2V7z" />
        </svg>
    ),
    newCase: (
        <svg viewBox="0 0 24 24" className="icon">
            <path fill="currentColor" d="M19 13H5v-2h14v2z" />
        </svg>
    ),
    calendar: (
        <svg viewBox="0 0 24 24" className="icon">
            <path fill="currentColor" d="M7 10h5v5H7zM19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 
      1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V8h14v11H5z"/>
        </svg>
    ),
    documents: (
        <svg viewBox="0 0 24 24" className="icon">
            <path fill="currentColor" d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 
      2 0 0 1 2-2z"/>
        </svg>
    ),
    messages: (
        <svg viewBox="0 0 24 24" className="icon">
            <path fill="currentColor" d="M21 6h-2v9H5v2c0 .55.45 1 1 
      1h13l4 4V7c0-.55-.45-1-1-1z"/>
        </svg>
    ),
};

const Sidebar = ({ isOpen }) => {
    const navItems = [
      { icon: icons.dashboard, label: 'Dashboard', path: '/' },
      { icon: icons.cases, label: 'Cases', path: '/cases' },
      { icon: icons.newCase, label: 'New Case', path: '/new-case' },
      { icon: icons.calendar, label: 'Calendar', path: '/calendar' },
      { icon: icons.documents, label: 'Documents', path: '/documents' },
      { icon: icons.messages, label: 'Messages', path: '/messages' },
    ];
  
    return (
      <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
        <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="929.58" height="1478.29" viewBox="0 0 929.58 1478.29">
  
  <path class="logo-icon" d="M1016.4,1681.18l383.75-787.6c148.29-304.36-67.25-662.17-405.74-669.79-3.81-.09-7.64-.13-11.47-.13h0c-3.84,0-7.66,0-11.48.13-338.53,7.62-554,365.55-405.59,669.89L950,1681.2C963.49,1708.86,1002.92,1708.85,1016.4,1681.18Z" transform="translate(-518.18 -223.66)"/>
</svg>
          {/* <img src="/logo.svg" alt="Logo" className="logo-icon" /> */}
          {isOpen && <span className="logo-text">Case Management System</span>}
        </div>
        <ul className="sidebar-list">
          {navItems.map((item, index) => (
            <li key={index} className="sidebar-item" title={!isOpen ? item.label : ''}>
              <NavLink to={item.path} className="sidebar-link">
                {item.icon}
                {isOpen && <span className="sidebar-label">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default Sidebar;
