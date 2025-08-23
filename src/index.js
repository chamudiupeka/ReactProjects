import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from '../src/components/App';

const web1 = ReactDOM.createRoot(document.getElementById('root'));
web1.render(
  <div>
    <div className="main-content">
      <App />
    </div>
  </div>
);
