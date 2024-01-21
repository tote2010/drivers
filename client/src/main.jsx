import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { store } from './redux/store/index.js';
import { Provider } from 'react-redux';
import App from './App.jsx';

// Del students: 
//import reportWebVitals from "./reportWebVitails";

 
//import './index.css';

// Importado por Codium ad hoc
// import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
