import React from 'react';
import { FiCheckCircle, FiFileText, FiUser, FiEdit, FiArrowRight } from 'react-icons/fi';

const activities = [
  {
    icon: <FiUser className="text-primary" />,
    text: 'New client added: John Doe',
    time: '2 hours ago',
  },
  {
    icon: <FiEdit className="text-warning" />,
    text: 'Case updated: Case #245',
    time: '5 hours ago',
  },
  {
    icon: <FiFileText className="text-success" />,
    text: 'Document uploaded: Agreement.pdf',
    time: 'Yesterday',
  },
  {
    icon: <FiCheckCircle className="text-muted" />,
    text: 'Task completed: Call client',
    time: '2 days ago',
  },
];

const RecentActivity = () => {
  return (
    <div className="card shadow-sm p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0 title-card">Recent Activity</h5>
        <button className="btn btn-sm btn-outline-primary d-flex align-items-center ">View All  <FiArrowRight className="ms-1" /></button>
      </div>

      <ul className="list-unstyled m-0">
        {activities.map((activity, index) => (
          <li key={index} className="d-flex align-items-start gap-3 py-2 border-bottom">
            <div className="fs-5">{activity.icon}</div>
            <div>
              <div>{activity.text}</div>
              <div className="text-muted small">{activity.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
