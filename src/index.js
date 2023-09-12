import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Index from './pages/index'
import RootLayout from "./pages/RootLayout";
import AddPost from './pages/AddPost'
import DetailsPost from './pages/DetailsPost'
import EditPost from './pages/EditPost'
import ErrorPage from './pages/ErrorPage'



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Index />},
      {path: 'posts', element: <Index />},
      {path: 'posts/add', element: <AddPost />},
      {path: 'posts/:id/details', element: <DetailsPost />},
      {path: 'posts/:id/edit', element: <EditPost />}
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
