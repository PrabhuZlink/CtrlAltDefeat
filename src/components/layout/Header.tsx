import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-text">zLink</span>
        </div>
      </div>
      
      <div className="header-center">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
          <button className="search-btn">
            🔍
          </button>
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
          <span className="user-name">User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
