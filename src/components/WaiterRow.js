import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const WaiterRow = ({ waiter, onDelete, onEdit }) => {
  const navigate = useNavigate(); 

  const handleEditClick = () => {
    onEdit(waiter);
  };

  const handleDeleteClick = () => {
    onDelete(waiter.id);
  };

  const handleViewClick = () => {
    navigate(`/waiters/${waiter.id}`); 
  };

  return (
    <div className="waiter-row">
      <span className="icon-square"></span>
      <span>{waiter.fullName}</span>
      <span>{waiter.email}</span>
      <span>{waiter.phoneNumber}</span>
      <span>{waiter.role}</span>
      <span>{waiter.salary}</span>
      <span>{waiter.dob}</span>
      <span>{waiter.shiftStart}</span>
      <span>{waiter.shiftEnd}</span>
      <span className="actions">
      <button className="view-button" onClick={handleViewClick}>👁️</button>
        <button className="edit-button" onClick={handleEditClick}>✏️</button>
        <button className="delete-button" onClick={handleDeleteClick}>🗑️</button>
      </span>
    </div>
  );
};

export default WaiterRow;
