import React from 'react';
import './WaiterList.css';
import WaiterRow from './WaiterRow';

const WaiterList = ({ waiters, onDelete, onEdit }) => {
    return (
        <div className="waiter-list">
            <div className="waiter-list-header">
            <span className="icon-square">ID</span>
                <span>Name</span>
                <span>Email</span>
                <span>Phone Number</span>
                <span>Role</span>
                <span>Salary</span>
                <span>Date of Birth</span>
                <span>Shift Start</span>
                <span>Shift End</span>
                <span>Actions</span>
            </div>
            {waiters.map((waiter) => (
                <WaiterRow
                    key={waiter.id}
                    waiter={waiter}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
};

export default WaiterList;
