import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './WaiterDetails.css';

const WaiterDetails = ({ waiters }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const waiter = waiters.find(waiter => waiter.id === parseInt(id));

    if (!waiter) {
        return <div>Waiter not found</div>;
    }

    return (
        <div className="waiter-details-page">
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            <div className="waiter-personal-details">
                <div className="profile-picture">
                    <img src={waiter.profilePicture} alt={`${waiter.fullName}`} />
                </div>
                <div className="details">
                    <h2>Waiters Personal Details</h2>
                    <p><strong>Full Name:</strong> {waiter.fullName}</p>
                    <p><strong>Email:</strong> {waiter.email}</p>
                    <p><strong>Phone number:</strong> {waiter.phoneNumber}</p>
                    <p><strong>Date of birth:</strong> {waiter.dob}</p>
                    <p><strong>Address:</strong> {waiter.address}</p>
                </div>
            </div>
            <div className="waiter-job-details">
                <h2>Waiter Job Details</h2>
                <p><strong>Role:</strong> {waiter.role}</p>
                <p><strong>Salary:</strong> {waiter.salary}</p>
                <p><strong>Shift start timing:</strong> {waiter.shiftStart}</p>
                <p><strong>Shift end timing:</strong> {waiter.shiftEnd}</p>
            </div>
            <div className="performance-metrics">
                <h2>Performance Metrics</h2>
                <p>50 Orders</p>
                {/* Add your chart component here */}
            </div>
        </div>
    );
};

export default WaiterDetails;
