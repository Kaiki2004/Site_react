import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Exemplo from './Componentes/exemplo';
import Cadastro from './Componentes/Cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <Cadastro />
  </React.StrictMode> 
);

