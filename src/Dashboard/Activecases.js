import React from 'react';

const ActiveCases = () => {
    const open = 5;
    const pending = 4;
    const closed = 3;
    const total = open + pending + closed;

    const openPercent = (open / total) * 100;
    const pendingPercent = (pending / total) * 100;
    const closedPercent = (closed / total) * 100;

    return (
        <div className="card shadow-sm p-4">
            <h5 className="mb-3 title-card">Active Cases</h5>
            <h2 className="totalactivcashes">{total}</h2>

            {/* Horizontal Status Bar */}
            <div className="progress" style={{ height: '20px', borderRadius: '5px', overflow: 'hidden' }}>
                <div
                    className="progress-bar bg-primary"
                    style={{ width: `${openPercent}%` }}
                ></div>
                <div
                    className="progress-bar bg-info"
                    style={{ width: `${pendingPercent}%` }}
                ></div>
                <div
                    className="progress-bar bg-secondary"
                    style={{ width: `${closedPercent}%` }}
                ></div>
            </div>

            {/* Legend */}
            <div className="d-flex justify-content-between mt-2 text-muted small content-text-activecases">
                <div>
                    <div className='d-flex align-items-center'>
                        <span className="square square-open me-1"></span>
                        <span className='status-active-status-text'>Open</span>
                    </div>

                    <div className='number-activecases'>{open}</div>
                </div>
                <div>
                    <div className='d-flex align-items-center'>
                        <span className="square square-pending me-1"></span><span className='status-active-status-text'>Pending</span>
                    </div>

                    <div className='number-activecases'> {pending}</div>
                </div>
                <div>
                    <div className='d-flex align-items-center'>
                        <span className="square square-closed me-1"></span>
                        <span className='status-active-status-text'>Closed</span>
                    </div>

                    <div className='number-activecases'> {closed}</div>
                </div>
            </div>
        </div>
    );
};

export default ActiveCases;
