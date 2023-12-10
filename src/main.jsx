import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About'
import ErrorPage from "./pages/404/404.jsx"

const router = createBrowserRouter(
  [
    {
      path: '/',
      element :<Home/>,
      errorElement: <ErrorPage />,
    
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


