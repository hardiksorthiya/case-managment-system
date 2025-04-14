import React from 'react';

const activities = [
  {
    activityDate: 'Apr 23',
    description: 'Note add Johnson v. Smith',
    dueDate: 'Apr. 28',
    timeLeft: '4 h case',
  },
  {
    activityDate: 'Apr 20',
    description: 'Email sent to Linda Harris',
    dueDate: 'Apr. 26',
    timeLeft: '1 d left',
  },
];

const RecentActivityCompact = () => {
  return (
    <div className="card shadow-sm p-4 mb-2">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0 title-card">Recent Activity</h5>
        <a href="/" className="text-primary small text-decoration-none">Due Date &gt;</a>
      </div>

      {activities.map((item, index) => (
        <div key={index} className="d-flex justify-content-between py-2 border-bottom ">
          <div className="text-muted small" style={{ width: '20%' }}>{item.activityDate}</div>
          <div style={{ width: '40%' }}>{item.description}</div>
          <div className="text-muted small" style={{ width: '20%' }}>{item.dueDate}</div>
          <div className="fw-semibold text-end" style={{ width: '20%' }}>{item.timeLeft}</div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivityCompact;
