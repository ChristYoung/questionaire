import { configureStore } from '@reduxjs/toolkit';
import qstInfoReducer from './componentsReducer/index';

export default configureStore({
    reducer: {
        qstInfo: qstInfoReducer,
    },
});
