import React, { useState, useEffect } from 'react';
import './AddWaiterForm.css';

const AddWaiterForm = ({ isVisible, onClose, addWaiter, formState, setFormState }) => {
    const [localFormState, setLocalFormState] = useState(formState);

    useEffect(() => {
        setLocalFormState(formState);
    }, [formState]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalFormState({
            ...localFormState,
            [name]: value
        });
        setFormState({
            ...localFormState,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addWaiter(localFormState);
        onClose();
    };

    return (
        <div className={`form-popup ${isVisible ? 'show' : ''}`}>
            <form className="form-container" onSubmit={handleSubmit}>
                <h2>{localFormState.id ? 'Edit Waiter' : 'Add Waiter'}</h2>
                <div className="form-group">
                    <label htmlFor="fullName">
                        <span>Full Name</span>
                        <input type="text" placeholder="Enter Full Name" name="fullName" value={localFormState.fullName || ''} onChange={handleChange} required />
                    </label>
                    <label htmlFor="email">
                        <span>Email</span>
                        <input type="email" placeholder="Enter Email" name="email" value={localFormState.email || ''} onChange={handleChange} required />
                    </label>
                    <label htmlFor="role">
                        <span>Role</span>
                        <input type="text" placeholder="Enter Role" name="role" value={localFormState.role || ''} onChange={handleChange} required />
                    </label>
                    <label htmlFor="phoneNumber">
                        <span>Phone Number</span>
                        <input type="text" placeholder="Enter Phone Number" name="phoneNumber" value={localFormState.phoneNumber || ''} onChange={handleChange} required />
                    </label>
                    <label htmlFor="salary">
                        <span>Salary</span>
                        <input type="text" placeholder="Enter Salary" name="salary" value={localFormState.salary || ''} onChange={handleChange} required />
                    </label>
                    <label htmlFor="dob">
                        <span>Date of Birth</span>
                        <input type="date" name="dob" value={localFormState.dob || ''} onChange={handleChange} required />
                    </label>
                    <label htmlFor="shiftStart">
                        <span>Shift Start Timing</span>
                        <input type="time" name="shiftStart" value={localFormState.shiftStart || ''} onChange={handleChange} required />
                    </label>
                    <label htmlFor="shiftEnd">
                        <span>Shift End Timing</span>
                        <input type="time" name="shiftEnd" value={localFormState.shiftEnd || ''} onChange={handleChange} required />
                    </label>
                    <label htmlFor="address">
                        <span>Address</span>
                        <input type="text" placeholder="Enter Address" name="address" value={localFormState.address || ''} onChange={handleChange} required />
                    </label>
                    <label htmlFor="additionalDetails">
                        <span>Additional Details</span>
                        <input type="text" placeholder="Enter Additional Details" name="additionalDetails" value={localFormState.additionalDetails || ''} onChange={handleChange} />
                    </label>
                </div>
                <div className="btn-container">
                    <button type="submit" className="btn">Confirm</button>
                    <button type="button" className="btn cancel" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddWaiterForm;
