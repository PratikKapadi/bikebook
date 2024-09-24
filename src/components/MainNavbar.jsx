import React from 'react';
import {Link} from 'react-router-dom'

const MainNavbar = () => {
    return (
        <div>
            
            <nav className='navbar navbar-expand-lg bg-dark' data-bs-theme="dark">
                                <ul className='navbar-nav'>
                        <li className='nav-item ms-5'>
                            <Link className='nav-link' to="/bike/S1 X" id='l1'>Bikes</Link>
                        </li>
                        <li className='nav-item ms-3'>
                            <Link className='nav-link' to="/" id='l1'>Scooters</Link>

                        </li>
                        <li className='nav-item ms-3'>
                            <Link className='nav-link' to="/" id='l1'>Electric Rides</Link>

                        </li>
                        <li className='nav-item ms-3'>
                            <Link className='nav-link' to="/" id='l1'>Bike Comparison</Link>

                        </li>
                        <li className='nav-item ms-3'>
                            <Link className='nav-link' to="/" id='l1'>Our Choices</Link>
                        </li>
                    </ul>
                    
                </nav>
                
            
        </div>
       
    );
}

export default MainNavbar;
