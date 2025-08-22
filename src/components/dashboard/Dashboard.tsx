import React from 'react';
import TitleArea from './TitleArea';
import ActionButtons from './ActionButtons';
import TaskLayout from './TaskLayout';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  const handleStatusChange = (status: string) => {
    console.log('Status changed to:', status);
    // Handle status change logic here
  };

  const handleDueDateChange = () => {
    console.log('Due date change requested');
    // Handle due date change logic here
  };

  return (
    <div className="dashboard-content">
      <TitleArea 
        title="Loose electrical wires near park"
        taskId="SR-243"
        status="IN PROGRESS"
        dueDate="6 Jan 2025"
        requestedBy="Gerald S Smith + 4 Others"
      />
      
      <ActionButtons 
        onStatusChange={handleStatusChange}
        onDueDateChange={handleDueDateChange}
      />
      
      <div className="page-content">
        <TaskLayout />
      </div>
    </div>
  );
};

export default Dashboard;
