import React, { useState, useRef, useEffect } from 'react';
// import { BiChevronDown } from 'react-icons/bi';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='container-fluid'>
            <div className='row align-items-center justify-content-between'>
                <div className='col-6'>
                    <div className="header-left">
                        <h2 className="header-title mb-0">Dashboard</h2>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="header-right d-flex align-items-center justify-content-end">

                        <div className="profile-container dropdown-toggle" ref={dropdownRef} onClick={toggleDropdown}>
                            <img
                                src="./assets/images/avtar.png"
                                alt="Profile"
                                className="img-fluid rounded-circle cursor-pointer"

                            />
                            <span className="ms-2">John Doe</span> {/* Profile Name */}

                            {showDropdown && (
                                <div className="dropdown-menu show position-absolute">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="/" className="dropdown-item">My Profile</a></li>
                                        <li><a href="/" className="dropdown-item">Settings</a></li>
                                        <li><a href="/" className="dropdown-item">Logout</a></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

                );
};

                export default Header;
