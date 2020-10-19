import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistGate } from 'redux-persist/integration/react';
import { store,persistor} from './Redux/store';

ReactDOM.render(

  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <persistGate persistor={persistor}>
      <App />
    </persistGate>
  </React.StrictMode>

  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

