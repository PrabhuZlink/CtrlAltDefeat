import React from 'react';
import Card from './Card';
import Button from './Button';

const TestComponent: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Test Component</h2>
      <Card padding="md" shadow="md">
        <h3>Test Card</h3>
        <p>This is a test card to verify the Card component is working.</p>
        <Button variant="primary" size="md">
          Test Button
        </Button>
      </Card>
    </div>
  );
};

export default TestComponent;
