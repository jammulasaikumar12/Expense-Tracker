import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global} from './context/globalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Global> 
      <App />
    </Global>
  </React.StrictMode>
);

