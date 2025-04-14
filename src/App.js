import React, { useState } from 'react';
import './assets/css/style.css';
import './assets/css/media.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {Dashboard} from './Dashboard/Dashboard';


function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      <div className="app-container">
        <Sidebar isOpen={isSidebarOpen} />
        <div className={`main-section ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          {/* Header */}
          <header id="header">
          <Header toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
          </header>
          {/* Main Content */}
          <section className="main-content" id='main-content'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;

