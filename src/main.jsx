import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css'
import Root from './pages/routes/root';
import About from './pages/about/About'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element :<Root/>
    
    },
    {
      path: '/about',
      element :<About/>
    
    },

  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
      </React.StrictMode>,
)


