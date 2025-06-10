import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetGame } from '../store/gameSlice';
import s from './MainPanel.module.css';

const MainPanel = () => {
    const dispatch = useDispatch();
    const { targetAmount, currentAmount } = useSelector(state => state.game);

    const handleReset = () => {
        dispatch(resetGame());
    };

    return (
        <>
        <div>
            <h2 className={s.right}>{targetAmount / 100}€</h2>
            <h2 className={s.right}>{currentAmount / 100}€</h2>
        </div>
        <div>
            <button onClick={handleReset} className={s.btnDonate}>
                Restart<br/>Game
            </button>
        </div>
        <div></div>
        </>
    );
};

export default MainPanel;