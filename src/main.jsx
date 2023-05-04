import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './component/Home/Home.jsx';
import ContextProvider from './ContextProvider/ContextProvider.jsx';
import Recipe from './component/Recipe/Recipe.jsx';
import Login from './component/Login/Login.jsx';
import Registation from './component/Regitation/Registation.jsx';
import ProviteRoute from './ProviteRoute/ProviteRoute.jsx';
import PageNotFound from './component/PageNotFound/PageNotFound.jsx';
import Blog from './component/Bolg/Blog.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: 'recipe/:id',
        element: <ProviteRoute> <Recipe></Recipe></ProviteRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'regitration',
        element: <Registation></Registation>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }


    ]
  },
  {
    path: '/*',
    element: <PageNotFound></PageNotFound>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
