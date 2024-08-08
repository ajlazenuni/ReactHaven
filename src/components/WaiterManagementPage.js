import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Updated imports for React Router v6
import Sidebar from './Sidebar';
import WaiterList from './WaiterList';
import AddWaiterForm from './AddWaiterForm';
import AddWaiterButton from './AddWaiterButton';
import SearchFilterBar from './SearchFilterBar';
import WaiterDetails from './WaiterDetails'; 
import './WaiterManagementPage.css';

const initialFormState = {
    id: null,
    fullName: '',
    email: '',
    role: '',
    phoneNumber: '',
    salary: '',
    dob: '',
    shiftStart: '',
    shiftEnd: '',
    address: '',
    additionalDetails: ''
};

const WaiterManagementPage = () => {
    const [isFormVisible, setFormVisible] = useState(false);
    const [waiters, setWaiters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('name');
    const [formState, setFormState] = useState(initialFormState);

    const handleAddClick = () => {
        setFormState(initialFormState); 
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    const addWaiter = (waiter) => {
        if (waiter.id) {
            const updatedWaiters = waiters.map(w => (w.id === waiter.id ? waiter : w));
            setWaiters(updatedWaiters);
        } else {
            waiter.id = Date.now(); 
            setWaiters([...waiters, waiter]);
        }
        setFormVisible(false);
    };

    const deleteWaiter = (id) => {
        const newWaiters = waiters.filter(waiter => waiter.id !== id);
        setWaiters(newWaiters);
    };

    const editWaiter = (waiter) => {
        setFormState(waiter);
        setFormVisible(true);
    };

    const filteredWaiters = waiters.filter(waiter => {
        if (filterType === 'name') {
            return waiter.fullName.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (filterType === 'salary') {
            return waiter.salary.toString().includes(searchTerm);
        }
        return true;
    });

    return (
        <Router>
            <div className="waiter-management-page">
                <Sidebar />
                <div className="main-content">
                    <Routes> {}
                        <Route path="/" element={<Navigate to="/waiters" />} />
                        <Route exact path="/waiters" element={(
                            <div>
                                <div className="complete-header">
                                    <h1>Waiters</h1>
                                    <AddWaiterButton onClick={handleAddClick} />
                                </div>
                                <div className="total-count">
                                    Total Waiters: {filteredWaiters.length}
                                </div>
                                <SearchFilterBar 
                                    searchTerm={searchTerm} 
                                    onSearchChange={setSearchTerm} 
                                    filterType={filterType} 
                                    onFilterChange={setFilterType} 
                                />
                                <WaiterList waiters={filteredWaiters} onDelete={deleteWaiter} onEdit={editWaiter} />
                                <AddWaiterForm
                                    isVisible={isFormVisible}
                                    onClose={handleCloseForm}
                                    addWaiter={addWaiter}
                                    formState={formState}
                                    setFormState={setFormState}
                                />
                            </div>
                        )}/>
                        <Route path="/waiters/:id" element={<WaiterDetails waiters={waiters} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default WaiterManagementPage;
