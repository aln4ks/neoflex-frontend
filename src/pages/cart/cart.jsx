import React, { useContext, useState } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import './cart.css'
import Modal from '../../components/modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

export const Cart = () => {
    const { cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const [modalActive, setModalActive] = useState(false);

    return <div className='cart'>
            <Helmet>
                <title>Корзина</title>
            </Helmet>
            <ToastContainer />
        <div className='cartTitle'>
            <h1>Корзина</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product} />;
                } else {
                    return null;
                }
            })}
        </div>
        <div className="checkout">
            <div className="checkoutInfo">
                <p>ИТОГО</p>
                <p>₽ {totalAmount}</p>
            </div>
            <button className='checkoutBtn' onClick={() => setModalActive(true)}>Перейти к оформлению</button>
        </div>

        <Modal active={modalActive} setActive={setModalActive} totalAmount={totalAmount}>
        </Modal>
    </div>
}