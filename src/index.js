import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';


import { ProductProvider } from './components/ContextApi';

ReactDOM.render(
  <ProductProvider>
    <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>
  </ProductProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();