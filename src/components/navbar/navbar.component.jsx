import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navbar.component.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

export default function Navbar() {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrownLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
};
