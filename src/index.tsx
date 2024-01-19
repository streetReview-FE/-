import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import store from './store/store';
import { Provider } from 'react-redux';
import {GoogleOAuthProvider} from '@react-oauth/google';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const clientId = process.env.REACT_APP_GOOGLE_ID_KEY;
root.render(
  <GoogleOAuthProvider clientId={clientId!}
    onScriptLoadError={() => console.log("fail")}
    onScriptLoadSuccess={() => console.log("success")}>
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>
);
serviceWorkerRegistration.register();
