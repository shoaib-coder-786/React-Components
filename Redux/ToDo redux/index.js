import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import Store from './ToDo redux/Reducer/Store'
import Main from './ToDo redux/Main';

// persistant reducer 
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from './ToDo redux/Reducer/Store'


ReactDOM.render(
    <>
   <Provider store={Store}>

    <PersistGate persistor={persistor}>
            <Main/>
    </PersistGate>
    
    </Provider>

    </>
    ,document.getElementById('root')
);