import React from "react"

import ReactDom, {createRoot} from "react-dom/client"

import Data from "./components/data"

import Sidebar from "./components/sidebar"

import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom"

import Empty from "./components/empty"

import Error from "./components/error"

const AppLayout = ()=>{

    return(
        <>

       <Sidebar/> 
       <Outlet/>
        </>
    )
}


const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Empty/>
            },
            {
                path:"/project",
                element:<Data/>,
            },
            {
                path:"/dictionary",
                element:<Empty/>
            },
            {
                path:"/incidents",
                element:<Empty/>
            },
            {
                path:"/manage",
                element:<Empty/>
            }
        ]
    }
])

const root = ReactDom.createRoot(document.getElementById('root')) 
root.render(<RouterProvider router={AppRouter}/>)