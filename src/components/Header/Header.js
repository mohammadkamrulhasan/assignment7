import React from 'react';
import logo from '../../image/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav><a href="/Player">Player</a>
            <a href="/BuiltTeam"> Select Player</a>
            <a href="/manage">Manage Team</a>
            </nav>
        </div>
    );
};

export default Header;