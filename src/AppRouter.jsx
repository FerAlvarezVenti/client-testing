import React from "react";
import App from "./App";
import Event from "./Event";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
