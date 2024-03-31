import React, { useContext } from 'react';
import { Star } from 'phosphor-react';
import { ShopContext } from '../../context/shop-context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Product = (props) => {
    const notify = () => toast.success('Товар добавлен в корзину!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const { id, title, price, sale, rate, img } = props.data;
    const { addToCart, cartItems, } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (
        
        
    <div className='card'>
        
        <img src={img} alt={img} />
        <div className="descriprion">
            <div className='title'>
                <h1>{title}</h1>
            </div>
            <div className='price'>
            <h2>{price} ₽</h2>
            <h3>{sale} ₽</h3>
            </div>
            <div className="rate">
            <Star size={20} />
            <h2>{rate}</h2>
            </div>
        </div>
        <button className='addToCartBtn' onClick={() => {notify(); addToCart(id)}}>
            Купить {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
    </div>
    )
}