import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReduser from './cart/cart.reducer';
export default combineReducers ({

    user: userReducer,
    cart :cartReduser
});