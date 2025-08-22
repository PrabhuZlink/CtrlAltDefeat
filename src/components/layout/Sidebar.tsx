import React, { useState } from 'react';
import { NAV_ITEMS } from '../../utils/constants';
import './Sidebar.scss';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  const [navItems, setNavItems] = useState(NAV_ITEMS);

  const handleNavItemClick = (clickedId: string) => {
    setNavItems(prevItems => 
      prevItems.map(item => ({
        ...item,
        isActive: item.id === clickedId
      }))
    );
  };

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {!collapsed && <h2 className="logo">Menu</h2>}
        <button className="collapse-btn" onClick={onToggle}>
          {collapsed ? '→' : '←'}
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li 
              key={item.id} 
              className={`nav-item ${item.isActive ? 'active' : ''}`}
              onClick={() => handleNavItemClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {!collapsed && <span className="nav-text">{item.label}</span>}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
