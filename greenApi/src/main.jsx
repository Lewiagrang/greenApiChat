import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from "./modules/App/App";
import LogIn from './modules/LogIn/Login';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const idInstance = localStorage.getItem('idInstance');
const apiTokenInstance = localStorage.getItem('apiTokenInstance');

root.render(
    <>
        {idInstance && apiTokenInstance ? <App /> : <LogIn />}
    </>
);
