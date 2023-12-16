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
                loader: ({params}) => {
                    if (isNaN(params.id)) {
                        throw new Response("Bad Request", {
                            statusText: "Make sure you insert the right URL",
                            status: 400,
                        });
                    }
                },
            },
            {
                path: "posts/:id/edit",
                element: <EditPost />,
                loader: ({params}) => {
                    if (isNaN(params.id)) {
                        throw new Response("Bad Request", {
                            statusText: "The ID of the user is not a number",
                            status: 400,
                        });
                    }
                },
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
