import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Dashboard: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="dashboard">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Dashboard;