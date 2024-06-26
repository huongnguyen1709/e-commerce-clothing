import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';

import { UserProvider } from './contexts/UserContext';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { CartProvider } from './contexts/CartContext';

import { stripePromise } from './utils/stripe/stripe.utils';

import './index.scss';

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <Elements stripe={stripePromise}>
            <RouterProvider router={router} />
          </Elements>
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
