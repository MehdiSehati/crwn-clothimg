import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './user/user.reducer';
import cartReduser from './cart/cart.reducer';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer =combineReducers ({
    user: userReducer,
    cart :cartReduser
}); 


export default persistReducer(persistConfig, rootReducer)