import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { Single } from "./Single"
// import Header from "../composants/header/Header.jsx"
import Footer from "../composants/footer/Footer.jsx"

const router = createBrowserRouter([
  {
    path:'/',
    element :<Root/>,
    errorElement:<PageError/>,
    children :[
      {
        path: 'about',
        element : <div>A propos</div>
      },
      {
        path: 'logement',
        element: <div className="row">
          <aside className="col-3">
            <h2>SideBar</h2>
          </aside>
          <main className="col-9">
            <Outlet/>
          </main>
        </div>,
        children : [
          {
            path:'id',
            element:<Single/>
          },{
            path:'logement'
          }
        ]
  
      },
    ]
  }
])

function PageError(){
  return <>
  <h1>Une erreur est survenue</h1>
  </>
}

function Root() {
  return<>

  <div className="container my-4">
    <Outlet/>
  </div>
  </>
}

export default function App() {
  return<>
     <RouterProvider router={router} />
     {/* <Header/> */}
     <Footer/>
 </>
}


