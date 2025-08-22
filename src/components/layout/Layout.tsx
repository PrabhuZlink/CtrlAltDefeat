import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './Layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="main-container">
        <Sidebar 
          collapsed={sidebarCollapsed} 
          onToggle={handleSidebarToggle} 
        />
        <div className="content-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
