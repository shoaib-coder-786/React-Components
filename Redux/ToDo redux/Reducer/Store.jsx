import {createStore} from 'redux';
import RootReducer from './index';

// to make peristant in redux 
import { persistStore, persistReducer } from 'redux-persist';
import  storage  from 'redux-persist/lib/storage';

const persistConfig = {
    key : 'root' ,
    storage,
};

const persistedReducer = persistReducer(persistConfig,RootReducer);

const store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store);

export default store;