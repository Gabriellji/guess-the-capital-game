import React from 'react';
import ReactDOM from 'react-dom';
import ApiProvider from './context/ApiProvider';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
