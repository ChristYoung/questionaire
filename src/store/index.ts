import { configureStore } from '@reduxjs/toolkit';
import qstListReducer from './componentsReducer/index';

export default configureStore({
    reducer: {
        qstList: qstListReducer,
    },
});
