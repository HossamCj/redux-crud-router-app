import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import store from "./state/index";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Index from "./pages/index";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const AddPost = React.lazy(() => import("./pages/AddPost"));
const EditPost = React.lazy(() => import("./pages/EditPost"));
const DetailsPost = React.lazy(() => import("./pages/DetailsPost"));

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
            {
                path: "posts/add",
                element: (
                    <Suspense fallback="Loading, Please wait...">
                        <AddPost />
                    </Suspense>
                ),
            },
            {
                path: "posts/:id/details",
                element: (
                    <Suspense fallback="Loading, Please wait...">
                        <DetailsPost />
                    </Suspense>
                ),
                loader: postParamHandler,
            },
            {
                path: "posts/:id/edit",
                element: (
                    <Suspense fallback="Loading, Please wait...">
                        <EditPost />
                    </Suspense>
                ),
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
