import React, { useState } from 'react';
import './App.scss';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">🚀</span>
            <span className="logo-text">CtrlAltDefeat</span>
          </div>
        </div>
        
        <div className="header-center">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-btn">🔍</button>
          </div>
        </div>
        
        <div className="header-right">
          <div className="notifications">
            <button className="notification-btn">
              <span className="notification-icon">🔔</span>
              <span className="notification-badge">3</span>
            </button>
          </div>
          <div className="user-menu">
            <span className="user-avatar">👤</span>
            <span className="user-name">John Doe</span>
          </div>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="main-container">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="sidebar-header">
            <h2 className="logo">Dashboard</h2>
            <button 
              className="collapse-btn"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              {sidebarCollapsed ? '→' : '←'}
            </button>
          </div>
          
          <nav className="sidebar-nav">
            <ul>
              <li className="nav-item active">
                <span className="nav-icon">🏠</span>
                {!sidebarCollapsed && <span className="nav-text">Home</span>}
              </li>
              <li className="nav-item">
                <span className="nav-icon">📊</span>
                {!sidebarCollapsed && <span className="nav-text">Analytics</span>}
              </li>
              <li className="nav-item">
                <span className="nav-icon">👥</span>
                {!sidebarCollapsed && <span className="nav-text">Users</span>}
              </li>
              <li className="nav-item">
                <span className="nav-icon">⚙️</span>
                {!sidebarCollapsed && <span className="nav-text">Settings</span>}
              </li>
              <li className="nav-item">
                <span className="nav-icon">📁</span>
                {!sidebarCollapsed && <span className="nav-text">Files</span>}
              </li>
            </ul>
          </nav>
        </aside>

        {/* Page Content */}
        <main className="page-content">
          <div className="content-grid">
            <div className="card">
              <h3>Total Users</h3>
              <p className="card-number">1,234</p>
              <span className="card-change positive">+12%</span>
            </div>
            <div className="card">
              <h3>Revenue</h3>
              <p className="card-number">$45,678</p>
              <span className="card-change positive">+8%</span>
            </div>
            <div className="card">
              <h3>Orders</h3>
              <p className="card-number">567</p>
              <span className="card-change negative">-3%</span>
            </div>
            <div className="card">
              <h3>Growth</h3>
              <p className="card-number">23.5%</p>
              <span className="card-change positive">+15%</span>
            </div>
          </div>
          
          <div className="content-section">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <span className="activity-icon">📝</span>
                <div className="activity-content">
                  <p>New user registration</p>
                  <small>2 minutes ago</small>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">💰</span>
                <div className="activity-content">
                  <p>Payment received</p>
                  <small>15 minutes ago</small>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">📊</span>
                <div className="activity-content">
                  <p>Report generated</p>
                  <small>1 hour ago</small>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
