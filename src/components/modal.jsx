import React from 'react';
import './modal.css';
import { X } from 'phosphor-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const notify = () => toast.info('В данный момент оплата невозможна', {
    position: "bottom-right",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

const Modal = ({active, setActive, totalAmount, }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modalContent active" : "modalContent"} onClick={e => e.stopPropagation()}>
            <h1>К оплате: {totalAmount} ₽ </h1>
            <div className="inputs">
                <input type="text" name='name' placeholder='ФИО'/>

                <input type="tel" name='number' placeholder='Номер телефона'/>

                <input type="text" name='adress' placeholder='Адрес доставки'/>
                <div className="close" onClick={() => setActive(false)}>
                <X size={20} />
                </div>
            </div>
            <button  onClick={() => {notify();setActive(false)}}>Перейти к оплате</button>
            </div>
        </div>
    );
};

export default Modal;
