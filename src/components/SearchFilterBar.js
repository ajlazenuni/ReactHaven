import React from 'react';
import './SearchFilterBar.css';

const SearchFilterBar = ({ searchTerm, onSearchChange, filterType, onFilterChange }) => {
    const handleSearchChange = (e) => {
        onSearchChange(e.target.value);
    };

    const handleFilterChange = (e) => {
        onFilterChange(e.target.value);
    };

    return (
        <div className="search-filter-bar">
            <input
                type="text"
                placeholder="Search Waiter"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />
            <select value={filterType} onChange={handleFilterChange} className="filter-select">
                <option value="name">Filter by Name</option>
                <option value="salary">Filter by Salary</option>
            </select>
        </div>
    );
};

export default SearchFilterBar;
