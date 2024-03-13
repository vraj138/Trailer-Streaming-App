import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Search from './Search'
import Login from './Login'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/search",
            element: <Search />
        }
    ])
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body