import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//scss
import './styles/scss/style.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppProviders from './context/AppProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store} >
    <AppProviders>
      <App />
    </AppProviders>
  </Provider>
  // </React.StrictMode>,
)
