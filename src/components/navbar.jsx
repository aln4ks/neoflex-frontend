import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { HeartStraight } from 'phosphor-react';
import { ShopContext } from '../context/shop-context';
import './navbar.css';

export const Navbar = () => {
    const { getTotalCartItemAmount } = useContext(ShopContext);
    return <div className='navbar'>
        <Link to='/' className='title'>QPick</Link>
        <div className='links'>
            <Link className='icon-link'>
                <HeartStraight size={25} />
            </Link>
            <span className='favSpan'>0</span>
            <Link to='/cart' className='icon-link'>
                <ShoppingCart size={25} />
            </Link>
            <span className='cartSpan'>{getTotalCartItemAmount()}</span>
        </div>
    </div>
}