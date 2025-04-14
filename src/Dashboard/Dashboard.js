import React from 'react'
import ActiveCases from './Activecases'
import UpcomingTasks from './UpcomingTasks'
import RecentActivity from './RecentActivity'
import QuickLinks from './QuickLinks'
import RecentActivityCompact from './RecentActivityCompact'


export const Dashboard = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                {/* Active Cases */}
                <div className="col-lg-6 mb-4">
                    <ActiveCases />
                </div>
                {/* Upcoming Tasks */}
                <div className="col-lg-6 mb-4">
                    <UpcomingTasks />
                </div>
                {/* Recent Activity */}
                <div className="col-lg-6 mb-4">
                    <RecentActivity />
                </div>
                {/* Quick Links */}
                <div className='col-lg-6 mb-4'>
                    <QuickLinks />
                </div>
                {/* Recentactivitycompact */}
                <div className='col-12'>
                    <RecentActivityCompact />
                </div>



            </div>
        </div>
    )
}
