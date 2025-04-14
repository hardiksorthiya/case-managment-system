import React from 'react';
import { FiUserPlus, FiFolderPlus, FiCalendar, FiUpload } from 'react-icons/fi';

const links = [
  { icon: <FiUserPlus />, label: 'Add Client', color: 'primary' },
  { icon: <FiFolderPlus />, label: 'New Case', color: 'success' },
  { icon: <FiCalendar />, label: 'Schedule', color: 'info' },
  { icon: <FiUpload />, label: 'Upload Document', color: 'warning' },
];

const QuickLinks = () => {
  return (
    <div className="card shadow-sm p-4">
      <h5 className="mb-3 title-card">Quick Links</h5>
      <div className="d-grid gap-2">
        {links.map((link, index) => (
          <button key={index} className={`btn btn-outline-${link.color} d-flex align-items-center gap-2`}>
            {link.icon}
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
