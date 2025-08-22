// User related types
export interface User {
  id: string;
  name: string;
  avatar?: string;
  email?: string;
}

// Task related types
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  dueDate?: string;
  assignedUsers: User[];
  observers: User[];
  tags: string[];
  priority: Priority;
  createdAt: string;
  updatedAt: string;
}

export type TaskStatus = 'in-progress' | 'plugging' | 'red-flag' | 'completed' | 'pending';
export type Priority = 'low' | 'medium' | 'high' | 'urgent';

// Activity related types
export interface Activity {
  id: string;
  type: ActivityType;
  user: User;
  timestamp: string;
  content: string;
  metadata?: Record<string, any>;
}

export type ActivityType = 'comment' | 'status-change' | 'assignment' | 'creation' | 'update';

// Navigation types
export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path?: string;
  isActive?: boolean;
}

// UI Component Props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg';
}
