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
import SingleBrand from './components/SingleBrand';
import DetailsById from './components/DetailsById';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Mycart from './components/Mycart';
import Update from './components/Update';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : ()=> fetch('../public/brand.json')
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
      {
        path : '/:brandName',
        element : <SingleBrand></SingleBrand>,
        loader : ({params})=> fetch(`http://localhost:5000/${params.brandName}`),
      },
      {
        path : '/details/:id',
        element : <PrivateRoute><DetailsById></DetailsById></PrivateRoute>,
        loader : ({params})=> fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path : '/mycart',
        // element : <PrivateRoute><DetailsById></DetailsById></PrivateRoute>,
        element : <PrivateRoute><Mycart></Mycart></PrivateRoute>,
        loader : ()=> fetch('http://localhost:5000/mycart/products')
      },
      {
        path : '/update/:id',
        element : <Update></Update>,
        loader : ({params})=> fetch(`http://localhost:5000/details/${params.id}`)
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
