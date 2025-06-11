import React from 'react';
import { useSelector } from 'react-redux';
import MoneyItem from './MoneyItem';
// import Test from './test';

const SelectedBanknotes = () => {
    const { selectedBanknotes, selectedCoins } = useSelector(state => state.game);

    const renderSelectedMoney = (items) => {
        return Object.entries(items)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([value, items]) => (
                <div key={value} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {items.map((item, index) => (
                        <MoneyItem key={index} item={item} onClick={() => {}} />
                    ))}
                </div>
            ));
    };

    return (
        <div style={{ padding: '20px' }}>
            {/* <Test/>  */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {renderSelectedMoney(selectedBanknotes)}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
                {renderSelectedMoney(selectedCoins)}
            </div>
        </div>
    );
};

export default SelectedBanknotes;