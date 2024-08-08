import React, { useState } from 'react';
import dashboardIcon from '../assets/dashboard.png';
import icon from '../assets/icon.png';
import logout from '../assets/logout.png';
import './Sidebar.css';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('Waiters');

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className="sidebar">
            <h2>POS</h2>
            <ul>
                <li className={activeItem === 'Dashboard' ? 'active' : ''} onClick={() => handleItemClick('Dashboard')}>
                <img src={dashboardIcon} alt="Dashboard" className="icon" />
                    Dashboard
                </li>
               
                <li className={activeItem === 'Waiters' ? 'active' : ''} onClick={() => handleItemClick('Waiters')}>
                <img src={icon} alt="Waiters" className="icon" />
                    Waiters
                    </li>
                <li className={activeItem === 'Orders' ? 'active' : ''} onClick={() => handleItemClick('Orders')}>
                <img src={icon} alt="Waiters" className="icon" />
                    Orders
                    </li>
                <li className={activeItem === 'Customers' ? 'active' : ''} onClick={() => handleItemClick('Customers')}>
                <img src={icon} alt="Waiters" className="icon" />
                    Customers
                    </li>
                <li className={activeItem === 'Sales Tracking' ? 'active' : ''} onClick={() => handleItemClick('Sales Tracking')}>
                <img src={icon} alt="Waiters" className="icon" />
                    Sales Tracking
                    </li>
                <li className={activeItem === 'Discrepancy Management' ? 'active' : ''} onClick={() => handleItemClick('Discrepancy Management')}>
                <img src={icon} alt="Waiters" className="icon" />
                    Discrepancy Management
                    </li>
                <li className={activeItem === 'Reservation' ? 'active' : ''} onClick={() => handleItemClick('Reservation')}>
                <img src={icon} alt="Waiters" className="icon" />
                    Reservation
                    </li>
                <li className={activeItem === 'Stock Management' ? 'active' : ''} onClick={() => handleItemClick('Stock Management')}>
                <img src={icon} alt="Waiters" className="icon" />
                    Stock Management
                    </li>
                <li className={activeItem === 'Logout' ? 'active' : ''} onClick={() => handleItemClick('Logout')}>
                <img src={logout} alt="Waiters" className="icon" />
                    Logout</li>
            </ul>
        </div>
    );
};

export default Sidebar;
