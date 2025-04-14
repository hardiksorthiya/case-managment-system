import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const UpcomingTasks = () => {
  const tasks = [
    { title: 'Prepare for deposition', dueDate: 'April 25, 2024' },
    { title: 'File complaint', dueDate: 'April 26, 2024' },
    { title: 'Follow up with client', dueDate: 'April 29, 2024' },
    { title: 'Review medical records', dueDate: 'May 1, 2024' },
  ];

  return (
    <div className="card shadow-sm p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0 title-card">Upcoming Tasks</h5>
      <button className="btn btn-sm sm-hp-btn  d-flex align-items-center">
      <button className="btn btn-sm btn-outline-primary d-flex align-items-center">View All  <FiArrowRight className="ms-1" /></button>
        </button>
        </div>
      
      <ul className="list-unstyled m-0">
        {tasks.map((task, index) => (
          <li key={index} className="d-flex justify-content-between py-2 border-bottom">
            <span className='title-upcomingtext'>{task.title}</span>
            <span className="text-muted small">{task.dueDate}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingTasks;
