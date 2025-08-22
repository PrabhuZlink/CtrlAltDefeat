import React from 'react';
import Button from '../ui/Button';
import './TitleArea.scss';

interface TitleAreaProps {
  title: string;
  taskId?: string;
  status?: string;
  dueDate?: string;
  requestedBy?: string;
}

const TitleArea: React.FC<TitleAreaProps> = ({
  title,
  taskId,
  status,
  dueDate,
  requestedBy
}) => {
  return (
    <div className="title-area">
      <div className="title-left">
        <div className="task-header">
          {taskId && <div className="task-id">{taskId}</div>}
          <h1 className="page-title">{title}</h1>
          <div className="task-meta">
            {status && <span className="status in-progress">{status}</span>}
            {dueDate && <span className="due-date">Due: {dueDate}</span>}
            {requestedBy && <span className="requested-by">Requested by: {requestedBy}</span>}
          </div>
        </div>
      </div>
      <div className="title-right">
        <Button variant="secondary">Add new</Button>
        <Button variant="primary">Next action</Button>
      </div>
    </div>
  );
};

export default TitleArea;
