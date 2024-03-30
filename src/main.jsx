import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffe from './Components/AddCoffe.jsx';
import UpdateCoffe from './Components/UpdateCoffe.jsx';
import SignUp from './Components/SignUp.jsx';
import SingIn from './Components/SingIn.jsx';
import BIGMain from './BIGMain.jsx';
import Authprovider from '../Authprovider.jsx';
import User from './Components/User.jsx';

const router = createBrowserRouter([
  {
    path:'/',
  element:<BIGMain></BIGMain>,
children:[
  {
    path: "/Home",
    element: <App></App>,
    loader:()=>fetch('https://coffee-shop-serversite.vercel.app/coffee'),
   
  },
  {
    path: "/addCoffee",
    element:<AddCoffe></AddCoffe>
  },
  {
    path: "/UpdateCoffee/:id",
    element:<UpdateCoffe></UpdateCoffe>,
    loader:({params})=>fetch(`https://coffee-shop-serversite.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/Signup',
    element:<SignUp></SignUp>
  },
  {
    path:'/Signin',
    element:<SingIn></SingIn>
  },{
    path: '/users',
    element:<User></User>,
    loader:()=>fetch('https://coffee-shop-serversite.vercel.app/user')
  }
]
}
  

])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Authprovider><RouterProvider router={router} /></Authprovider>
  </React.StrictMode>,
)
