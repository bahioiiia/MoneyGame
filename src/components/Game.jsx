import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMoney, resetGame } from '../store/gameSlice';
import MoneyItem from './MoneyItem';

const banknotes = [
    { value: 50000, name: '500€', image: 'src/img/500e.png', ratio: 1.0 },
    { value: 20000, name: '200€', image: 'src/img/200e.png', ratio: 0.956 },
    { value: 10000, name: '100€', image: 'src//img/100e.png', ratio: 0.919 },
    { value: 5000, name: '50€', image: 'src//img/50e.png', ratio: 0.875 },
    { value: 2000, name: '20€', image: 'src//img/20e.png', ratio: 0.831 },
    { value: 1000, name: '10€', image: 'src//img/10e.png', ratio: 0.794 },
    { value: 500, name: '5€', image: 'src//img/5e.png', ratio: 0.75 }
].sort((a, b) => b.value - a.value);

const coins = [
    { value: 200, name: '2€', image: 'src//img/2e.png', ratio: 1.0 },
    { value: 100, name: '1€', image: 'src//img/1e.png', ratio: 0.903 },
    { value: 50, name: '50¢', image: 'src//img/50.png', ratio: 0.942 },
    { value: 20, name: '20¢', image: 'src//img/20.png', ratio: 0.864 },
    { value: 10, name: '10¢', image: 'src//img/10.png', ratio: 0.767 },
    { value: 5, name: '5¢', image: 'src//img/5.png', ratio: 0.825 },
    { value: 2, name: '2¢', image: 'src//img/2.png', ratio: 0.728 },
    { value: 1, name: '1¢', image: 'src//img/1.png', ratio: 0.631 }
].sort((a, b) => b.value - a.value);

const Game = () => {
    const dispatch = useDispatch();
    const { targetAmount, currentAmount, selectedBanknotes, selectedCoins } = useSelector(state => state.game);

    const handleMoneyClick = (item) => {
        dispatch(addMoney(item));
    };

    const handleReset = () => {
        dispatch(resetGame());
    };

    return (
        <div class='element'>
            <div style={{ padding: '20px', width: '100%', textAlign: 'center' }}>
                <h2>Ціль: {targetAmount / 100}€</h2>
                <h2>Поточна сума: {currentAmount / 100}€</h2>
                <button onClick={handleReset} style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
                    Скинути гру
                </button>
            </div>
            <div style={{ padding: '20px' }}>
                <h3>Виберіть банкноти:</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {banknotes.map((banknote) => (
                        <MoneyItem key={banknote.value} item={banknote} onClick={handleMoneyClick} />
                    ))}
                </div>
                <h3>Виберіть монети:</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {coins.map((coin) => (
                        <MoneyItem key={coin.value} item={coin} onClick={handleMoneyClick} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Game;