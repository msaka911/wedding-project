import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { types, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'





ReactDOM.render(<AlertProvider type={types.SUCCESS}  position={positions.MIDDLE} template={AlertTemplate}><App /></AlertProvider>, document.getElementById('root'));
