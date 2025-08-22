import React from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import TestComponent from './components/ui/TestComponent';
import './App.scss';

const App: React.FC = () => {
  return (
    <Layout>
      <TestComponent />
      <Dashboard />
    </Layout>
  );
};

export default App;
