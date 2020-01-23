import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { unregister } from './registerServiceWorker';
import './styles/index.css';

window.renderLink = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  unregister();
};

window.unmountLink = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
