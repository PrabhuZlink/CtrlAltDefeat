# CtrlAltDefeat Dashboard

A modern, responsive dashboard application built with React, TypeScript, and SASS.

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── layout/          # Layout components (Header, Sidebar, Layout)
│   ├── dashboard/       # Dashboard-specific components
│   ├── ui/             # Reusable UI components (Button, Card)
│   └── index.ts        # Component exports
├── styles/              # Global styles and themes
├── types/               # TypeScript type definitions
├── utils/               # Utility functions and constants
├── App.tsx             # Main application component
└── index.tsx           # Application entry point
```

## 🧩 Component Architecture

### Layout Components
- **Layout**: Main layout wrapper with header, sidebar, and content area
- **Header**: Top navigation bar with search, notifications, and user menu
- **Sidebar**: Collapsible navigation sidebar with menu items

### Dashboard Components
- **Dashboard**: Main dashboard container
- **TitleArea**: Task title and metadata display
- **ActionButtons**: Status and action buttons row
- **TaskLayout**: Three-panel task management interface

### UI Components
- **Button**: Reusable button component with multiple variants
- **Card**: Container component with padding and shadow options

## 🎨 Styling

- **SASS/SCSS**: Advanced CSS preprocessing
- **Component-scoped styles**: Each component has its own SCSS file
- **Responsive design**: Mobile-first approach with breakpoint utilities
- **CSS Grid & Flexbox**: Modern layout techniques

## 🚀 Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Collapsible Sidebar**: Space-efficient navigation
- **Task Management**: Comprehensive task tracking interface
- **Modern UI**: Clean, professional design with smooth animations
- **TypeScript**: Full type safety and better development experience

## 🛠️ Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm start
```

### Build
```bash
npm run build
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Component Usage Examples

### Using the Button Component
```tsx
import { Button } from './components';

<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

### Using the Card Component
```tsx
import { Card } from './components';

<Card padding="lg" shadow="lg">
  <h2>Card Content</h2>
  <p>This is a card with large padding and shadow.</p>
</Card>
```

## 🔧 Customization

### Colors
Colors are defined in `src/utils/constants.ts` and can be easily modified.

### Breakpoints
Responsive breakpoints are defined in the constants file and used throughout the application.

### Component Props
All components use TypeScript interfaces for props, making them easy to extend and customize.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).