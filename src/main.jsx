import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Home from './components/Home/Home.jsx';
import AddProducts from './components/AddProducts';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import Registration from './components/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : ()=> fetch('./public/brand.json')
      },
      {
        path : '/addproducts',
        element : <AddProducts></AddProducts>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Registration></Registration> 
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
