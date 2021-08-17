import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store , persistorStore} from './redux/store'




ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<h1>Loading...</h1>} persistor={persistorStore}>
    <App />
    </PersistGate>
    </Provider>,
  document.getElementById('root')
);
