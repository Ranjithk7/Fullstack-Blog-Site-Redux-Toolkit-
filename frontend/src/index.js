import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { Provider } from 'react-redux';
import store from './store';

const firebaseConfig = {
  apiKey: "AIzaSyBuufYcpoED9W5lphI3qyYOo6EVY9bx6dA",
  authDomain: "my-react-blog-fa63d.firebaseapp.com",
  projectId: "my-react-blog-fa63d",
  storageBucket: "my-react-blog-fa63d.appspot.com",
  messagingSenderId: "638079806978",
  appId: "1:638079806978:web:f60199af82b8e599ea811b"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

