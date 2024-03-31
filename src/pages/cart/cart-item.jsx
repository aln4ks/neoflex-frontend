import React, {useContext} from 'react';
import { ShopContext } from '../../context/shop-context';
import { Plus } from 'phosphor-react';
import { Minus } from 'phosphor-react';
import { Trash } from 'phosphor-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartItem = (props) => {
    const { id, title, price, img } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount, clearCart, getTotalAmountForItem } = useContext(ShopContext);

    const notify = () => toast.error('Товар удалён из корзины!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const notify1 = () => toast.success('Товар добавлен в корзину!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    return <div className="cartCard">
        <img src={img} alt={img} />
        <div className="cartDescription">
        <div className='cartCardTitle'>
                <h1>{title}</h1>
        </div>
        <div className='cartPrice'>
            <h2>{price} ₽</h2>
        </div>

        <div className="totalPrice">
            <p>{getTotalAmountForItem(id)} ₽</p>
        </div>

        <div className="countHandler">
            <button onClick={() => {notify(); removeFromCart(id)}}><Minus size={20} /></button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
            <button onClick={() => {notify1(); addToCart(id)}}><Plus size={20} /></button>
        </div>
        </div>
        <div className="delete" onClick={() => {notify(); clearCart(id)}}>
        <Trash size={20} />
        </div>
    </div>    
}
