import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'





ReactDOM.render(<AlertProvider template={AlertTemplate}><App /></AlertProvider>, document.getElementById('root'));
