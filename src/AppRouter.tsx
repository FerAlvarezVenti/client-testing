import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Event from "./Event";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/evento/:urlName",
      element: <Event />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
