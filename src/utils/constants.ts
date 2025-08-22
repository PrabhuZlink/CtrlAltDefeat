// Navigation constants
export const NAV_ITEMS = [
  {
    id: 'menu',
    label: 'Menu',
    icon: '☰',
    path: '/menu',
    isActive: true
  },
  {
    id: 'add-new',
    label: 'Add New',
    icon: '+',
    path: '/add-new',
    isActive: false
  },
  {
    id: 'create-document',
    label: 'Create Document',
    icon: '📄',
    path: '/create-document',
    isActive: false
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: '⚙️',
    path: '/settings',
    isActive: false
  }
];

// Task status constants
export const TASK_STATUSES = {
  'in-progress': {
    label: 'IN PROGRESS',
    color: '#d97706',
    bgColor: '#fef3c7',
    borderColor: '#f59e0b'
  },
  'plugging': {
    label: 'Plugging',
    color: '#2563eb',
    bgColor: '#dbeafe',
    borderColor: '#3b82f6'
  },
  'red-flag': {
    label: 'Red Flag',
    color: '#dc2626',
    bgColor: '#fee2e2',
    borderColor: '#ef4444'
  }
};

// Colors
export const COLORS = {
  primary: '#3b82f6',
  secondary: '#6b7280',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#3b82f6',
  light: '#f8fafc',
  dark: '#1a202c',
  white: '#ffffff',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827'
  }
};

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};
