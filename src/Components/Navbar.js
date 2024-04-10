import React from 'react';

import { Button } from "antd";

import LOGO from '../Assets/nav_logo_1 1.png'

export default function NavBar() {
    return (
        <nav className='NavBar'>
            <img src={LOGO} style={{ height: '30px', backgroundSize: 'cover' }}></img>
            <div className='NavlinkContainer'>
                <ul className='NavlinkList'>
                    <li className='Navlink'>Home</li>
                    <li className='Navlink'>Flight Status</li>
                    <li className='Navlink'>Feedback</li>
                </ul>
                <Button className='LoginBtn' type="primary">LOGIN</Button>
            </div>
        </nav>
    )
}
