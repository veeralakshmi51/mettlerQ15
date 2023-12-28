import React, { useEffect, useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaSpellCheck,
    FaUserShield
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './sidebar.css'
import Header from '../header';
interface SidebarProps {
    children: any
}

const Sidebar = (props: SidebarProps) => {
    const { children } = props
    const [isOpen, setIsOpen] = useState(window.innerWidth > 768); // Set initial state based on screen width

    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/organizationDetails",
            name: "Organization Details",
            icon: <FaTh />
        },
        {
            path: "/access-Control",
            name: "Access Control",
            icon: <FaUserAlt />
        },
        {
            path: "/q15-staff-configuration",
            name: "Q15 Staff Configuration",
            icon: <FaSpellCheck />
        },
        {
            path: "/q15-patient-check",
            name: "Q-15 Patient Check",
            icon: <FaUserShield />
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsOpen(window.innerWidth > 1068);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="container1">
            <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">M H C</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link">
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <div className='w-100' style={{ marginLeft: isOpen ? "300px" : "50px", marginTop: 0, overflowY: "auto" }}>
            <Header />
            {children}
            </div>
        </div>
    );
};

export default Sidebar;