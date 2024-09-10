import React from 'react'
import { createRoot } from 'react-dom/client'
import ShowProduct from './components/ShowProduct/ShowProduct'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateProduct from './components/UpdateProduct/UpdateProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowProduct />,
  },
  {
    path: "/updateProduct/:id",
    element: <UpdateProduct />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
