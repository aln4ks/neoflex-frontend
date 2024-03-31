import React from 'react';
import { HEADPHONES, WIRELESS } from '../../products'
import { Product } from './product';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './shop.css'
import { Helmet } from 'react-helmet';



export const Shop = () => {
    return (        
        <div className='shop'>
            <Helmet>
                <title>QPick</title>
            </Helmet>
            <ToastContainer />
            <div className="shopTitle">
                <h1>Наушники</h1>
            </div>
            <div className="products">
                {" "}
                {HEADPHONES.map((product) => (
                <Product data = {product} />
            ))}
            </div>

            <div className="shopTitle">
                <h1>Беспроводные наушники</h1>
            </div>
            <div className="products">
                {" "}
                {WIRELESS.map((product) => (
                <Product data = {product} />
            ))}
            </div>
        </div>
    );
};