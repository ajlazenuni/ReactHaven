import React from 'react';
import AddWaiterButton from './AddWaiterButton';

const Header = () => {
    return (
        <div className='complete-header'>
        <div className="header">
            <h1>Waiters</h1>
            <div className="overview">
                <div>
                    <h2>Total Waiter</h2>
                    <p>25 Waiters</p>
                </div>
               
            </div>
           
        </div>
        <div className='button'>
            <AddWaiterButton></AddWaiterButton>
        </div>
        </div>

    );
};

export default Header;
