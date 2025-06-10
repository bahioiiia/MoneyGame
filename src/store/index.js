import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';

export const store = configureStore({
    reducer: {
        game: gameReducer
    }
});

// Видаляємо типи, залишаючи лише звичайний експортування
export const getRootState = () => store.getState();
export const getAppDispatch = () => store.dispatch;

