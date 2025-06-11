import React from 'react';

const MoneyItem = ({ item, onClick }) => {
    const isBanknote = item.value >= 500;
    const baseSize = isBanknote ? 200 : 100; // Base size in pixels
    const scaledSize = baseSize * item.ratio;

    return (
        <div
            onClick={() => onClick(item)}
            style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
            //     alignItems: 'center',
                gap: '8px',
            //     transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
            <img
                src={item.image}
                alt={item.name}
                style={{
                    width: scaledSize,
                    // objectFit: 'contain'
                }}
            />
        </div>
    );
};

export default MoneyItem;