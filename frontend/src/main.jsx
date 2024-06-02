import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { routes } from './Routers.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';


const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <CartProvider>

    <RouterProvider router={router} />
    </CartProvider>
    </UserProvider>
  </React.StrictMode>,
)
