import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import store from "./state/index";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Index from "./pages/index";
import RootLayout from "./pages/RootLayout";
import AddPost from "./pages/AddPost";
import DetailsPost from "./pages/DetailsPost";
import EditPost from "./pages/EditPost";
import ErrorPage from "./pages/ErrorPage";

const postParamHandler = ({params}) => {
    if (isNaN(params.id)) {
        throw new Response("Bad Request", {
            statusText: "please make sure you insert correct post ID",
            status: 400,
        });
    }
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Index />},
            {path: "posts", element: <Index />},
            {path: "posts/add", element: <AddPost />},
            {
                path: "posts/:id/details",
                element: <DetailsPost />,
                loader: postParamHandler,
            },
            {
                path: "posts/:id/edit",
                element: <EditPost />,
                loader: postParamHandler,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
    // </React.StrictMode>
);
