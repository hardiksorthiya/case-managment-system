import React, { useState } from 'react';
import { FiEdit, FiTrash, FiArrowRight } from "react-icons/fi";

const initialAlerts = [
  { id: "012", name: "Navin Kumar", description: "Maruthi Suzuki Swift - VDI", location: "Chennai", type: "Search", alert: true },
  { id: "013", name: "George Eliot", description: "Toyota Land Cruiser", location: "Coimbatore", type: "Search", alert: false },
  // Add more rows here...
];

const RecentActivityCompact = () => {
  const [alertsData, setAlertsData] = useState(initialAlerts);

  const toggleAlert = (id) => {
    const updated = alertsData.map((item) =>
      item.id === id ? { ...item, alert: !item.alert } : item
    );
    setAlertsData(updated);
  };

  return (
    <div className="card shadow-sm p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0 title-card">Alerts</h5>
        <button className="btn btn-sm sm-hp-btn d-flex align-items-center">
          <button className="btn btn-sm btn-outline-primary d-flex align-items-center">
            Export Excel <FiArrowRight className="ms-1" />
          </button>
        </button>
      </div>

      {/* Responsive Table */}
      <div className="table-responsive">
        <table className="table align-middle mb-0 bg-white border">
          <thead className="bg-light">
            <tr>
              <th>Sr. No</th>
              <th>Client Name</th>
              <th>Description</th>
              <th>Location</th>
              <th>Alert</th>
              <th>Alert Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alertsData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.location}</td>
                <td>
                  <div
                    className={`toggle-switch cursor-pointer`}
                    onClick={() => toggleAlert(item.id)}
                    style={{
                      width: '42px',
                      height: '22px',
                      backgroundColor: item.alert ? '#fd7e14' : '#ccc',
                      borderRadius: '999px',
                      position: 'relative',
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        backgroundColor: '#fff',
                        borderRadius: '50%',
                        position: 'absolute',
                        top: '2px',
                        left: item.alert ? '22px' : '2px',
                        transition: 'left 0.3s ease-in-out',
                        boxShadow: '0 0 4px rgba(0,0,0,0.2)'
                      }}
                    />
                  </div>
                
                </td>
                <td>{item.type}</td>
                <td className="text-muted">
                  <FiEdit className="cursor-pointer text-primary mr-2" />
                  <FiTrash className="cursor-pointer text-danger" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-end mt-4 gap-2">
        <button className="btn btn-outline-secondary btn-sm">{'<'}</button>
        <button className="btn btn-sm btn-warning text-white">1</button>
        <button className="btn btn-outline-secondary btn-sm">2</button>
        <button className="btn btn-outline-secondary btn-sm">3</button>
        <button className="btn btn-outline-secondary btn-sm">{'>'}</button>
      </div>
    </div>
  );
};

export default RecentActivityCompact;
