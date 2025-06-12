import React from 'react';
import { useDispatch } from 'react-redux';
import { addMoney } from '../store/gameSlice';
import MoneyItem from './MoneyItem';
import s from './Banknotes.module.css';

const banknotes = [
    { value: 50000, name: '500€', image: '/img/500e.png', ratio: 1.0 },
    { value: 20000, name: '200€', image: '/img/200e.png', ratio: 0.956 },
    { value: 10000, name: '100€', image: '/img/100e.png', ratio: 0.919 },
    { value: 5000, name: '50€', image: '/img/50e.png', ratio: 0.875 },
    { value: 2000, name: '20€', image: '/img/20e.png', ratio: 0.831 },
    { value: 1000, name: '10€', image: '/img/10e.png', ratio: 0.794 },
    { value: 500, name: '5€', image: '/img/5e.png', ratio: 0.75 }
].sort((a, b) => b.value - a.value);

const coins = [
    { value: 200, name: '2€', image: '/img/2e.png', ratio: 1.0 },
    { value: 100, name: '1€', image: '/img/1e.png', ratio: 0.903 },
    { value: 50, name: '50¢', image: '/img/50.png', ratio: 0.942 },
    { value: 20, name: '20¢', image: '/img/20.png', ratio: 0.864 },
    { value: 10, name: '10¢', image: '/img/10.png', ratio: 0.767 },
    { value: 5, name: '5¢', image: '/img/5.png', ratio: 0.825 },
    { value: 2, name: '2¢', image: '/img/2.png', ratio: 0.728 },
    { value: 1, name: '1¢', image: '/img/1.png', ratio: 0.631 }
].sort((a, b) => b.value - a.value);

const Banknotes = () => {
    const dispatch = useDispatch();

    const handleMoneyClick = (item) => {
        dispatch(addMoney(item));
    };

    return (
        <>
            <div className={s.bnFlex}>
                {banknotes.map((banknote) => (
                    <MoneyItem key={banknote.value} item={banknote} onClick={handleMoneyClick} />
                ))}
            </div>
            <div className={s.coinGrid}>
                {coins.map((coin) => (
                    <MoneyItem key={coin.value} item={coin} onClick={handleMoneyClick} />
                ))}
            </div>
        </>
    );
};

export default Banknotes;
