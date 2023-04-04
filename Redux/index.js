import React from 'react'
import ReactDOM from 'react-dom'
import App from './API/Redux/App';

import {Provider} from "react-redux"
import store from './API/Redux/Store3';

ReactDOM.render(
    <>
   <Provider store={store}>
    <App/>
    </Provider>

    </>
    ,document.getElementById('root')
);