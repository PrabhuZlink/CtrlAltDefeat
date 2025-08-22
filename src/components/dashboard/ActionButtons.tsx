import React from 'react';
import { TASK_STATUSES } from '../../utils/constants';
import './ActionButtons.scss';

interface ActionButtonsProps {
  onStatusChange?: (status: string) => void;
  onDueDateChange?: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onStatusChange,
  onDueDateChange
}) => {
  const handleStatusClick = (status: string) => {
    onStatusChange?.(status);
  };

  return (
    <div className="action-buttons-row">
      <button 
        className="action-btn status-btn in-progress"
        onClick={() => handleStatusClick('in-progress')}
      >
        <span className="btn-icon">🔄</span>
        <span className="btn-text">IN PROGRESS</span>
      </button>
      
      <button 
        className="action-btn status-btn plugging"
        onClick={() => handleStatusClick('plugging')}
      >
        <span className="btn-icon">🔌</span>
        <span className="btn-text">Plugging</span>
      </button>
      
      <button 
        className="action-btn status-btn red-flag"
        onClick={() => handleStatusClick('red-flag')}
      >
        <span className="btn-icon">🚩</span>
        <span className="btn-text">Red Flag</span>
      </button>
      
      <button 
        className="action-btn due-date-btn"
        onClick={onDueDateChange}
      >
        <span className="btn-icon">📅</span>
        <span className="btn-text">Due: 15 Dec 2024</span>
      </button>
    </div>
  );
};

export default ActionButtons;
