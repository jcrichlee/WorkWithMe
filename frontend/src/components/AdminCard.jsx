import React from 'react';

const AdminCard = ({ title, value }) => {
  return (
    <div className="bg-blue-100 p-6 rounded shadow text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl">{value}</p>
    </div>
  );
};

export default AdminCard;
