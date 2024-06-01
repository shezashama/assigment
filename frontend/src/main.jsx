import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { routes } from './Routers.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CartProvider } from './context/CartContext.jsx';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>

    <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
