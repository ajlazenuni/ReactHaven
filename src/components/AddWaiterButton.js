import React from 'react';
import './AddWaiterButton.css';

const AddWaiterButton = ({ onClick }) => {
    return (
        <button className="add-waiter-button" onClick={onClick}>
            Add waiter
        </button>
    );
};

export default AddWaiterButton;
